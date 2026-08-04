# Solicited (Not) Advice — Debt Collection Rights Guide

A free, static reference site on recognizing bad-faith debt collection tactics and understanding consumer rights (federal law, plus Texas/California/New York specifics). Every legal claim links to a primary source — see the Sources page.

## Publishing this to GitHub Pages (free hosting)

1. Create a new repository on GitHub (public repos get free Pages hosting).
2. Upload all files in this folder to the repository root — keep the flat structure, don't nest them in a subfolder.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch."
5. Set **Branch** to `main` (or whichever branch you uploaded to) and folder to `/ (root)`.
6. Save. GitHub will publish the site at `https://[your-username].github.io/[repo-name]/` within a minute or two.

## Why this setup is built to last

- **No framework, no build step.** Plain HTML/CSS/vanilla JS — nothing to compile, nothing that can break from a dependency going stale.
- **No external CDN dependencies.** Fonts are system font stacks, not loaded from Google Fonts or any other CDN — if that CDN ever goes down, this site is unaffected.
- **`.nojekyll` file included.** This tells GitHub Pages to serve files exactly as-is, skipping Jekyll processing — avoids an entire class of GitHub Pages build failures.
- **Every citation links externally** to the actual government/legal source — those are the only links that could ever go stale, and the Sources page exists specifically so that's checkable at a glance.

## File structure

```
index.html                  Homepage
recognize-the-tactic.html   Bad-faith tactics and what law each breaks
playbook.html                General federal rights playbook
medical-debt.html            Medical debt patterns + Texas 11-month rule
credit-card-debt.html        Credit card debt + hub for other debt types
auto-loans.html               Auto loan deficiency balances
utility-telecom.html          Utility/telecom debt + identity theft
student-loans.html            Private student loans
texas.html                    Texas-specific law
outside-texas.html            CA/NY specifics + NAAG directory for all other states
credit-bureau-disputes.html   Credit bureau dispute process
sample-letters.html           Copyable letter templates
sources.html                  Full citation list + disclaimer
styles.css                    Shared design system
script.js                     Client-side search (no framework)
search-index.js               Static search data
```

## Updating content later

To add or correct a citation, edit the relevant HTML page directly and add the same entry to `sources.html`. To add a page to search, add an entry to `search-index.js`. No build step required — changes are live as soon as you push.
