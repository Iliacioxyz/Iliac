# ILIAC

Marketing site for ILIAC, the Lagos technology company behind Nuci. Next.js 16
(App Router), React 19, Tailwind v4. Eight static pages, no database, no CMS.

```bash
npm run dev     # localhost:3000
npm run build   # all routes prerender static
npm run lint
```

---

## Two documents govern this site

Neither lives in the repo, and the site is downstream of both.

**ILIAC Website Copy package (2026)** is authoritative for content — page
architecture, headlines, body copy, CTA wording, SEO titles, meta descriptions.
Its words live verbatim in `lib/site.ts` so the pages render approved copy
rather than a paraphrase of it. If you are changing words, change them there.

**ILIAC Brand Identity Guidelines** is authoritative for colour and type. Both
are encoded as tokens in `app/globals.css`.

The distinction that matters: **a styling instruction is not permission to cut
copy.** Both have been confused here before, and the homepage lost five
specified sections to a request that was only ever about layout.

## The brand system, and where its own numbers don't hold

Palette rule from the deck: never combine more than three brand colours in one
design. Every page runs on ILIAC Black, ILIAC Blue and ILIAC Cyan.

Three things were measured rather than assumed, and each changed the build:

| | Deck says | Measured | Consequence |
|---|---|---|---|
| Mid Grey `#6B7FA3` on Off White | 4.6:1, "passes AA" | **3.86:1** | Fails AA. Not used for small text; `text-near-black/65` instead. |
| ILIAC Cyan on Off White | — | **1.93:1** | Cyan is a dark-ground colour. On light sections, structure is drawn in Blue. |
| ILIAC Blue on Light Grey | — | **4.36:1** | Under AA. Light Grey is a divider, never a page fill — which is what the deck assigns it anyway. |

`#6B7FA3` is still defined as a token because it is ILIAC's colour. Correcting
it to roughly `#5F7292` would deliver the 4.6:1 the deck claims.

**ILIAC Amber is deliberately unused.** The header and footer carry cyan on
every page, so amber anywhere makes a four-colour composition. It stays
available for print and collateral that can drop cyan entirely.

Type is Plus Jakarta Sans for headings and labels, DM Sans for body, on the
deck's eight-step scale. Display is the one extension: the deck tops out at
48/800 and heroes scale above that at the same weight and face.

## Deliberate departures from the copy deck

Anyone re-checking the site against the PDF will find these. They are intended.

- **No competitor names.** The deck's Section 3 pull-quote named a rival
  product. Replaced with "Intelligence where it's faster. People where it
  matters." — from the deck's own approved tagline list.
- **Em dashes replaced** with commas, colons, semicolons or full stops
  throughout, per house preference. Compound hyphens (`AI-powered`, `tier-1`)
  are untouched. Page-title separators still use them.
- **`[INPUT NEEDED]` items are omitted, not invented.** The unconfirmed
  reporting/dashboard capability is left out of the Solutions list with a note
  in its place. No client logos, testimonials, stats or case studies appear
  anywhere, because none were supplied.

## Things that look like mistakes but aren't

- **Scroll reveals use CSS view timelines, not IntersectionObserver.** This is
  the important one. An observer-driven reveal leaves content permanently
  invisible if the observer never fires, with no recovery. Here the hidden
  state exists only inside `@supports (animation-timeline: view())`, so a
  browser without support renders everything outright. Do not "modernise" this
  into an observer.
- **The capability diagram uses `.stagger-fade`, not `.stagger`.** The 16px
  rise carries the anchor nodes away from connector lines that cannot follow,
  so mid-reveal a curve visibly misses its node. Anything anchored to drawn
  geometry must fade only.
- **The diagram's connector area is inset by half a row.** That puts the four
  curve origins at 0, ⅓, ⅔ and 1 of the span regardless of row height.
  Percentages of the full column are only correct at one specific height.
- **The mobile drawer stays mounted and uses `inert`.** That is what lets it
  animate in both directions without leaving its links in the tab order.
- **`components/ui.tsx` is the design system.** `Section`, `Headline`, `Body`,
  `ButtonLink`, `Card`, `ArrowLink`, `Rule`. Page files compose these; they
  should rarely reach for raw Tailwind for anything structural.

## Not finished

- **The logo is a reconstruction.** `public/iliac-mark.svg` was traced by
  sampling a 140px raster — four parallelograms sheared 15° in 180° rotational
  symmetry, matching the source at 96.8% IoU. It is close, not authoritative.
  Replace it with the master artwork; header, footer and favicon all read from
  `components/logo.tsx`.
- **The contact form has no backend.** It composes the enquiry and hands it to
  the visitor's mail client, and the button says so. Wiring a real endpoint is
  the obvious next step.
- **Canonical domain is unresolved.** The copy package lists both `iliac.xyz`
  and `nuci.io`. `lib/site.ts` uses `iliac.xyz`, which drives `metadataBase`
  and the sitemap from one place.
- **Leadership backdrops don't match.** The two headshots were taken against
  different studio grounds — one warm off-white, one grey — so the circular
  avatars read as slightly different discs. Cutting the subjects out was tried
  and abandoned; the edges did not survive scrutiny.
- **Escalation and reporting claims need confirming** as live, beta or upcoming
  before this goes to production.

## A note on Next.js

`AGENTS.md` is generated by `next dev` and is not decorative: this Next version
has breaking changes against older knowledge. The bundled docs in
`node_modules/next/dist/docs/` are the reference that matches the installed
version.
