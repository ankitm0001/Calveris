import { useState } from 'react';

const roles = [
  "Bookkeeping", "Payroll", "Management Reporting", "Payables & Receivables", 
  "Year-end & Tax Support", "Dedicated Finance Teams", "Ad hoc Support", "Audit Support"
];
const durations = ["3 months", "6 months", "ongoing support"];

export default function Build() {
  const [cRole, setCRole] = useState("Bookkeeping");
  const [cN, setCN] = useState(1);
  const [cDur, setCDur] = useState("3 months");

  const people = Number(cN) === 1 ? 'professional' : 'professionals';
  const mailSubject = encodeURIComponent('Finance support enquiry: ' + cRole);
  const mailBody = encodeURIComponent(`Hi Calveris Global,\n\nWe are looking for ${cRole} support with ${cN} ${people} for ${cDur}.\n\nOur business / firm: \nAccounting software: \nMain requirements: \nIdeal start date: \n\nThanks,`);

  return (
    <section id="build" className="bg-ink text-ink-foreground py-[130px] scroll-mt-[90px] border-b border-hairline-light max-[760px]:py-[75px]">
      <div className="shell">
        <div className="eyebrow flex items-center gap-3 text-ink-foreground/75">
          <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
          Build your team
        </div>
        <h2 className="display-lg mt-8">Build the support your business needs.</h2>
        
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] mt-[60px] max-[760px]:grid-cols-1 max-[760px]:gap-[35px] max-[760px]:mt-[40px]">
          <div>
            <label className="block text-[11px] tracking-[0.17em] uppercase mb-[16px] text-ink-foreground/75" id="roleLabel">What do you need?</label>
            <div className="flex flex-wrap gap-[10px]" role="group" aria-labelledby="roleLabel">
              {roles.map(role => (
                <button 
                  key={role}
                  className={`text-[13px] min-h-[46px] px-[15px] py-[10px] border cursor-pointer transition-colors duration-300 ${cRole === role ? 'bg-background text-ink border-background' : 'bg-transparent border-hairline-light text-inherit hover:bg-ink-foreground/[0.04]'}`}
                  aria-pressed={cRole === role}
                  onClick={() => setCRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            
            <label htmlFor="calcN" className="block text-[11px] tracking-[0.17em] uppercase mt-[27px] mb-[16px] text-ink-foreground/75">How many?</label>
            <input 
              type="range" 
              min="1" max="6" 
              value={cN} 
              onChange={e => setCN(e.target.value)}
              id="calcN" 
              className="w-full accent-accent my-[10px]" 
            />
            <div className="text-[13px] text-ink-foreground/80"><span>{cN}</span> professional(s)</div>
            
            <label id="durationLabel" className="block text-[11px] tracking-[0.17em] uppercase mt-[27px] mb-[16px] text-ink-foreground/75">For how long?</label>
            <div className="flex flex-wrap gap-[10px]" role="group" aria-labelledby="durationLabel">
              {durations.map(dur => (
                <button 
                  key={dur}
                  className={`text-[13px] min-h-[46px] px-[15px] py-[10px] border cursor-pointer transition-colors duration-300 ${cDur === dur ? 'bg-background text-ink border-background' : 'bg-transparent border-hairline-light text-inherit hover:bg-ink-foreground/[0.04]'}`}
                  aria-pressed={cDur === dur}
                  onClick={() => setCDur(dur)}
                >
                  {dur === 'ongoing support' ? 'Ongoing' : dur}
                </button>
              ))}
            </div>
          </div>
          
          <div className="border border-hairline-light bg-ink-foreground/[0.02] p-[35px] flex flex-col justify-center max-[760px]:p-[25px]">
            <div className="text-[10px] tracking-[0.18em] uppercase text-ink-foreground/70">Your brief</div>
            <div className="font-display font-light text-[39px] leading-[1.2] my-[23px] mb-[30px] max-[420px]:text-[32px]">
              <em className="not-italic text-accent">{cRole}</em> support with <em className="not-italic text-accent">{cN} {people}</em> for <em className="not-italic text-accent">{cDur}</em>.
            </div>
            <ul className="list-none grid gap-[12px] text-[13px] mb-[32px]">
              <li><span className="tick text-accent">✓</span> Shortlist matched to your brief</li>
              <li><span className="tick text-accent">✓</span> Scope agreed together</li>
              <li><span className="tick text-accent">✓</span> Working hours aligned to your needs</li>
            </ul>
            <a className="group inline-flex self-start items-center gap-3 border px-7 py-4 eyebrow tracking-[0.18em] transition-colors duration-500 border-background bg-background text-ink hover:bg-accent hover:border-accent hover:text-accent-foreground" href={`mailto:info@calveris.co.uk?subject=${mailSubject}&body=${mailBody}`}>
              <span>Send this brief</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"><svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true"><path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2"></path></svg></span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-4 mt-[85px] border-t border-l border-hairline-light max-[760px]:grid-cols-2 max-[760px]:mt-[50px] max-[420px]:grid-cols-1">
          <div className="group border-r border-b border-hairline-light p-[30px] transition-colors duration-500 hover:bg-ink-foreground/[0.04] max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px] transition-colors duration-500 group-hover:text-accent/80">01</div>
            <h4 className="font-display font-normal text-[28px] leading-[1.1] mb-[16px]">Brief us</h4>
            <p className="text-[13px] text-ink-foreground/70">A 20-minute call is enough.</p>
          </div>
          <div className="group border-r border-b border-hairline-light p-[30px] transition-colors duration-500 hover:bg-ink-foreground/[0.04] max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px] transition-colors duration-500 group-hover:text-accent/80">02</div>
            <h4 className="font-display font-normal text-[28px] leading-[1.1] mb-[16px]">Meet your shortlist</h4>
            <p className="text-[13px] text-ink-foreground/70">Review candidates and choose your fit.</p>
          </div>
          <div className="group border-r border-b border-hairline-light p-[30px] transition-colors duration-500 hover:bg-ink-foreground/[0.04] max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px] transition-colors duration-500 group-hover:text-accent/80">03</div>
            <h4 className="font-display font-normal text-[28px] leading-[1.1] mb-[16px]">Embed</h4>
            <p className="text-[13px] text-ink-foreground/70">Your systems, your processes, your priorities.</p>
          </div>
          <div className="group border-r border-b border-hairline-light p-[30px] transition-colors duration-500 hover:bg-ink-foreground/[0.04] max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px] transition-colors duration-500 group-hover:text-accent/80">04</div>
            <h4 className="font-display font-normal text-[28px] leading-[1.1] mb-[16px]">Scale either way</h4>
            <p className="text-[13px] text-ink-foreground/70">Review your needs as your business grows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
