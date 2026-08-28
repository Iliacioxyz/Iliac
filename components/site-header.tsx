"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { demoCta, primaryNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The bar sits on the dark hero at rest, so it needs no edge there. Once the
  // page scrolls under it, a hairline separates it from the content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`on-dark sticky top-0 z-50 border-b bg-iliac-black text-white transition-colors duration-300 ${
        scrolled ? "border-white/10" : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="flex min-h-11 items-center transition-colors hover:text-iliac-cyan"
            aria-label={`${site.name} home`}
          >
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="font-jakarta text-label font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <span
                    className={`inline-block pb-1 ${
                      active ? "cyan-rule text-white" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link
              href={demoCta.href}
              className="rounded-pill bg-iliac-blue px-6 py-3 font-jakarta text-[0.9375rem] font-semibold leading-none text-white transition-colors hover:bg-white hover:text-iliac-black"
            >
              {demoCta.label}
            </Link>
          </nav>

          {/* Three rules that fold into a cross. 44px square so it is a
              comfortable thumb target, with the label carried by aria-label
              rather than visible text. */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2.5 flex size-11 items-center justify-center text-white lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                  open ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                  open ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* The panel takes the rest of the viewport under the 64px bar, so the
          menu reads as a screen of its own rather than a dropdown hanging off
          the header. */}
      {open && (
        <div
          id="primary-nav-panel"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-white/10 bg-iliac-black lg:hidden"
        >
          <Container>
            <nav className="flex flex-col pb-12 pt-4" aria-label="Primary">
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-jakarta text-h2 font-semibold text-white"
                  >
                    <span className={active ? "cyan-rule" : ""}>
                      {item.label}
                    </span>
                    <span aria-hidden="true" className="text-h3 text-white/30">
                      →
                    </span>
                  </Link>
                );
              })}
              <Link
                href={demoCta.href}
                onClick={() => setOpen(false)}
                className="mt-10 rounded-pill bg-iliac-blue px-6 py-4 text-center font-jakarta text-[0.9375rem] font-semibold text-white"
              >
                {demoCta.label}
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 text-center text-body text-white/55"
              >
                {site.email}
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
