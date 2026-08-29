# ILIAC

Marketing site for ILIAC, the Lagos technology company behind Nuci.
Next.js 16, React 19, Tailwind v4. Eight pages, all static.

```bash
npm run dev     # localhost:3000
npm run build
npm run lint
```

## Where the content comes from

Two documents govern this site and neither is in the repo:

- **ILIAC Website Copy package** — all wording. Kept verbatim in `lib/site.ts`.
- **ILIAC Brand Identity Guidelines** — colour and type, encoded as tokens in
  `app/globals.css`.

A request about layout is not permission to drop copy the package specifies.

## Worth knowing

- Palette rule is three brand colours per design. Pages run on ILIAC Black,
  Blue and Cyan; Amber is unused because the shared header and footer already
  carry cyan.
- Cyan measures 1.93:1 on Off White, so it only appears on dark grounds. Mid
  Grey measures 3.86:1, not the 4.6:1 the deck claims, so it is not used for
  small text.
- Scroll reveals are CSS view timelines, not IntersectionObserver. The hidden
  state lives inside `@supports`, so anything that can't animate still shows
  the content. Swapping in an observer would risk a blank page.
- `components/ui.tsx` is the design system. Pages compose it rather than
  reaching for raw Tailwind.

## Unfinished

- `public/iliac-mark.svg` is traced from a low-res image, not the master
  artwork. Swap it in `components/logo.tsx`.
- The contact form has no backend — it opens the visitor's mail client.
- Canonical domain undecided: `iliac.xyz` vs `nuci.io`.
- Escalation and reporting claims need confirming before production.
