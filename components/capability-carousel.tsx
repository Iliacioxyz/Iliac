"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { capabilities } from "@/lib/site";

/**
 * The four capabilities as one horizontal panel set instead of four stacked
 * sections — the same copy in roughly a quarter of the scroll depth.
 *
 * Built on CSS scroll-snap rather than a carousel library: every panel stays
 * in the DOM (so the copy is still indexed and still reachable by keyboard
 * and find-in-page), the scroller is a real focusable region, and the buttons
 * only nudge scroll position. Nothing auto-advances.
 *
 * The homepage diagram links to /solutions#ai-automation and friends, so the
 * panel ids are kept and the matching panel is scrolled into view on load.
 */
export function CapabilityCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // Mirrors `active` for the arrow buttons: two clicks in one tick would both
  // read the same stale render value and only advance one panel.
  const activeRef = useRef(0);

  // Measured from the rendered boxes rather than offsetLeft: the scroller is
  // not the panels' offsetParent, so offsetLeft would be relative to the wrong
  // element and every jump would land on the first panel.
  const goTo = useCallback((index: number, smooth = true) => {
    const node = scroller.current;
    if (!node) return;
    const target = Math.min(Math.max(index, 0), capabilities.length - 1);
    const panel = node.children[target] as HTMLElement | undefined;
    if (!panel) return;
    const left =
      panel.getBoundingClientRect().left -
      node.getBoundingClientRect().left +
      node.scrollLeft;

    // Move the indicator now rather than waiting for the scroll to settle —
    // the control should feel answered the moment it is pressed.
    setActive(target);
    activeRef.current = target;
    // "auto" would defer to the element's CSS scroll-behavior, which is
    // smooth here — so a deep link would animate instead of landing.
    node.scrollTo({ left, behavior: smooth ? "smooth" : "instant" });
  }, []);

  // Keep the indicator in step with however the panel was reached — button,
  // trackpad swipe, or keyboard scrolling inside the region.
  useEffect(() => {
    const node = scroller.current;
    if (!node) return;
    // Whichever panel's left edge is nearest the scroller's, rather than
    // dividing by width — the gap between panels makes that drift.
    const onScroll = () => {
      const origin = node.getBoundingClientRect().left;
      let nearest = 0;
      let shortest = Infinity;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i] as HTMLElement;
        const distance = Math.abs(child.getBoundingClientRect().left - origin);
        if (distance < shortest) {
          shortest = distance;
          nearest = i;
        }
      }
      setActive(nearest);
      activeRef.current = nearest;
    };
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  // Honour a deep link from the homepage capability diagram.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const index = capabilities.findIndex((c) => c.id === id);
    if (index > 0) goTo(index, false);
  }, [goTo]);

  return (
    <div>
      {/* Which of the four you are on, and a way to jump. */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 border-b border-iliac-black/12 pb-4">
        {capabilities.map((capability, index) => {
          const current = index === active;
          return (
            <button
              key={capability.id}
              type="button"
              onClick={() => goTo(index)}
              aria-current={current ? "true" : undefined}
              className={`rounded-pill px-4 py-2.5 text-left font-jakarta text-label font-semibold transition-colors ${
                current
                  ? "bg-iliac-black text-off-white"
                  : "text-near-black/60 hover:bg-iliac-black/5 hover:text-near-black"
              }`}
            >
              <span className="tabular-nums">{capability.number}</span>
              <span className="ml-2 hidden sm:inline">{capability.name}</span>
            </button>
          );
        })}

        <div className="ml-auto flex gap-2">
          <CarouselButton
            label="Previous capability"
            disabled={active === 0}
            onClick={() => goTo(activeRef.current - 1)}
          >
            ←
          </CarouselButton>
          <CarouselButton
            label="Next capability"
            disabled={active === capabilities.length - 1}
            onClick={() => goTo(activeRef.current + 1)}
          >
            →
          </CarouselButton>
        </div>
      </div>

      <div
        ref={scroller}
        tabIndex={0}
        role="region"
        aria-label="ILIAC capabilities"
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {capabilities.map((capability) => (
          <article
            key={capability.id}
            id={capability.id}
            className="w-full shrink-0 snap-start scroll-mt-24"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="eyebrow text-near-black/65">
                  {capability.number}. {capability.name}
                </p>
                <h3 className="mt-6 max-w-[18ch] font-jakarta text-h1 font-bold text-near-black">
                  {capability.headline}
                </h3>
                <p className="mt-6 max-w-[52ch] text-body text-near-black/80">
                  {capability.description}
                </p>
                <Link
                  href={capability.cta.href}
                  className="group mt-8 inline-flex min-h-11 items-center gap-3 font-jakarta text-label font-semibold text-iliac-blue transition-colors hover:text-iliac-black"
                >
                  {capability.cta.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              <div>
                <h4 className="eyebrow text-near-black/65">
                  What we help businesses achieve
                </h4>
                <p className="mt-5 max-w-[46ch] text-h3 font-medium text-near-black">
                  {capability.achieve}
                </p>

                <h4 className="eyebrow mt-10 text-near-black/65">Capabilities</h4>
                <ul className="mt-5">
                  {capability.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-5 border-t border-iliac-black/12 py-4"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-5 shrink-0 bg-iliac-blue"
                      />
                      <span className="text-body text-near-black/80">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {capability.id === "enterprise-it" && (
                  <p className="caption mt-6 text-near-black/70">
                    Reporting and dashboard visibility into recurring technical
                    issues is pending confirmation before publication.
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-pill border border-iliac-black/15 font-jakarta text-h3 text-near-black transition-colors hover:border-iliac-black hover:bg-iliac-black hover:text-off-white disabled:cursor-not-allowed disabled:border-iliac-black/10 disabled:text-near-black/40 disabled:hover:bg-transparent"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
