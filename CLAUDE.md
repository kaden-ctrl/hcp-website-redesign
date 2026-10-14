# Healthcare Compliance Pros

## Publishing workflow

Never open pull requests. Commit and push all changes to the `v2` branch. After
pushing, give me the staging preview URL and a summary of what changed. Only
merge `v2` into `main` and push when I explicitly say to publish or push it live.

A production deploy costs 15 Netlify credits. Branch deploys and deploy previews
cost nothing, which is the other reason work lands on `v2` first.

## Project facts

- Netlify site slug is `hcpwebsite-redesign`; production is <https://hcpwebsite-redesign.netlify.app>
- Staging preview: <https://v2--hcpwebsite-redesign.netlify.app>
- Repo: `kaden-ctrl/hcp-website-redesign`
- Build: `node build.mjs`, zero dependencies, output in `dist/`
- The eventual production domain is healthcarecompliancepros.com. Canonicals
  already point there, so the Netlify URL is a staging host, not the final one.

## Before pushing

Both must pass:

```
node build.mjs                                          # 14 audit checks, build fails on any violation
~/.claude/skills/website-build-standards/scripts/scan-copy.sh src assets
```

Scan `src` and `assets` specifically, not the repo root. Scanning the root also
walks `dist/` and `standalone/`, which are generated, and `README.md`, whose
prose trips the banned-phrase and emoji checks without anything being wrong.

## Known deviations, accepted on purpose

Do not "fix" these without asking. Each is a deliberate call, not an oversight.

- **Custom cursor** (`.cursor-glow`, `.cur-dot`, `.cur-ring`). The build
  standards prohibit custom cursors. The client asked for it explicitly, to
  match the interactive slide deck, and confirmed it stays after being shown
  the conflict. Note that `scan-copy.sh` does *not* catch it: the scanner greps
  for `cursor: url(`, `custom-cursor` and `cursor-follow`, none of which match
  these class names. A green scan is not evidence this is absent.
- **Magnetic buttons and 3D card tilt** (`.magnetic`, `.tilt`). Same prohibited
  category. Added to match the deck; offered for removal and not yet ruled on.
- **Legal pages use a halved content-to-code floor.** `LEGAL_MIN_RATIO` in
  `build.mjs`. The fulfillment policy is 168 words because that is the entire
  policy on the client's own site. The alternative was padding a legal document
  to clear an audit.

## Outstanding, known, not forgotten

- No cookie consent banner, while the analytics beacon fires on load.
- No terms page. The client's current site does not have one to transcribe:
  `/terms` and `/cookie-policy` on their domain soft-404 to the homepage.
- The four testimonials have no clearance from the client, and one quotes a
  specific dollar figure.
- Two leadership portraits missing (Mitchell Steffens, Lara Schiffman); both
  render as initials.
- Kristin Torres vs Torrest: the client's two decks disagree. Shipping
  "Torrest".
- `standalone/` is 1,611 tracked files of September build output on the old
  palette. Regenerate or drop from git.
- Lighthouse and the Playwright suite have never been run. Do not claim
  performance numbers without measuring them.

## Notes

- No em dashes in rendered copy. The build enforces this and checks both the
  literal character and the `&mdash;` entity, because `textOf` does not decode
  entities and checking one alone silently misses the other.
- This file is not published. `netlify.toml` sets `publish = "dist"`, and the
  build only copies `assets/` plus generated pages into `dist/`, so nothing at
  the repo root is served. Keep it that way if the publish directory changes.
