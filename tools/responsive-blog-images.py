#!/usr/bin/env python3
"""Generate responsive variants for the migrated blog images and rewrite the
post bodies to use srcset. 273 of 399 were being served at 1000px into a
~700px prose column."""
import json, glob, os, re
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

WIDTHS = [320, 640, 900]
SRC = 'assets/img/blog'
made = 0
variants = {}

for f in sorted(glob.glob(f'{SRC}/*.webp')):
    base = os.path.splitext(os.path.basename(f))[0]
    if re.search(r'-\d+w$', base):      # already a variant
        continue
    im = Image.open(f)
    w0, h0 = im.size
    entries = []
    for w in WIDTHS:
        if w >= w0:
            continue
        out = f'{SRC}/{base}-{w}w.webp'
        if not os.path.exists(out):
            im.resize((w, round(h0 * w / w0)), Image.LANCZOS).save(out, 'WEBP', quality=78, method=6)
            made += 1
        entries.append((w, f'/{out}'))
    entries.append((w0, f'/{f}'))
    if len(entries) > 1:
        variants[f'/{f}'] = entries

print(f'  generated {made} variants for {len(variants)} images')

# rewrite bodies: add srcset + sizes to each <img>
touched = imgs = 0
for jf in glob.glob('content/blog/*.json'):
    d = json.load(open(jf))
    body = d['body']; before = body

    def add_srcset(m):
        global imgs
        tag = m.group(0)
        if 'srcset=' in tag:
            return tag
        src = (re.search(r'src="([^"]+)"', tag) or [None, ''])[1]
        v = variants.get(src)
        if not v:
            return tag
        ss = ', '.join(f'{p} {w}w' for w, p in sorted(v))
        imgs += 1
        return tag[:-1] + f' srcset="{ss}" sizes="(max-width: 820px) 100vw, 700px">'

    body = re.sub(r'<img\b[^>]*>', add_srcset, body)
    if body != before:
        d['body'] = body
        json.dump(d, open(jf, 'w'), indent=1)
        touched += 1

print(f'  added srcset to {imgs} images across {touched} posts')
