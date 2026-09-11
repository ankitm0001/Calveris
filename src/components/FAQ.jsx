import { useState } from 'react';

const faqs = [
  ["Who do you work with?", "We support businesses that need help with their finance function and accountancy firms that need additional delivery capacity. The scope is shaped around your systems, workload and deadlines."],
  ["Which services can you help with?", "Bookkeeping, payroll, management reporting, payables and receivables, year-end and tax preparation, dedicated finance teams and ad hoc projects. Audit delivery support is also available to accountancy and audit firms."],
  ["Can you work with our existing software?", "Yes. We work with accounting systems including Xero, QuickBooks and Sage, and can discuss your bespoke systems and workflows during onboarding."],
  ["Can we start with one service?", "Yes. You can begin with a defined requirement, such as bookkeeping or reporting, and discuss additional support as your needs change."],
  ["Where is your team based?", "Calveris Global is based in Ahmedabad, India, supporting businesses and accountancy firms across borders. Working hours and communication arrangements are agreed for each engagement."],
  ["How is client data protected?", "Access, confidentiality and data handling are agreed before onboarding. Your team controls permissions for the systems we use, and responsibilities are documented in the engagement scope."],
  ["How is pricing agreed?", "We discuss the services, workload, experience and hours you need, then agree the scope and fee before work begins."],
  ["What does audit support include?", "Our people can help appointed audit firms with testing, documentation, working papers and file preparation under their direction. Engagement responsibility, review and audit sign-off remain with the appointed auditor."]
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="py-[130px] scroll-mt-[90px] border-b border-hairline-light max-[760px]:py-[75px]"
      id="faq"
      style={{ background: '#0d1b16' }}
    >
      <div className="shell">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[9px] tracking-widest uppercase font-bold"
            style={{
              color: '#7ec8a0',
              background: '#0d1b16',
              boxShadow: 'inset 4px 4px 8px #040907, inset -4px -4px 8px #183329'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7ec8a0', display: 'inline-block' }}></span>
            FAQ
          </div>
        </div>

        <h2
          className="display-lg text-center max-w-[600px] mx-auto mb-[60px]"
          style={{ color: '#f0f5f0' }}
        >
          A few things you might want to know.
        </h2>

        <div className="max-w-[850px] mx-auto flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: '1.25rem',
                  background: '#0d1b16',
                  boxShadow: isOpen
                    ? 'inset 6px 6px 14px #040907, inset -6px -6px 14px #183329'
                    : '10px 10px 20px #040907, -10px -10px 20px #183329',
                  transition: 'box-shadow 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full bg-transparent text-left px-7 py-6 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ border: 'none', color: '#f0f5f0', fontSize: '1rem', fontWeight: isOpen ? '600' : '400' }}
                >
                  <span>{f[0]}</span>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#2a5a4a' : '#0d1b16',
                      boxShadow: isOpen
                        ? '0 4px 12px rgba(42,90,74,0.5)'
                        : '4px 4px 8px #040907, -4px -4px 8px #183329',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                      color: isOpen ? '#ffffff' : '#7ec8a0',
                      fontSize: '18px',
                      fontWeight: '300',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-7 pb-7 leading-relaxed"
                      style={{ fontSize: '14px', color: 'rgba(240,245,240,0.55)' }}
                    >
                      {f[1]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
