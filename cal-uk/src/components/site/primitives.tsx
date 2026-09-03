import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Diamond({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-block size-[6px] rotate-45 bg-accent", className)} />
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      <Diamond />
      <span>{children}</span>
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-shown={shown ? "true" : "false"}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const arrowUpRight = (
  <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden>
    <path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const arrowRight = (
  <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden>
    <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

type CtaProps = {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "solid-light" | "outline-light";
  className?: string;
};

export function Cta({ to, children, variant = "solid", className }: CtaProps) {
  const base =
    "group inline-flex items-center gap-3 border px-7 py-4 eyebrow tracking-[0.18em] transition-colors duration-500";
  const styles = {
    solid: "border-ink bg-ink text-ink-foreground hover:bg-accent hover:border-accent",
    outline: "border-foreground/25 text-foreground hover:bg-ink hover:text-ink-foreground",
    "solid-light":
      "border-background bg-background text-ink hover:bg-accent hover:border-accent hover:text-accent-foreground",
    "outline-light": "border-hairline-light text-ink-foreground hover:bg-background hover:text-ink",
  }[variant];

  return (
    <Link to={to} className={cn(base, styles, className)}>
      <span>{children}</span>
      <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
        {variant === "solid" || variant === "solid-light" ? arrowUpRight : arrowRight}
      </span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  aside,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow
            className={tone === "light" ? "text-ink-foreground/70" : "text-muted-foreground"}
          >
            {eyebrow}
          </Eyebrow>
          <h2 className="display-lg mt-8 max-w-[16ch]">{title}</h2>
        </Reveal>
      </div>
      {aside ? (
        <div className="lg:col-span-5 lg:pt-16">
          <Reveal delay={120}>
            <div
              className={cn(
                "text-[0.95rem] leading-relaxed",
                tone === "light" ? "text-ink-foreground/65" : "text-muted-foreground",
              )}
            >
              {aside}
            </div>
          </Reveal>
        </div>
      ) : null}
    </div>
  );
}

export function Marquee({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "overflow-hidden border-y py-6",
        tone === "light" ? "border-hairline-light" : "border-hairline",
      )}
    >
      <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-14">
            <span
              className={cn(
                "font-display text-2xl font-light italic md:text-[2rem]",
                tone === "light" ? "text-ink-foreground/75" : "text-foreground/70",
              )}
            >
              {item}
            </span>
            <Diamond />
          </span>
        ))}
      </div>
    </div>
  );
}
