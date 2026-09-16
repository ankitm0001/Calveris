import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const updatePath = () => setPathname(window.location.pathname);
    updatePath();
    document.addEventListener('astro:page-load', updatePath);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('astro:page-load', updatePath);
    };
  }, []);

  // isDarkNav: transparent mode over dark hero (homepage and contact before scrolling)
  const isDarkNav = !scrolled && (pathname === '/' || pathname.includes('/contact'));

  return (
    <>
      {/* Main Nav */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled
          ? 'top-4 px-6 md:px-12 xl:px-20'
          : 'top-0 px-6 md:px-12 xl:px-20 py-8'
          }`}
      >
        <div
          className={`w-full max-w-[90rem] mx-auto flex justify-between items-center transition-all duration-700 ${scrolled
            ? 'bg-[#e6e9ef]/90 backdrop-blur-xl shadow-[0px_10px_30px_rgba(196,198,204,0.4),inset_1px_1px_2px_rgba(255,255,255,0.9)] px-8 py-4 rounded-full'
            : 'bg-transparent px-2'
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            className={`flex items-center cursor-pointer transition-all duration-700 ease-in-out py-2 ${scrolled ? 'h-12' : 'h-16 md:h-20'
              }`}
            style={{ height: scrolled ? '48px' : '80px', minWidth: '150px', display: 'flex', alignItems: 'center' }}
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/logo-og.png"
              alt="Calveris Global"
              style={{ maxHeight: '100%', width: 'auto', maxWidth: '220px', objectFit: 'contain' }}
              className={`max-h-full w-auto object-contain transition-all duration-700 origin-left ${scrolled ? 'scale-[1.35] md:scale-[1.65]' : 'scale-100'
                } ${isDarkNav
                  ? 'filter invert hue-rotate-180 brightness-200 contrast-125'
                  : 'filter-none'
                }`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span
              style={{ display: 'none' }}
              className={`font-serif text-xl font-bold ${isDarkNav ? 'text-white' : 'text-[#0d1b16]'
                }`}
            >
              CALVERIS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {[
              { label: 'Home', href: '/' },
              { label: 'About us', href: '/about' },
              { label: 'Our Team', href: '/teams' },
              { label: 'Contact Us', href: '/contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 relative group ${isDarkNav
                  ? 'text-[#d1d5db] hover:text-white'
                  : 'text-[#6b7280] hover:text-[#0d1b16]'
                  }`}
              >
                {label}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isDarkNav ? 'bg-white' : 'bg-[#2a5a4a]'
                    }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className={`overflow-hidden rounded-full text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-500 flex items-center gap-2 group ${isDarkNav
                ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#0f2027]'
                : 'text-white border border-[#7ec8a0]/20 bg-[linear-gradient(135deg,#0f2027_0%,#163028_45%,#28623a_100%)] shadow-[0_4px_12px_rgba(10,24,18,0.3)] hover:shadow-[0_6px_20px_rgba(10,24,18,0.4)]'
                }`}
            >
              Build Your Team
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`flex h-[46px] w-[46px] flex-col items-center justify-center gap-1.5 md:hidden rounded-full ml-auto transition-all duration-300 ${isDarkNav
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-[#e6e9ef] text-[#0d1b16] shadow-[6px_6px_12px_#c4c6cc,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#c4c6cc,inset_-6px_-6px_12px_#ffffff]'
              }`}
          >
            <span
              className={`h-px w-5 bg-current transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
            />
            <span
              className={`h-px w-5 bg-current transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[linear-gradient(135deg,rgba(15,32,39,0.98)_0%,rgba(22,48,40,0.98)_45%,rgba(40,98,58,0.98)_100%)] backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-10 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <img
          src="/images/logo-og.png"
          alt="Calveris Global"
          className="h-10 w-auto object-contain mb-4"
        />
        <a href="/" onClick={() => setOpen(false)} className="font-serif text-4xl text-white hover:text-white/70 transition-colors">
          Home
        </a>
        <a href="/about" onClick={() => setOpen(false)} className="font-serif text-4xl text-white hover:text-white/70 transition-colors">
          About us
        </a>
        <a href="/teams" onClick={() => setOpen(false)} className="font-serif text-4xl text-white hover:text-white/70 transition-colors">
          Our Team
        </a>
        <a href="/contact" onClick={() => setOpen(false)} className="font-serif text-4xl text-white hover:text-white/70 transition-colors">
          Contact Us
        </a>
        <a
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-6 flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full h-[56px] px-10 text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-md hover:bg-white hover:text-[#0d1b16] transition-all duration-300"
        >
          Build Your Team
        </a>
      </div>
    </>
  );
}
