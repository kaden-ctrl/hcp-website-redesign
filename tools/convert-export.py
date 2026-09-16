#!/usr/bin/env python3
"""Convert the Octane CSV export into the site's JSON content store.

  python3 tools/convert-export.py <export.csv>

Sanitises the body HTML (Word artifacts, presentational spans, inline styles),
normalises dates, and flags thin posts so the generator can noindex them
rather than publishing hundreds of low-value pages.
"""
import csv, sys, re, json, os, html, collections

csv.field_size_limit(sys.maxsize)
SRC = sys.argv[1] if len(sys.argv) > 1 else '/Users/kadenmyers/Downloads/healthcare-compliance-pros-articles.csv'
OUT = 'content/blog'
THIN_WORDS = 200

ALLOWED = {'p','h2','h3','h4','ul','ol','li','strong','em','a','blockquote','img','table','thead','tbody','tr','th','td','br'}

def clean_html(raw):
    if not raw: return ''
    s = raw
    s = re.sub(r'<!--\[if[\s\S]*?<!\[endif\]-->', ' ', s)     # Word conditional comments
    s = re.sub(r'<!--[\s\S]*?-->', ' ', s)
    s = re.sub(r'<o:p\b[^>]*>.*?</o:p>', ' ', s, flags=re.I|re.S)
    s = re.sub(r'</?o:[^>]*>', ' ', s, flags=re.I)             # stray Word namespaces
    s = re.sub(r'<(script|style)[\s\S]*?</\1>', ' ', s, flags=re.I)
    s = re.sub(r'</?(span|font|div|section)\b[^>]*>', ' ', s, flags=re.I)  # unwrap presentational
    s = re.sub(r'\s(style|class|lang|dir|align|width|height|border|cellpadding|cellspacing|bgcolor|face|color|size)="[^"]*"', '', s, flags=re.I)
    s = re.sub(r"\s(style|class|lang|dir|align)='[^']*'", '', s, flags=re.I)
    # drop any tag not on the allow-list, keeping its text
    def keep(m):
        tag = m.group(2).lower()
        return m.group(0) if tag in ALLOWED else ' '
    s = re.sub(r'<(/?)(\w+)[^>]*>', keep, s)
    s = re.sub(r'<p>\s*(&nbsp;|\s)*</p>', ' ', s, flags=re.I)  # empty paragraphs
    s = re.sub(r'(&nbsp;| )', ' ', s)
    s = re.sub(r'[ \t]{2,}', ' ', s)
    s = re.sub(r'(\s*<br\s*/?>\s*){3,}', '<br>', s, flags=re.I)
    return s.strip()

def words(h): return len(re.sub(r'<[^>]+>', ' ', h).split())

rows = list(csv.DictReader(open(SRC, newline='', encoding='utf-8', errors='replace')))
key = {h.lstrip('﻿'): h for h in rows[0].keys()}
def g(r, n): return (r.get(key.get(n, n)) or '').strip()

os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT):
    if f.endswith('.json'): os.remove(os.path.join(OUT, f))

kept, thin, skipped, bad_date = 0, 0, 0, 0
images = set()
slugs = {}

for r in rows:
    if g(r,'pagelive') != 'live' or g(r,'pageintrash') != '0' or g(r,'published') != 'yes':
        skipped += 1; continue
    url = g(r,'url').strip('/')
    if not url: skipped += 1; continue

    # Octane stores some bodies in pagemaincontent and others inside the
    # pagedata JSON blob under a 'content' key. Missing the second form
    # silently drops ~180 posts, so check both.
    raw = g(r,'pagemaincontent')
    if not raw:
        try:
            pd = json.loads(g(r,'pagedata') or '{}')
            cands = [v for v in pd.values() if isinstance(v, str) and len(v) > 80]
            raw = max(cands, key=len) if cands else ''
        except Exception:
            raw = ''
    body = clean_html(raw)
    w = words(body)
    if w == 0: skipped += 1; continue

    date = g(r,'publishdate')[:10]
    if not re.match(r'(19[89]\d|20[0-4]\d)-\d{2}-\d{2}', date):   # 0000 / 1970 sentinels
        date = g(r,'created_at')[:10]; bad_date += 1
    if not re.match(r'\d{4}-\d{2}-\d{2}', date): date = ''

    for m in re.findall(r'<img[^>]+src="([^"]+)"', body): images.add(m)

    # CMS images carry no alt/title; derive them from the post title so the
    # archive cannot regress audit finding #9.
    safe_title = html.unescape(g(r,'pagetitle')).replace('"', "'")[:110]
    def fix_img(m):
        tag = m.group(0)
        if ' alt=' not in tag:   tag = tag[:-1] + f' alt="{safe_title}">'
        if ' title=' not in tag: tag = tag[:-1] + f' title="{safe_title}">'
        if ' loading=' not in tag: tag = tag[:-1] + ' loading="lazy" decoding="async">'
        return tag
    body = re.sub(r'<img\b[^>]*>', fix_img, body)

    is_thin = w < THIN_WORDS
    if is_thin: thin += 1

    slug = url.split('/')[-1]
    if slug in slugs: slug = f"{slug}-{g(r,'pageid')}"
    slugs[slug] = url

    json.dump({
        'id': g(r,'pageid'),
        'url': '/' + url + '/',
        'slug': slug,
        'title': html.unescape(g(r,'pagetitle')),
        'titleTag': html.unescape(g(r,'titletag')) or html.unescape(g(r,'pagetitle')),
        'description': html.unescape(g(r,'metadesc')),
        'date': date,
        'updated': g(r,'updated_at')[:10],
        'oldUrl': g(r,'oldurl').strip('/'),
        'words': w,
        'thin': is_thin,
        'body': body,
    }, open(os.path.join(OUT, slug + '.json'), 'w'), indent=1)
    kept += 1

print(f"  kept {kept}   thin(<{THIN_WORDS}w, will be noindexed) {thin}   skipped {skipped}   dates repaired {bad_date}")
print(f"  distinct images referenced: {len(images)}")
json.dump(sorted(images), open('content/blog-images.json','w'), indent=1)
