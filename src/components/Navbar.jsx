import { useState, useEffect } from 'react';

export default function Navbar() {
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm" : "bg-ink/25 backdrop-blur-[2px]"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-[1.4rem] font-normal tracking-[0.34em] text-ink-foreground flex items-center">
            CALVERIS<span className="ml-[4px] font-body text-[10px] tracking-[0.35em] opacity-80">GLOBAL</span>
          </span>
          <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          <a href="#model" className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground">How we work</a>
          <a href="#founders" className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground">About us</a>
          <a href="#roles" className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground">Services</a>
          <a href="#trust" className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground">Trust</a>
          <a href="#faq" className="eyebrow tracking-[0.16em] text-ink-foreground/70 transition-colors duration-300 hover:text-ink-foreground">FAQ</a>
        </nav>

        <div className="hidden xl:block">
          <a href="#build" className="group inline-flex items-center gap-3 border px-6 py-3 eyebrow tracking-[0.18em] transition-colors duration-500 border-hairline-light text-ink-foreground hover:bg-background hover:text-ink">
            <span>Build Your Team</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"><svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true"><path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2"></path></svg></span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-10 flex-col items-center justify-center gap-1.5 text-ink-foreground xl:hidden"
        >
          <span className={`h-px w-6 bg-current transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-current transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline-light bg-ink xl:hidden h-[100svh]">
          <div className="shell flex flex-col gap-1 py-6">
            <a href="#model" onClick={() => setOpen(false)} className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground">How we work</a>
            <a href="#founders" onClick={() => setOpen(false)} className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground">About us</a>
            <a href="#roles" onClick={() => setOpen(false)} className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground">Services</a>
            <a href="#trust" onClick={() => setOpen(false)} className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground">Trust</a>
            <a href="#faq" onClick={() => setOpen(false)} className="border-b border-hairline-light py-4 font-display text-2xl font-light text-ink-foreground">FAQ</a>
            
            <a href="#build" onClick={() => setOpen(false)} className="group mt-6 justify-center inline-flex items-center gap-3 border px-7 py-4 eyebrow tracking-[0.18em] transition-colors duration-500 border-background bg-background text-ink hover:bg-accent hover:border-accent hover:text-accent-foreground">
              <span>Build Your Team</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"><svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.2"></path></svg></span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
