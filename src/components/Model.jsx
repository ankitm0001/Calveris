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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      setFIdx(prev => (prev + 1) % scenarios.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const s = scenarios[fIdx];

  return (
    <section className="bg-paper py-[130px] scroll-mt-[90px] border-b border-line-dark max-[760px]:py-[75px]" id="model">
      <div className="wrap grid grid-cols-2 gap-[90px] items-center max-[1050px]:gap-[45px] max-[760px]:grid-cols-1 max-[760px]:gap-[40px]">
        <div>
          <div className="eyebrow">Built around your business</div>
          <h2 className="max-w-[540px]">Your finance function.<br/>More capacity. Less complexity.</h2>
          <div className="grid gap-[18px] mt-[35px]">
            <div className="flex text-[15px] leading-[1.8]"><span className="tick">✓</span><span><b className="font-semibold">Direct founder involvement</b> <span className="text-mut-dark">on every engagement.</span></span></div>
            <div className="flex text-[15px] leading-[1.8]"><span className="tick">✓</span><span><b className="font-semibold">Dedicated accounting professionals,</b> <span className="text-mut-dark">working in your systems and following your processes.</span></span></div>
            <div className="flex text-[15px] leading-[1.8]"><span className="tick">✓</span><span><b className="font-semibold">Working hours agreed around you.</b> <span className="text-mut-dark">Clear handovers and scheduled review time.</span></span></div>
            <div className="flex text-[15px] leading-[1.8]"><span className="tick">✓</span><span><b className="font-semibold">Access stays under your control.</b> <span className="text-mut-dark">Work in agreed systems with permissions managed by your firm.</span></span></div>
          </div>
        </div>
        
        <div className="bg-[#eeeae2] border border-line-dark" aria-label="Capacity scenarios">
          <div className="flex border-b border-line-dark" role="group">
            {scenarios.map((sc, j) => (
              <button 
                key={j}
                className={`flex-1 border-0 border-r border-line-dark p-[15px_10px] bg-transparent text-[13px] last:border-r-0 cursor-pointer ${j === fIdx ? 'bg-[#24392b] text-white' : 'text-mut-dark'}`}
                aria-pressed={j === fIdx}
                onClick={() => setFIdx(j)}
              >
                {sc.tab}
              </button>
            ))}
          </div>
          <div className="p-[35px] min-h-[350px] max-[420px]:p-[22px]">
            <div className="flex justify-between gap-[15px] text-[10px] tracking-[0.08em] border-b border-line-dark pb-[18px] mb-[25px] max-[420px]:text-[9px]">
              <span>SCENARIO {s.tab} · ILLUSTRATIVE</span>
              <span>CALVERIS</span>
            </div>
            <div className="font-serif font-normal text-[35px] leading-[1.08] mb-[20px]">{s.title}</div>
            <p className="text-[14px] leading-[1.85]">{s.story}</p>
            <div className="border-l border-[#365440] pl-[18px] my-[23px]">
              <div className="text-[10px] tracking-[0.12em] uppercase mb-[8px]">The Calveris response</div>
              <p className="text-[14px] leading-[1.85]">{s.fix}</p>
            </div>
            <div className="flex justify-between items-center gap-[15px] border-t border-line-dark pt-[17px] max-[420px]:flex-wrap">
              <span className="text-[10px] tracking-[0.05em]">{s.stamp}</span>
              <div className="flex gap-[5px]">
                {scenarios.map((_, j) => (
                  <button 
                    key={j}
                    className={`h-[18px] w-[24px] border-0 border-b-2 bg-transparent cursor-pointer ${j === fIdx ? 'border-[#263e2e]' : 'border-[#bbc4b7]'}`}
                    aria-label={`Scenario ${j + 1}`}
                    onClick={() => setFIdx(j)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
