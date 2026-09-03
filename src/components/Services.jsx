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
    <section className="bg-forest text-forest-foreground py-28 lg:py-40 scroll-mt-[90px]" id="roles">
      <div className="shell">
        <div className="reveal">
          <div className="eyebrow flex items-center gap-3 text-forest-foreground/60">
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
            Our services
          </div>
          <h2 className="display-lg mt-8 max-w-[16ch]">Everyday accounting.<br/>A stronger finance function.</h2>
        </div>
        
        <div className="reveal" style={{ animationDelay: '140ms' }}>
          <div className="grid grid-cols-2 mt-16 border-t border-hairline-light border-l max-[760px]:mt-[40px] max-[420px]:grid-cols-1" role="group">
            {roles.map((role, j) => {
              const isActive = j === activeIdx;
              return (
                <button 
                  key={j}
                  className={`group relative overflow-hidden grid grid-cols-[32px_1fr_24px] items-center gap-[18px] text-left p-8 lg:p-12 bg-transparent border-0 border-r border-b border-hairline-light text-inherit transition-colors duration-500 hover:bg-forest-foreground/[0.05] max-[760px]:p-[22px_16px] max-[760px]:grid-cols-[23px_1fr_18px] max-[760px]:gap-[8px] cursor-pointer ${isActive ? 'bg-forest-foreground/[0.05] shadow-[inset_3px_0_var(--color-accent)]' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveIdx(j)}
                >
                  <span className="text-[11px] opacity-60 transition-colors duration-500 group-hover:text-accent/80">{String(j + 1).padStart(2, '0')}</span>
                  <span className="font-display font-normal text-3xl leading-[1.1] max-[760px]:text-[25px]">{role.t}</span>
                  <span className="text-2xl text-accent transition-transform duration-500 group-hover:translate-x-2 max-[760px]:text-[19px]" aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="reveal" style={{ animationDelay: '200ms' }}>
          <div className="grid grid-cols-[1.2fr_1fr] gap-16 pt-12 max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:pt-[32px]">
            <div>
              <h3 className="font-display text-4xl font-normal mb-[20px]">{r.t}</h3>
              <p className="text-forest-foreground/70 text-[0.95rem] leading-relaxed mb-6 max-w-lg">{r.d}</p>
              <ul className="list-none grid gap-3 text-[1rem]">
                {r.list.map((item, idx) => (
                  <li key={idx} className="flex"><span className="tick text-accent">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border-l border-hairline-light pl-10 grid gap-6 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:pl-0 max-[760px]:pt-8">
              <div>
                <div className="font-display font-normal text-3xl">{r.s1[0]}</div>
                <div className="text-[0.9rem] text-forest-foreground/60 mt-2">{r.s1[1]}</div>
              </div>
              <div>
                <div className="font-display font-normal text-3xl">{r.s2[0]}</div>
                <div className="text-[0.9rem] text-forest-foreground/60 mt-2">{r.s2[1]}</div>
              </div>
              <a className="group inline-flex self-start items-center gap-3 border px-7 py-4 mt-2 eyebrow tracking-[0.18em] transition-colors duration-500 border-background bg-background text-ink hover:bg-accent hover:border-accent hover:text-accent-foreground" href="#build">
                <span>Discuss this service</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"><svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" strokeWidth="1.2"></path></svg></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
