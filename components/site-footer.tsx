import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container, Rule } from "@/components/ui";
import { primaryNav, secondaryNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark mt-auto bg-iliac-black text-white">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 font-jakarta text-h2 font-semibold text-white">
              <span className="cyan-rule">{site.spine}</span>
            </p>
            <p className="mt-6 text-body text-white/65">{site.oneLine}</p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:gap-16">
            <div>
              <h2 className="eyebrow text-iliac-cyan">Explore</h2>
              <ul className="mt-6 space-y-3">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-1 text-body text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-iliac-cyan">Company</h2>
              <ul className="mt-6 space-y-3">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-1 text-body text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow text-iliac-cyan">Get in touch</h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-block py-1 text-body text-white/70 transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="inline-block py-1 text-body text-white/70">{site.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <Rule tone="dark" className="mt-16" />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="caption text-white/60">
            © {site.year} {site.name}. All rights reserved.
          </p>
          <p className="caption text-white/60">{site.location}</p>
        </div>
      </Container>
    </footer>
  );
}
