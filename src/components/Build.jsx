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
    <section id="build" className="bg-[#151916] text-[#e8ece2] py-[130px] scroll-mt-[90px] border-b border-line max-[760px]:py-[75px]">
      <div className="wrap">
        <div className="eyebrow">Build your team</div>
        <h2>Build the support your business needs.</h2>
        
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] mt-[60px] max-[760px]:grid-cols-1 max-[760px]:gap-[35px] max-[760px]:mt-[40px]">
          <div>
            <label className="block text-[11px] tracking-[0.17em] uppercase mb-[16px] text-[#b9c4b5]" id="roleLabel">What do you need?</label>
            <div className="flex flex-wrap gap-[10px]" role="group" aria-labelledby="roleLabel">
              {roles.map(role => (
                <button 
                  key={role}
                  className={`text-[13px] min-h-[46px] px-[15px] py-[10px] border bg-transparent cursor-pointer ${cRole === role ? 'bg-[#e3e8dc] text-[#17271c] border-[#e3e8dc]' : 'border-[#ffffff35] text-inherit'}`}
                  aria-pressed={cRole === role}
                  onClick={() => setCRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            
            <label htmlFor="calcN" className="block text-[11px] tracking-[0.17em] uppercase mt-[27px] mb-[16px] text-[#b9c4b5]">How many?</label>
            <input 
              type="range" 
              min="1" max="6" 
              value={cN} 
              onChange={e => setCN(e.target.value)}
              id="calcN" 
              className="w-full accent-[#b9d1b4] my-[10px]" 
            />
            <div className="text-[13px] text-[#c0cfb8]"><span>{cN}</span> professional(s)</div>
            
            <label id="durationLabel" className="block text-[11px] tracking-[0.17em] uppercase mt-[27px] mb-[16px] text-[#b9c4b5]">For how long?</label>
            <div className="flex flex-wrap gap-[10px]" role="group" aria-labelledby="durationLabel">
              {durations.map(dur => (
                <button 
                  key={dur}
                  className={`text-[13px] min-h-[46px] px-[15px] py-[10px] border bg-transparent cursor-pointer ${cDur === dur ? 'bg-[#e3e8dc] text-[#17271c] border-[#e3e8dc]' : 'border-[#ffffff35] text-inherit'}`}
                  aria-pressed={cDur === dur}
                  onClick={() => setCDur(dur)}
                >
                  {dur === 'ongoing support' ? 'Ongoing' : dur}
                </button>
              ))}
            </div>
          </div>
          
          <div className="border border-line p-[35px] flex flex-col justify-center max-[760px]:p-[25px]">
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#bcc7b5]">Your brief</div>
            <div className="font-serif font-light text-[39px] leading-[1.2] my-[23px] mb-[30px] max-[420px]:text-[32px]">
              <em className="not-italic text-[#d4e1c9]">{cRole}</em> support with <em className="not-italic text-[#d4e1c9]">{cN} {people}</em> for <em className="not-italic text-[#d4e1c9]">{cDur}</em>.
            </div>
            <ul className="list-none grid gap-[12px] text-[13px] mb-[32px]">
              <li><span className="tick">✓</span> Shortlist matched to your brief</li>
              <li><span className="tick">✓</span> Scope agreed together</li>
              <li><span className="tick">✓</span> Working hours aligned to your needs</li>
            </ul>
            <a className="btn btn-g self-start" href={`mailto:info@calveris.co.uk?subject=${mailSubject}&body=${mailBody}`}>Send this brief →</a>
          </div>
        </div>
        
        <div className="grid grid-cols-4 mt-[85px] border-t border-l border-line max-[760px]:grid-cols-2 max-[760px]:mt-[50px] max-[420px]:grid-cols-1">
          <div className="p-[30px] border-r border-b border-line max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px]">01</div>
            <h4 className="font-serif font-light text-[28px] leading-[1.1] mb-[16px]">Brief us</h4>
            <p className="text-[13px] text-[#b7c2b0]">A 20-minute call is enough.</p>
          </div>
          <div className="p-[30px] border-r border-b border-line max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px]">02</div>
            <h4 className="font-serif font-light text-[28px] leading-[1.1] mb-[16px]">Meet your shortlist</h4>
            <p className="text-[13px] text-[#b7c2b0]">Review candidates and choose your fit.</p>
          </div>
          <div className="p-[30px] border-r border-b border-line max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px]">03</div>
            <h4 className="font-serif font-light text-[28px] leading-[1.1] mb-[16px]">Embed</h4>
            <p className="text-[13px] text-[#b7c2b0]">Your systems, your processes, your priorities.</p>
          </div>
          <div className="p-[30px] border-r border-b border-line max-[760px]:p-[25px]">
            <div className="text-[11px] opacity-60 mb-[28px]">04</div>
            <h4 className="font-serif font-light text-[28px] leading-[1.1] mb-[16px]">Scale either way</h4>
            <p className="text-[13px] text-[#b7c2b0]">Review your needs as your business grows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
