import { useState, useEffect } from 'react';

const scenarios = [
  {"tab": "01", "title": "Your business grew. The admin followed.", "story": "More transactions, more invoices and less time to keep the books up to date.", "fix": "Bookkeeping and reconciliations that bring order to the everyday, with a clear handover to your accountant.", "stamp": "Illustrative support scenario"}, 
  {"tab": "02", "title": "Month-end should bring answers.", "story": "You need to understand performance, but the numbers are still being pulled together.", "fix": "Management reporting and supporting schedules that help you see the position and plan the next step.", "stamp": "Illustrative support scenario"}, 
  {"tab": "03", "title": "Invoices need attention. So do you.", "story": "Supplier payments and customer follow-ups are taking time away from the business.", "fix": "Payables and receivables support, with approvals kept in your hands and progress made visible.", "stamp": "Illustrative support scenario"}, 
  {"tab": "04", "title": "Your practice needs more capacity.", "story": "Client work is growing, and your team is balancing recurring tasks with approaching deadlines.", "fix": "Dedicated accounting support, shaped around your systems, review standards and client priorities.", "stamp": "Illustrative support scenario"}, 
  {"tab": "05", "title": "Payroll has a deadline. Every month.", "story": "Payroll inputs, changes and reconciliations need consistent attention alongside the rest of the workload.", "fix": "Payroll processing support and organised records, following the responsibilities agreed with your team.", "stamp": "Illustrative support scenario"}
];

export default function Model() {
  const [fIdx, setFIdx] = useState(0);

  const s = scenarios[fIdx];

  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40" id="model">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="reveal">
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
              <span>Built around your business</span>
            </p>
            <h2 className="display-lg mt-8 max-w-[16ch]">
              Your finance function.<br/>More capacity. Less complexity.
            </h2>
          </div>
          
          <div className="reveal" style={{ animationDelay: '120ms' }}>
            <ul className="mt-10 border-t border-hairline">
              <li className="flex items-start gap-4 border-b border-hairline py-5 text-[1.05rem]">
                <span className="mt-1 text-accent"><span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span></span>
                <span><b className="font-semibold text-foreground">Direct founder involvement</b> <span className="text-muted-foreground">on every engagement.</span></span>
              </li>
              <li className="flex items-start gap-4 border-b border-hairline py-5 text-[1.05rem]">
                <span className="mt-1 text-accent"><span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span></span>
                <span><b className="font-semibold text-foreground">Dedicated accounting professionals,</b> <span className="text-muted-foreground">working in your systems and following your processes.</span></span>
              </li>
              <li className="flex items-start gap-4 border-b border-hairline py-5 text-[1.05rem]">
                <span className="mt-1 text-accent"><span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span></span>
                <span><b className="font-semibold text-foreground">Working hours agreed around you.</b> <span className="text-muted-foreground">Clear handovers and scheduled review time.</span></span>
              </li>
              <li className="flex items-start gap-4 border-b border-hairline py-5 text-[1.05rem]">
                <span className="mt-1 text-accent"><span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span></span>
                <span><b className="font-semibold text-foreground">Access stays under your control.</b> <span className="text-muted-foreground">Work in agreed systems with permissions managed by your firm.</span></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-5 self-center">
          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <div className="bg-secondary text-foreground border border-hairline flex flex-col" aria-label="Capacity scenarios">
              <div className="flex border-b border-hairline" role="group">
                {scenarios.map((sc, j) => (
                  <button 
                    key={j}
                    className={`flex-1 border-0 border-r border-hairline p-[15px_10px] text-[13px] last:border-r-0 cursor-pointer transition-colors duration-300 ${j === fIdx ? 'bg-ink text-ink-foreground font-semibold' : 'bg-transparent text-muted-foreground hover:bg-forest/5'}`}
                    aria-pressed={j === fIdx}
                    onClick={() => setFIdx(j)}
                  >
                    {sc.tab}
                  </button>
                ))}
              </div>
              <div className="p-[40px] flex flex-col max-[420px]:p-[25px]">
                <div className="flex justify-between gap-[15px] text-[10px] tracking-[0.08em] border-b border-hairline pb-[18px] mb-[30px] max-[420px]:text-[9px]">
                  <span className="text-muted-foreground">SCENARIO {s.tab} · ILLUSTRATIVE</span>
                  <span className="text-muted-foreground">CALVERIS</span>
                </div>
                <div className="font-display font-normal text-[32px] leading-[1.1] mb-[20px]">{s.title}</div>
                <p className="text-[14px] leading-[1.85] text-foreground/80">{s.story}</p>
                <div className="border-l-2 border-accent pl-[18px] my-[30px]">
                  <div className="text-[10px] tracking-[0.12em] uppercase mb-[10px] text-accent">The Calveris response</div>
                  <p className="text-[14px] leading-[1.85] text-foreground">{s.fix}</p>
                </div>
                <div className="flex justify-between items-center gap-[15px] border-t border-hairline pt-[20px] max-[420px]:flex-wrap">
                  <span className="text-[10px] tracking-[0.05em] text-muted-foreground">{s.stamp}</span>
                  <div className="flex gap-[5px]">
                    {scenarios.map((_, j) => (
                      <button 
                        key={j}
                        className={`h-[18px] w-[24px] border-0 border-b-2 bg-transparent cursor-pointer transition-colors duration-300 ${j === fIdx ? 'border-accent' : 'border-hairline hover:border-accent/40'}`}
                        aria-label={`Scenario ${j + 1}`}
                        onClick={() => setFIdx(j)}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
