# ILIAC

**Intelligent technology for the enterprise, built in Africa.**

ILIAC is a Nigerian technology company building intelligent solutions for the
future of enterprise technology support. Our flagship product, Nuci, combines
artificial intelligence with human expertise to help businesses diagnose and
resolve technical issues faster, escalating to a specialist, with full context,
whenever a problem needs one.

We started with IT support because it is where friction between people and the
systems they rely on shows up first, and most often.

## Nuci

Nuci is an autonomous AI IT engineer. Not a chatbot trained to sound helpful, a
system built to move a technical problem toward resolution, from first message
to fix.

1. **Understand.** Nuci listens to how the user actually describes the problem,
   not a rigid ticket form, and works out what is going on.
2. **Guide.** It walks the user through troubleshooting step by step, adjusting
   in real time based on what has already been tried.
3. **Resolve or escalate.** When Nuci can resolve the issue, it does. When a
   problem genuinely needs a human, it escalates to an ILIAC specialist
   carrying the full conversation, so nothing has to be explained twice.

## What we do

ILIAC works across four capabilities, not as separate services but as one
continuous effort:

- **AI & Intelligent Automation.** Systems that reduce manual, repetitive work.
- **Enterprise Technology & Managed IT.** Technology operations that do not
  slow the business down.
- **Business Software & Digital Solutions.** Software built around real
  operational problems.
- **Cloud & Digital Infrastructure.** Foundations that scale as the business
  does.

## How we build

We think in products, not projects. We would rather ship something narrow and
genuinely useful than promise something broad and generic. Artificial
intelligence, to us, is not the pitch, it is the tool. The pitch is a business
that spends less time fighting its own technology.

We are not trying to replace IT teams. We are trying to remove the part of the
job that should not require a person, so the people can focus on the problems
that do.

## Built in Africa. Going Global.

ILIAC is headquartered in Lagos, Nigeria, and built to a global standard from
day one. Africa is not a market we are starting in before graduating elsewhere.
It is the foundation.

ILIAC is early. We know it. The ambition was never to be Africa's technology
company. It is to be a technology company, from Africa, that the rest of the
world takes seriously.

**Mission:** make IT support work better for everyone.

## Leadership

- **Mu'az Daud**, Founder & Chief Executive Officer
- **Ebuka Okolo**, Technical Co-Founder & Head of Product Engineering

Lagos, Nigeria. business@iliac.xyz

---

## This repository

The ILIAC marketing site. Next.js 16, React 19, Tailwind v4. Eight pages, all
static.

```bash
npm run dev     # localhost:3000
npm run build
npm run lint
```

All site copy lives in `lib/site.ts`, taken verbatim from the approved ILIAC
Website Copy package. Colour and type tokens in `app/globals.css` come from the
ILIAC Brand Identity Guidelines. Shared components are in `components/ui.tsx`.

Still open: the mark in `public/` is traced rather than master artwork, the
contact form opens a mail client instead of posting anywhere, and the canonical
domain is undecided between `iliac.xyz` and `nuci.io`.
