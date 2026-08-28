import Link from "next/link";
import { capabilities } from "@/lib/site";

/**
 * Section 2's headline is already a diagram brief: "One company. Four
 * capabilities. A single direction." So the four capabilities are drawn
 * converging rather than listed in a grid — the structure carries the claim
 * instead of the copy carrying it alone.
 *
 * On wide screens the four rows fan into a single arrow on the right. Below
 * lg the same idea runs vertically: a spine down the left, a node per
 * capability, and one arrow at the foot. Connectors are drawn in ILIAC Blue:
 * cyan measures 1.93:1 on Off White, so it stays on dark grounds, and the
 * guidelines put blue in the lead for light layouts.
 */
export function CapabilityDiagram() {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_7rem_13rem] lg:items-stretch">
      {/* The four capabilities. Still real links, still the deck's copy.
          The spine sits outside the list so it is not a .stagger child — it
          would otherwise take the first animation slot and shift every delay. */}
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[7px] top-6 w-px bg-iliac-blue/30 lg:hidden"
        />
        <ul className="stagger grid grid-cols-1 gap-3 lg:auto-rows-fr">
        {capabilities.map((capability) => (
          <li key={capability.id} className="relative pl-8 lg:pl-0">
            {/* Node on the spine, small screens only. */}
            <span
              aria-hidden="true"
              className="absolute left-[3px] top-9 size-[9px] rounded-full border-2 border-iliac-blue bg-off-white lg:hidden"
            />
            <Link
              href={`/solutions#${capability.id}`}
              className="group relative flex h-full items-baseline gap-5 rounded-card bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(10,22,40,0.06),0_12px_32px_rgba(10,22,40,0.08)] sm:px-8"
            >
              <span className="eyebrow shrink-0 text-near-black/65">
                {capability.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-jakarta text-h2 font-semibold text-near-black">
                  {capability.name}
                </span>
                <span className="mt-2 block text-body text-near-black/70">
                  {capability.short}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 font-jakarta text-label font-semibold text-iliac-blue transition-transform group-hover:translate-x-1"
              >
                →
              </span>

              {/* Where the connector meets the row, wide screens only. */}
              <span
                aria-hidden="true"
                className="absolute -right-[5px] top-1/2 hidden size-[9px] -translate-y-1/2 rounded-full border-2 border-iliac-blue bg-white lg:block"
              />
            </Link>
          </li>
        ))}
        </ul>
      </div>

      {/* The convergence itself. Four rows into one line. */}
      <div aria-hidden="true" className="relative hidden lg:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          {[11.57, 37.19, 62.81, 88.43].map((y) => (
            <path
              key={y}
              d={`M0 ${y} C 55 ${y}, 45 50, 100 50`}
              stroke="var(--color-iliac-blue)"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      {/* Where the four arrive: the deck's own phrase for it. The arrow turns
          with the diagram — down the spine on small screens, along the
          convergence on wide ones. */}
      <div className="mt-6 flex items-center gap-4 pl-[2px] lg:mt-0 lg:gap-5 lg:pl-0">
        <span
          aria-hidden="true"
          className="font-jakarta text-h2 text-iliac-blue lg:-ml-2"
        >
          <span className="lg:hidden">↓</span>
          <span className="hidden lg:inline">→</span>
        </span>
        <p className="font-jakarta text-h3 font-semibold leading-snug text-near-black">
          One continuous effort
        </p>
      </div>
    </div>
  );
}
