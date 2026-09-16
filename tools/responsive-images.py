#!/usr/bin/env python3
"""Generate responsive WebP variants + a manifest the generator reads.

Lighthouse's "properly size images" fails when one fixed-width image is served
to every viewport. This emits several widths per source so the browser can pick.
"""
import json, os, glob, re
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

SRC_DIR = 'assets/img/site'
WIDTHS  = [400, 700, 1000, 1400]
QUALITY = 76          # down from 84; visually indistinguishable at these sizes

manifest, before, after = {}, 0, 0

# only originals (skip previously generated -NNNw variants)
# match the -NNNw.webp variant suffix specifically; a loose '-w' test also
# excluded real sources like band-walkthrough.webp
sources = [f for f in sorted(glob.glob(f'{SRC_DIR}/*.webp'))
           if not re.search(r'-\d+w\.webp$', os.path.basename(f))]

for src in sources:
    base = os.path.splitext(os.path.basename(src))[0]
    im = Image.open(src)
    w0, h0 = im.size
    before += os.path.getsize(src)
    entries = []
    for w in WIDTHS:
        if w > w0:
            continue
        out = f'{SRC_DIR}/{base}-{w}w.webp'
        h = round(h0 * w / w0)
        im.resize((w, h), Image.LANCZOS).save(out, 'WEBP', quality=QUALITY, method=6)
        after += os.path.getsize(out)
        entries.append({'w': w, 'h': h, 'file': f'/assets/img/site/{base}-{w}w.webp'})
    # re-encode the full-size original at the tighter quality too
    im.save(src, 'WEBP', quality=QUALITY, method=6)
    after += os.path.getsize(src)
    entries.append({'w': w0, 'h': h0, 'file': f'/assets/img/site/{base}.webp'})
    manifest[f'/assets/img/site/{base}.webp'] = {'w': w0, 'h': h0, 'variants': entries}

json.dump(manifest, open('src/image-manifest.json', 'w'), indent=1, sort_keys=True)
print(f'  {len(sources)} sources -> {sum(len(v["variants"]) for v in manifest.values())} files')
print(f'  originals {before/1024:.0f}KB -> all variants {after/1024:.0f}KB')
