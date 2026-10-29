/* Writes content/blog-image-dims.json: the intrinsic size of every webp in
   assets/img/blog, read out of the file header.

   The blog builder needs width and height on every <img> so the browser can
   reserve the space before the file arrives. The scraped tags carry alt,
   title, loading, decoding and mostly srcset, but no dimensions, so without
   this a 405-image archive is 405 layout shifts.

   Run it after adding or replacing images:  node scripts/blog-image-dims.mjs

   No dependency and no decoding: webp stores the size in the first 30
   bytes. Three chunk types, which is the whole of the parsing below. */

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'assets', 'img', 'blog');

function webpSize(buf) {
  if (buf.length < 30) return null;
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = buf.toString('ascii', 12, 16);
  // lossy: two 14-bit values, little endian, after the start code
  if (chunk === 'VP8 ') return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
  // lossless: 14 bits each, packed into one 32-bit word, stored minus one
  if (chunk === 'VP8L') {
    const b = buf.readUInt32LE(21);
    return [(b & 0x3fff) + 1, ((b >> 14) & 0x3fff) + 1];
  }
  // extended: 24-bit canvas size, also stored minus one
  if (chunk === 'VP8X') {
    const u24 = (o) => buf[o] | (buf[o + 1] << 8) | (buf[o + 2] << 16);
    return [u24(24) + 1, u24(27) + 1];
  }
  return null;
}

const dims = {};
const failed = [];
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.webp')) continue;
  const size = webpSize(readFileSync(path.join(dir, f)));
  if (size) dims[`/assets/img/blog/${f}`] = size;
  else failed.push(f);
}

writeFileSync(path.join(root, 'content', 'blog-image-dims.json'), JSON.stringify(dims));
console.log(`  ${Object.keys(dims).length} images measured, ${failed.length} unreadable`);
if (failed.length) {
  console.log('  unreadable (the builder drops these rather than shipping them unsized):');
  failed.forEach((f) => console.log(`    ${f}`));
}
