import { useState } from 'react';

const roles = [
  {"t": "Bookkeeping", "d": "Keep everyday records organised and your accounts up to date.", "list": ["Transaction posting and categorisation", "Bank, card and balance-sheet reconciliations", "Catch-up bookkeeping and clean-up support"], "s1": ["Reliable records", "A clearer starting point"], "s2": ["Your software", "Xero, QuickBooks, Sage and more"]}, 
  {"t": "Payroll", "d": "Keep payroll processing consistent, with clear inputs and agreed deadlines.", "list": ["Payroll preparation and processing support", "Employee changes and payroll reconciliations", "Reporting and year-end payroll support"], "s1": ["On schedule", "Agreed processing and review dates"], "s2": ["Clear ownership", "Responsibilities defined before onboarding"]}, 
  {"t": "Management Reporting", "d": "Turn accounting records into information you can use.", "list": ["Monthly management accounts and schedules", "Cash-flow forecasts and budget comparisons", "Performance commentary and reporting packs"], "s1": ["Clear visibility", "Understand what is changing"], "s2": ["Better decisions", "Practical reporting around your priorities"]}, 
  {"t": "Payables & Receivables", "d": "Bring structure to the money coming in and going out.", "list": ["Supplier invoice processing and reconciliations", "Customer invoicing and aged-debt reporting", "Payment preparation and credit-control support"], "s1": ["Your approvals", "You retain payment authority"], "s2": ["Better follow-up", "Organised supplier and customer records"]}, 
  {"t": "Year-end & Tax Support", "d": "Make year-end preparation easier with organised records and working papers.", "list": ["Year-end accounts preparation and schedules", "VAT and tax computation support", "Liaison with your accountant and reviewers"], "s1": ["Review-ready", "Clear supporting documentation"], "s2": ["Agreed scope", "Filing and review responsibilities defined"]}, 
  {"t": "Dedicated Finance Teams", "d": "Add accounting capacity that works alongside your own people.", "list": ["Dedicated professionals aligned to your workload", "Your systems, processes and working hours", "Ongoing communication and review support"], "s1": ["Flexible capacity", "Shape the arrangement around your needs"], "s2": ["One connected team", "A clear point of contact"]}, 
  {"t": "Ad hoc Support", "d": "Get help with the finance tasks and projects that sit outside the routine.", "list": ["Historical clean-ups and account reconciliations", "Data migration and accounting-system support", "Custom schedules, analysis and reporting"], "s1": ["Project support", "A defined goal and scope"], "s2": ["Practical delivery", "Milestones agreed with your team"]}, 
  {"t": "Audit Support", "d": "Additional delivery capacity for accountancy and audit firms.", "list": ["Working papers, testing and documentation", "File preparation and completion support", "Review support under your firm’s direction"], "s1": ["Your engagement", "Your appointed auditor retains sign-off"], "s2": ["One of our services", "Support scoped to your methodology"]}
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const r = roles[activeIdx];

  return (
    <section className="bg-[#20372a] text-[#edf0e7] py-[130px] scroll-mt-[90px] max-[760px]:py-[75px]" id="roles">
      <div className="wrap">
        <div className="eyebrow text-[#c4cdbd]">Our services</div>
        <h2 className="max-w-[750px]">Everyday accounting.<br/>A stronger finance function.</h2>
        
        <div className="grid grid-cols-2 mt-[60px] border-t border-line border-l max-[760px]:mt-[40px] max-[420px]:grid-cols-1" role="group">
          {roles.map((role, j) => {
            const isActive = j === activeIdx;
            return (
              <button 
                key={j}
                className={`grid grid-cols-[32px_1fr_24px] items-center gap-[18px] text-left p-[30px] bg-transparent border-0 border-r border-b border-line text-inherit transition-colors duration-200 hover:bg-[#ffffff0d] max-[760px]:p-[22px_16px] max-[760px]:grid-cols-[23px_1fr_18px] max-[760px]:gap-[8px] cursor-pointer ${isActive ? 'bg-[#ffffff0d] shadow-[inset_3px_0_#cbd8c3]' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveIdx(j)}
              >
                <span className="text-[11px] opacity-60">{String(j + 1).padStart(2, '0')}</span>
                <span className="font-serif font-light text-[31px] leading-[1.1] max-[760px]:text-[25px]">{role.t}</span>
                <span className="text-[23px] max-[760px]:text-[19px]" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
        
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] pt-[45px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:pt-[32px]">
          <div>
            <h3 className="text-[40px] mb-[20px]">{r.t}</h3>
            <p className="text-[#b9c6d6] text-[15px] mb-[18px]">{r.d}</p>
            <ul className="list-none grid gap-[8px] text-[15px]">
              {r.list.map((item, idx) => (
                <li key={idx} className="flex"><span className="tick">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-l border-line pl-[40px] grid gap-[23px] max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:pl-0 max-[760px]:pt-[25px]">
            <div>
              <div className="font-serif font-normal text-[28px]">{r.s1[0]}</div>
              <div className="text-[13px] text-[#bec9bc] mt-[5px]">{r.s1[1]}</div>
            </div>
            <div>
              <div className="font-serif font-normal text-[28px]">{r.s2[0]}</div>
              <div className="text-[13px] text-[#bec9bc] mt-[5px]">{r.s2[1]}</div>
            </div>
            <a className="btn btn-g self-start" href="#build">Discuss this service →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
