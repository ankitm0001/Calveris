import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-20 text-[#f4f2ec] border-b border-[#ffffff2b]">
      <div className="wrap h-[104px] flex items-center justify-between gap-[35px] max-[760px]:h-[85px]">
        <a className="font-serif font-normal text-[28px] tracking-[0.18em] leading-none" href="#top">
          CALVERIS<span className="hidden">.</span>
          <small className="block font-sans text-[10px] tracking-[0.35em] mt-[7px]">GLOBAL</small>
        </a>
        
        <div 
          className={`flex items-center gap-[25px] max-[1050px]:gap-4 max-[760px]:hidden ${
            isOpen 
              ? 'max-[760px]:!flex max-[760px]:absolute max-[760px]:top-[85px] max-[760px]:inset-x-0 max-[760px]:bg-[#16241b] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:p-6 max-[760px]:gap-0'
              : ''
          }`}
          id="navLinks"
        >
          <a className="text-[11px] tracking-[0.12em] uppercase hover:underline hover:underline-offset-8 max-[760px]:py-[14px]" href="#model" onClick={() => setIsOpen(false)}>How we work</a>
          <a className="text-[11px] tracking-[0.12em] uppercase hover:underline hover:underline-offset-8 max-[760px]:py-[14px]" href="#founders" onClick={() => setIsOpen(false)}>About us</a>
          <a className="text-[11px] tracking-[0.12em] uppercase hover:underline hover:underline-offset-8 max-[760px]:py-[14px]" href="#roles" onClick={() => setIsOpen(false)}>Services</a>
          <a className="text-[11px] tracking-[0.12em] uppercase hover:underline hover:underline-offset-8 max-[760px]:py-[14px]" href="#trust" onClick={() => setIsOpen(false)}>Trust</a>
          <a className="text-[11px] tracking-[0.12em] uppercase hover:underline hover:underline-offset-8 max-[760px]:py-[14px]" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
        </div>
        
        <div className="flex items-center gap-5">
          <a className="btn bg-transparent text-white border-[#ffffff60] text-[10px] px-[17px] py-[13px] hover:bg-paper hover:text-ink max-[1050px]:hidden" href="#build">
            Build your team
          </a>
          <button 
            className="hidden max-[760px]:block bg-none border-none text-inherit text-[27px] min-w-[44px] min-h-[44px] cursor-pointer"
            id="burger" 
            aria-label="Menu" 
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
