import { Link } from "@tanstack/react-router";

import { Diamond } from "./primitives";

const columns = [
  {
    title: "Capacity",
    links: [
      { label: "Audit Team", to: "/audit-team" },
      { label: "Accounting Team", to: "/accounting-team" },
      { label: "How It Works", to: "/how-it-works" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "Why Calveris", to: "/why-calveris" },
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[1.4rem] tracking-[0.34em]">CALVERIS</span>
            <Diamond />
          </div>
          <p className="mt-6 max-w-sm font-display text-2xl font-light italic text-ink-foreground/80">
            Your extended audit &amp; accounting team.
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/55">
            Calveris Limited provides experienced audit and accounting professionals to UK
            accountancy firms. Your client. Your relationship. Your control. Our people.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="lg:col-span-2">
            <p className="eyebrow text-ink-foreground/45">{column.title}</p>
            <ul className="mt-6 space-y-3">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-foreground/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <p className="eyebrow text-ink-foreground/45">Enquiries</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/75">
            <li>
              <a href="mailto:info@calveris.co.uk" className="transition-colors hover:text-accent">
                info@calveris.co.uk
              </a>
            </li>
            <li>
              <a href="tel:+447999901081" className="transition-colors hover:text-accent">
                +44 7999 901081
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/447999901081"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                WhatsApp a founder ↗
              </a>
            </li>
            <li>United Kingdom</li>
            <li>Founder-level access, always.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline-light">
        <div className="shell flex flex-wrap items-center justify-between gap-4 py-8 text-xs text-ink-foreground/45">
          <p>© {new Date().getFullYear()} Calveris Limited. All rights reserved.</p>
          <p className="eyebrow text-ink-foreground/40">For UK accountancy firms</p>
        </div>
      </div>
    </footer>
  );
}
