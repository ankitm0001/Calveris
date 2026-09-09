import { useState } from 'react';

const scenarios = [
  {
    "tab": "01",
    "stamp": "FOR FINANCE & ACCOUNTING FIRMS",
    "title": "Behind your client relationship",
    "description": "You keep the client relationship. We handle the accounting delivery behind your team.",
    "chain": [
      "Client work increases",
      "Your delivery capacity is stretched",
      "Calveris handles the accounting work"
    ],
    "outcome": "You stay focused on clients, finance and advisory — while your client stays yours."
  },
  {
    "tab": "02",
    "stamp": "EXTENDED ACCOUNTING CAPACITY",
    "title": "Extended accounting team",
    "description": "Add the accounting capacity you need without building the entire team internally.",
    "chain": [
      "Workload grows",
      "Your internal team reaches capacity",
      "Calveris takes on the accounting workload"
    ],
    "outcome": "Keep pace without adding every accounting role in-house."
  },
  {
    "tab": "03",
    "stamp": "EXISTING WORKFLOWS",
    "title": "Within your existing systems",
    "description": "We work within the accounting platforms, processes and workflows your team already uses.",
    "chain": [
      "Your systems are already in place",
      "Calveris plugs into the existing workflow",
      "Accounting work moves through the process you already know"
    ],
    "outcome": "You don't need to rebuild your workflow around us."
  },
  {
    "tab": "04",
    "stamp": "ONGOING WORKLOAD",
    "title": "Dedicated accounting capacity",
    "description": "A dedicated resource for ongoing, predictable accounting workload.",
    "chain": [
      "Recurring workload is consistent",
      "You need reliable ongoing capacity",
      "A dedicated Calveris resource takes ownership of the workload"
    ],
    "outcome": "Built for continuity, not occasional support."
  },
  {
    "tab": "05",
    "stamp": "RIGHT-SIZED CAPACITY",
    "title": "Part-time accounting capacity",
    "description": "Match the accounting capacity to the workload, rather than carrying a full-time resource.",
    "chain": [
      "Workload requires regular support",
      "A full-time resource isn't necessary",
      "Calveris provides the capacity actually required"
    ],
    "outcome": "Support built around the work actually there."
  },
  {
    "tab": "06",
    "stamp": "SPECIFIC REQUIREMENTS",
    "title": "Ad hoc accounting support",
    "description": "For defined projects, temporary workload spikes or accounting requirements that don't justify ongoing capacity.",
    "chain": [
      "A specific need appears",
      "You need extra accounting capacity",
      "Calveris handles the defined requirement"
    ],
    "outcome": "Support for the work you have, without building around work you don't."
  }
];

export default function Model() {
  const [fIdx, setFIdx] = useState(0);

  const s = scenarios[fIdx];

  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40" id="model">
      <div className="shell grid gap-16 lg:gap-20 lg:grid-cols-2 items-start">
        <div className="pr-0 lg:pr-8">
          <div className="reveal">
            <p className="eyebrow flex items-center gap-3 text-muted-foreground mb-8 lg:-mt-[52px]">
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
              <span>Built around your business</span>
            </p>
            <h2 className="display-lg mb-8 text-balance">
              Capacity that fits how you already work.
            </h2>
          </div>
          
          <div className="reveal" style={{ animationDelay: '120ms' }}>
            <p className="text-[1.15rem] leading-relaxed text-foreground/80 max-w-lg">
              There isn't a fixed way to work with Calveris. We shape the delivery model around the workload, capacity and systems already in place.
            </p>
          </div>
        </div>
        
        <div>
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
              <div className="p-[40px] flex flex-col min-h-[300px] max-[420px]:p-[25px]">
                <div className="flex justify-between gap-[15px] text-[10px] tracking-[0.08em] border-b border-hairline pb-[18px] mb-[24px] max-[420px]:text-[9px]">
                  <span className="text-muted-foreground uppercase">{s.stamp}</span>
                  <span className="text-muted-foreground">CALVERIS</span>
                </div>
                <div className="font-display font-normal text-[32px] leading-[1.1] mb-[16px]">{s.title}</div>
                <p className="text-[15px] leading-[1.6] text-foreground/80 mb-[24px]">{s.description}</p>
                
                <div className="flex-grow flex flex-col justify-center py-[20px] border-y border-hairline my-[8px]">
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[14px] text-foreground/80">{s.chain[0]}</div>
                    <div className="text-muted-foreground text-[14px] leading-none">↓</div>
                    <div className="text-[14px] text-foreground/80">{s.chain[1]}</div>
                    <div className="text-muted-foreground text-[14px] leading-none">↓</div>
                    <div className="text-[14px] text-foreground font-medium">{s.chain[2]}</div>
                  </div>
                </div>

                <p className="text-[14px] font-medium leading-[1.6] text-foreground mt-[24px]">{s.outcome}</p>
                
                <div className="flex justify-between items-center gap-[15px] border-t border-hairline pt-[20px] mt-8 max-[420px]:flex-wrap">
                  <span className="text-[10px] tracking-[0.05em] text-muted-foreground">0{fIdx + 1} OF 0{scenarios.length}</span>
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
