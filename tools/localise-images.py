#!/usr/bin/env python3
"""Download blog images off the old CDNs and rewrite post bodies to local paths.

The migrated bodies point at octanecdn / dynamixse. Those break the moment the
old site is decommissioned, so pull them local and optimise on the way in.
"""
import json, os, re, glob, hashlib, urllib.request, urllib.error, io
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

OUT = 'assets/img/blog'
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36'}
MAXW = 1000
os.makedirs(OUT, exist_ok=True)

urls = json.load(open('content/blog-images.json'))
mapping, ok, fail, bytes_in, bytes_out = {}, 0, 0, 0, 0

def norm(u):
    if u.startswith('//'): return 'https:' + u
    if u.startswith('/'):  return 'https://www.healthcarecompliancepros.com' + u
    return u

for u in urls:
    full = norm(u)
    name = hashlib.sha1(u.encode()).hexdigest()[:12]
    dest = f'{OUT}/{name}.webp'
    if os.path.exists(dest):
        mapping[u] = f'/{dest}'; ok += 1; continue
    try:
        req = urllib.request.Request(full, headers=UA)
        raw = urllib.request.urlopen(req, timeout=45).read()
        bytes_in += len(raw)
        im = Image.open(io.BytesIO(raw))
        im = im.convert('RGBA' if im.mode in ('RGBA','LA','P') and 'transparency' in im.info else 'RGB')
        w, h = im.size
        if w > MAXW:
            im = im.resize((MAXW, round(h * MAXW / w)), Image.LANCZOS)
        im.save(dest, 'WEBP', quality=80, method=6)
        bytes_out += os.path.getsize(dest)
        mapping[u] = f'/{dest}'
        ok += 1
    except Exception as e:
        fail += 1
        mapping[u] = None          # leave the original reference in place

json.dump(mapping, open('content/blog-image-map.json','w'), indent=1)
print(f'  downloaded {ok}, failed {fail}')
if bytes_in:
    print(f'  {bytes_in/1024/1024:.1f}MB -> {bytes_out/1024/1024:.1f}MB')

# rewrite post bodies
rewritten = files = 0
for f in glob.glob('content/blog/*.json'):
    d = json.load(open(f))
    body, n = d['body'], 0
    for old, new in mapping.items():
        if new and old in body:
            body = body.replace(old, new); n += 1
    if n:
        d['body'] = body
        json.dump(d, open(f,'w'), indent=1)
        rewritten += n; files += 1
print(f'  rewrote {rewritten} references across {files} posts')
remaining = sum(1 for f in glob.glob('content/blog/*.json')
                for _ in re.findall(r'src="(?:https?:)?//[^"]*(?:octanecdn|dynamixse|googleusercontent)', json.load(open(f))['body']))
print(f'  external image references remaining: {remaining}')
