/**
 * Every word on this site comes from the ILIAC Website Copy package (2026).
 * Copy is kept here verbatim so the pages stay a rendering of the approved
 * content rather than a rewrite of it. Anything the package flagged as
 * [INPUT NEEDED] is either omitted or noted where it would have gone.
 */

export const site = {
  name: "ILIAC",
  product: "Nuci",
  // The copy package flags iliac.xyz vs nuci.io as unresolved; iliac.xyz is
  // the address given under Contact, so it is canonical here for now.
  url: "https://iliac.xyz",
  email: "business@iliac.xyz",
  location: "Lagos, Nigeria",
  tagline: "The Future, Built Here.",
  spine: "Built in Africa. Going Global.",
  oneLine:
    "ILIAC is an African technology company building intelligent enterprise solutions, led by Nuci, an AI-powered IT support platform.",
  description:
    "ILIAC builds intelligent enterprise technology from Africa, led by Nuci, an AI-powered IT support system that resolves problems and knows when to bring in a human.",
  year: 2026,
} as const;

/** Primary nav, in the order the copy package specifies. */
export const primaryNav = [
  { href: "/nuci", label: "Nuci" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
] as const;

/** Pages outside the primary nav that still belong in the footer. */
export const secondaryNav = [
  { href: "/industries", label: "Industries" },
  { href: "/investors", label: "Investors" },
] as const;

export const demoCta = {
  href: "/contact#demo",
  label: "Request a Nuci Demo",
} as const;

/* ------------------------------------------------------- capabilities --- */

export const capabilities = [
  {
    id: "ai-automation",
    number: "01",
    name: "AI & Intelligent Automation",
    short: "Systems that reduce manual, repetitive work.",
    headline: "Intelligence applied to real operational work.",
    description:
      "We use artificial intelligence to help businesses automate the repetitive, and improve the judgment-heavy, so teams spend less time on process and more time on the work that actually needs them.",
    achieve:
      "Faster resolution of recurring problems. Fewer manual handoffs. Systems that learn from what already happened, instead of starting from zero every time.",
    points: [
      "Intelligent process automation",
      "AI-assisted diagnosis and triage",
      "Natural-language interfaces for internal tools",
      "Workflow and escalation logic",
      "Automation built around existing systems, not around replacing them",
    ],
    cta: { label: "Talk to us about automation", href: "/contact" },
  },
  {
    id: "enterprise-it",
    number: "02",
    name: "Enterprise Technology & Managed IT",
    short: "Technology operations that don't slow the business down.",
    headline: "IT support that doesn't wait for a ticket to escalate.",
    description:
      "We help organisations reduce the everyday friction of running technology, from routine support requests to the recurring problems most IT teams never get time to actually fix.",
    achieve:
      "Less downtime. Faster first-response. Fewer routine issues reaching a human who has better things to do.",
    points: [
      "AI-powered first-line technical support (Nuci)",
      "Intelligent escalation to human specialists, with full context",
      "Reduced repetitive support load",
      "Around-the-clock employee support",
    ],
    cta: { label: "See how Nuci works", href: "/nuci" },
  },
  {
    id: "business-software",
    number: "03",
    name: "Business Software & Digital Solutions",
    short: "Software built around real operational problems.",
    headline: "Software built around how the business actually works.",
    description:
      "We build digital systems that solve specific operational problems, not generic tools bent into shape after the fact.",
    achieve:
      "Systems that fit the way the team already works. Fewer disconnected tools. Software that gets used, not just adopted.",
    points: [
      "Custom business applications",
      "Internal tools and dashboards",
      "Workflow and operations software",
      "Systems integration",
      "Product thinking applied to internal software, not just customer-facing products",
    ],
    cta: { label: "Discuss a project", href: "/contact" },
  },
  {
    id: "cloud-infrastructure",
    number: "04",
    name: "Cloud & Digital Infrastructure",
    short: "Foundations that scale as the business does.",
    headline: "Foundations that hold, as the business grows.",
    description:
      "We design technology foundations that let businesses operate, scale, and adapt with confidence, without re-architecting every time growth outpaces the systems underneath it.",
    achieve:
      "Infrastructure that scales without drama. Fewer surprises during growth. A technical foundation built for where the business is going, not just where it is.",
    points: [
      "Cloud architecture and setup",
      "Infrastructure modernisation",
      "Scalable systems design",
      "Reliability and uptime-focused engineering",
      "Infrastructure that supports AI-driven products, including Nuci itself",
    ],
    cta: { label: "Talk to our team", href: "/contact" },
  },
];

/* ---------------------------------------------------------------- nuci --- */

/** Nuci's mechanism. The third beat is the one that forks. */
export const mechanism = [
  {
    step: "01",
    name: "Understand",
    body: "Nuci listens to how the user actually describes the problem, not a rigid ticket form, and works out what's actually going on.",
  },
  {
    step: "02",
    name: "Guide",
    body: "Nuci walks the user through troubleshooting step by step, adjusting in real time based on what's already been tried.",
  },
  {
    step: "03",
    name: "Resolve or Escalate",
    body: "When Nuci can resolve the issue, it does. When a problem needs a human (genuinely needs one), Nuci escalates it to an ILIAC IT specialist, carrying the full context of the conversation so nothing has to be explained twice.",
  },
];

export const nuciBenefits = [
  "Faster resolution for everyday technical issues",
  "Fewer repetitive requests reaching human IT staff",
  "Reduced downtime across the organisation",
  "Support available around the clock",
  "A single, consistent front door for technical problems, instead of a scramble every time something breaks",
];

/* ---------------------------------------------------------- industries --- */

export const industries = [
  {
    name: "Small & Growing Businesses",
    body: "Technology support that scales with you, without the overhead of a full internal IT team.",
  },
  {
    name: "Technology Companies",
    body: "Support built by a technology company, for technology companies that expect more from their tools.",
  },
  {
    name: "Financial Services",
    body: "Technical reliability where downtime and delay carry real cost.",
  },
  {
    name: "Healthcare",
    body: "Support that keeps critical systems running when they're needed most.",
  },
  {
    name: "Retail & E-Commerce",
    body: "Technology that keeps pace with a business that never really closes.",
  },
  {
    name: "Professional Services",
    body: "Fewer technical interruptions, more billable, focused work.",
  },
  {
    name: "And Beyond",
    body: "If your business depends on technology to operate, ILIAC is built for you.",
  },
];

/* ------------------------------------------------------------ partners --- */

export const partnerships = [
  {
    name: "Technology Partnerships",
    body: "Integrations and technical collaborations that extend what Nuci and ILIAC's platform can do.",
  },
  {
    name: "Enterprise Partnerships",
    body: "Working directly with organisations to bring intelligent IT support into how they already operate.",
  },
  {
    name: "Implementation Partnerships",
    body: "Partners who help deploy and support ILIAC's technology within client organisations.",
  },
  {
    name: "Strategic Partnerships",
    body: "Longer-term relationships aligned around shared markets, distribution, or vision.",
  },
  {
    name: "Ecosystem Partnerships",
    body: "Media, community, and industry relationships that help more businesses discover what intelligent IT support can look like.",
  },
];

/* --------------------------------------------------------------- about --- */

/**
 * The photographs are used as shot, studio backdrop and all. `focus` sets the
 * crop anchor: a square avatar has to drop part of each frame, and the two
 * portraits carry the face at different heights.
 */
export const leadership = [
  {
    name: "Mu'az Daud",
    role: "Founder & Chief Executive Officer",
    photo: "/muaz.png",
    // 1341x1173, near square: the full height is kept, so centre is right.
    focus: "object-center",
  },
  {
    name: "Ebuka Okolo",
    role: "Technical Co-Founder & Head of Product Engineering",
    photo: "/ebuka.jpeg",
    // 810x1080, tall: anchoring to the top keeps the face off the bottom edge.
    focus: "object-top",
  },
];

/* ------------------------------------------------------------- contact --- */

export const contactPaths = [
  {
    name: "General Enquiries",
    body: "Questions about ILIAC, our capabilities, or anything else.",
    subject: "General enquiry",
  },
  {
    name: "Business Enquiries",
    body: "Looking to work with ILIAC on a project or engagement? Tell us what you're building.",
    subject: "Business enquiry",
  },
  {
    name: "Nuci Demo Requests",
    body: "See Nuci resolve a real technical problem, live. Request a demo and we'll set up a time.",
    subject: "Nuci demo request",
  },
  {
    name: "Partnerships",
    body: "Building something ILIAC could be part of? Let's explore it.",
    subject: "Partnership enquiry",
  },
  {
    name: "Investment Enquiries",
    body: "Interested in ILIAC's long-term direction? Reach out to start the conversation.",
    subject: "Investment enquiry",
  },
];
