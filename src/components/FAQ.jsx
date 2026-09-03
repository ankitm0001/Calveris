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
    <section id="faq" className="py-[130px] scroll-mt-[90px] border-b border-line-dark bg-[#eeece6] max-[760px]:py-[75px]">
      <div className="wrap">
        <div className="eyebrow flex justify-center text-center">On the record</div>
        <h2 className="text-center max-w-[600px] mx-auto mb-1">A few things you might want to know.</h2>
        
        <div className="max-w-[850px] mx-auto mt-[55px]">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-line-dark">
                <button 
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full border-none bg-transparent text-ink text-left py-[26px] text-base font-medium cursor-pointer max-[760px]:text-[15px] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#7caa78] focus-visible:outline-offset-4"
                >
                  {f[0]}
                  <span className={`text-[23px] font-normal transition-transform duration-250 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div 
                  className="overflow-hidden transition-[max-height] duration-250 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0' }}
                >
                  <p className="text-[15px] text-mut-dark pr-[25px] pb-[25px]">{f[1]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
