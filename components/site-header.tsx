"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { demoCta, primaryNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Standard dialog behaviour: focus moves into the panel on open and returns
  // to the control that opened it on close, and Escape dismisses.
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
            ref={menuButton}
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

      {/*
        A floating drawer rather than a dropdown. It stays mounted so it can
        animate both ways, and `inert` keeps its links out of the tab order and
        the accessibility tree while it is shut.

        The scrim is deliberately translucent: the page stays legible behind
        it, which is what makes the panel read as floating over the site rather
        than replacing it.
      */}
      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-iliac-black/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          id="primary-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute bottom-3 right-3 top-3 flex w-[80%] max-w-[21rem] flex-col overflow-y-auto rounded-panel bg-iliac-black shadow-[0_24px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-x-0" : "translate-x-[calc(100%+1.5rem)]"
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-5">
            <Logo className="text-white" />
            <button
              ref={closeButton}
              type="button"
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
              aria-label="Close menu"
              className="-mr-2 flex size-11 items-center justify-center text-white/70 transition-colors hover:text-white"
            >
              <span aria-hidden="true" className="relative block size-5">
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-1/2 block h-0.5 w-5 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-6 pb-8 pt-6" aria-label="Primary">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className="flex items-center justify-between border-b border-white/10 py-4 font-jakarta text-h2 font-semibold text-white"
                >
                  <span className={active ? "cyan-rule" : ""}>{item.label}</span>
                  <span aria-hidden="true" className="text-h3 text-white/30">
                    →
                  </span>
                </Link>
              );
            })}

            <Link
              href={demoCta.href}
              onClick={() => setOpen(false)}
              className="mt-8 rounded-pill bg-iliac-blue px-6 py-4 text-center font-jakarta text-[0.9375rem] font-semibold text-white"
            >
              {demoCta.label}
            </Link>

            <a
              href={`mailto:${site.email}`}
              className="mt-auto pt-8 text-center text-body text-white/55"
            >
              {site.email}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
