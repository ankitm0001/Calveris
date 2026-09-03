import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Cta, Diamond } from "./primitives";

const nav = [
  { label: "Home", to: "/" },
  { label: "Audit Team", to: "/audit-team" },
  { label: "Accounting Team", to: "/accounting-team" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Why Calveris", to: "/why-calveris" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        scrolled ? "bg-ink/95 backdrop-blur-sm" : "bg-ink/25 backdrop-blur-[2px]",
      )}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.4rem] font-normal tracking-[0.34em] text-ink-foreground">
            CALVERIS
          </span>
          <Diamond />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground [&.active]:text-ink-foreground [&.active]:underline [&.active]:underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Cta to="/contact" variant="outline-light" className="px-6 py-3">
            Build Your Team
          </Cta>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-10 flex-col items-center justify-center gap-1.5 text-ink-foreground xl:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-current transition-transform",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-hairline-light bg-ink xl:hidden">
          <div className="shell flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Cta to="/contact" variant="solid-light" className="mt-6 justify-center">
              Build Your Team
            </Cta>
          </div>
        </div>
      ) : null}
    </header>
  );
}
