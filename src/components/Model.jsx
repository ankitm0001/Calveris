import { useState } from 'react';

const scenarios = [
  {
    tab: "01",
    stamp: "FOR FINANCE & ACCOUNTING FIRMS",
    title: "Behind your client relationship",
    description: "You keep the client relationship. We handle the accounting delivery behind your team.",
    chain: [
      "Client work increases",
      "Your delivery capacity is stretched",
      "Calveris handles the accounting work"
    ],
    outcome: "You stay focused on clients, finance and advisory, while your client stays yours."
  },
  {
    tab: "02",
    stamp: "EXTENDED ACCOUNTING CAPACITY",
    title: "Extended accounting team",
    description: "Add the accounting capacity you need without building the entire team internally.",
    chain: [
      "Workload grows",
      "Your internal team reaches capacity",
      "Calveris takes on the accounting workload"
    ],
    outcome: "Keep pace without adding every accounting role in-house."
  },
  {
    tab: "03",
    stamp: "EXISTING WORKFLOWS",
    title: "Within your existing systems",
    description: "We work within the accounting platforms, processes and workflows your team already uses.",
    chain: [
      "Your systems are already in place",
      "Calveris plugs into the existing workflow",
      "Accounting work moves through the process you already know"
    ],
    outcome: "You don't need to rebuild your workflow around us."
  },
  {
    tab: "04",
    stamp: "ONGOING WORKLOAD",
    title: "Dedicated accounting capacity",
    description: "A dedicated resource for ongoing, predictable accounting workload.",
    chain: [
      "Recurring workload is consistent",
      "You need reliable ongoing capacity",
      "A dedicated Calveris resource takes ownership of the workload"
    ],
    outcome: "Built for continuity, not occasional support."
  },
  {
    tab: "05",
    stamp: "RIGHT-SIZED CAPACITY",
    title: "Part-time accounting capacity",
    description: "Match the accounting capacity to the workload, rather than carrying a full-time resource.",
    chain: [
      "Workload requires regular support",
      "A full-time resource isn't necessary",
      "Calveris provides the capacity actually required"
    ],
    outcome: "Support built around the work actually there."
  },
  {
    tab: "06",
    stamp: "SPECIFIC REQUIREMENTS",
    title: "Ad hoc accounting support",
    description: "For defined projects, temporary workload spikes or accounting requirements that don't justify ongoing capacity.",
    chain: [
      "A specific need appears",
      "You need extra accounting capacity",
      "Calveris handles the defined requirement"
    ],
    outcome: "Support for the work you have, without building around work you don't."
  }
];

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Model() {
  const [fIdx, setFIdx] = useState(0);
  const s = scenarios[fIdx];

  return (
    <section
      id="model"
      className="bg-background py-28 lg:py-40"
      style={{ borderBottom: '1px solid var(--color-hairline)' }}
    >
      <div className="shell grid gap-16 lg:gap-20 lg:grid-cols-2 items-start">

        {/* ── Left: Heading + description ───────────── */}
        <div className="lg:sticky lg:top-32">
          <div 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[9px] tracking-widest uppercase font-bold mb-8 lg:-mt-[52px]" 
            style={{ 
              color: 'var(--color-accent)', 
              background: 'var(--color-background)', 
              boxShadow: 'inset 6px 6px 12px #c4c6cc, inset -6px -6px 12px #ffffff' 
            }}
          >
            <span aria-hidden="true" className="inline-block size-[6px] rotate-45" style={{ background: 'var(--color-accent)' }} />
            Built around your business
          </div>
          <h2 className="display-lg mb-8 text-balance" style={{ color: 'var(--color-foreground)' }}>
            Capacity that fits how you already work.
          </h2>
          <p className="text-[1.1rem] leading-relaxed" style={{ color: 'var(--color-foreground)', opacity: 0.75 }}>
            There isn't a fixed way to work with Calveris. We shape the delivery model around the workload, capacity and systems already in place.
          </p>
        </div>

        {/* ── Right: Clay card with tabs inside ───────── */}
        <div
          className="rounded-[2.5rem] overflow-hidden"
          style={{
            background: 'var(--color-background)',
            boxShadow: '20px 20px 40px #c4c6cc, -20px -20px 40px #ffffff',
          }}
        >
          {/* Tab row, sits at the very top of the card */}
          <div
            className="flex"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
            role="group"
            aria-label="Capacity scenarios"
          >
            {scenarios.map((sc, j) => (
              <button
                key={j}
                onClick={() => setFIdx(j)}
                aria-pressed={j === fIdx}
                className="flex-1 py-4 text-[13px] font-bold tracking-wide cursor-pointer transition-all duration-300 border-r last:border-r-0"
                style={{
                  background: 'var(--color-background)',
                  color: j === fIdx ? 'var(--color-foreground)' : 'var(--color-muted-foreground)',
                  boxShadow: j === fIdx
                    ? 'inset 4px 4px 8px #c4c6cc, inset -4px -4px 8px #ffffff'
                    : 'none',
                  borderColor: 'rgba(0,0,0,0.07)',
                }}
              >
                {sc.tab}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="p-8 lg:p-12 flex flex-col min-h-[380px]">

            {/* Stamp + Calveris pill */}
            <div
              className="flex justify-between items-center text-[9px] tracking-[0.2em] uppercase font-bold pb-6 mb-8"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}
            >
              <span style={{ color: 'var(--color-forest)' }}>{s.stamp}</span>
              <span
                className="px-4 py-1.5 rounded-full"
                style={{
                  background: 'var(--color-background)',
                  boxShadow: 'inset 6px 6px 12px #c4c6cc, inset -6px -6px 12px #ffffff',
                  color: 'var(--color-muted-foreground)',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                }}
              >
                CALVERIS
              </span>
            </div>

            {/* Title + description */}
            <h3
              className="font-display text-3xl lg:text-[2rem] mb-4 leading-tight"
              style={{ color: 'var(--color-foreground)', fontWeight: 300 }}
            >
              {s.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed mb-8" style={{ color: 'var(--color-muted-foreground)' }}>
              {s.description}
            </p>

            {/* Step chain */}
            <div
              className="flex-grow py-6"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="relative pl-1">
                {/* Vertical connector line */}
                <div
                  className="absolute top-5 bottom-5 w-[2px]"
                  style={{
                    left: '19px',
                    background: 'linear-gradient(to bottom, #c4c6cc, transparent)',
                  }}
                />
                <div className="flex flex-col gap-0">
                  {s.chain.map((step, i) => {
                    const isLast = i === s.chain.length - 1;
                    return (
                      <div key={`${fIdx}-${i}`} className="relative flex gap-5 pb-7 last:pb-0">
                        {/* Step circle */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 text-[11px] font-bold transition-all duration-500"
                          style={{
                            background: isLast ? 'var(--color-forest)' : 'var(--color-background)',
                            color: isLast ? '#ffffff' : 'var(--color-muted-foreground)',
                            boxShadow: isLast
                              ? '0 6px 18px rgba(32,55,42,0.5)'
                              : '6px 6px 12px #c4c6cc, -6px -6px 12px #ffffff',
                            border: isLast ? '1px solid rgba(72,130,109,0.5)' : 'none',
                          }}
                        >
                          {isLast ? <CheckIcon /> : i + 1}
                        </div>
                        {/* Step text */}
                        <div className="pt-2.5">
                          <p
                            className="text-sm leading-relaxed"
                            style={{
                              color: isLast ? 'var(--color-foreground)' : 'var(--color-muted-foreground)',
                              fontWeight: isLast ? 600 : 400,
                            }}
                          >
                            {step}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <p
              className="text-[0.9rem] font-medium leading-relaxed mt-7 mb-6"
              style={{ color: 'var(--color-foreground)' }}
            >
              {s.outcome}
            </p>

            {/* Counter + dot nav */}
            <div
              className="flex justify-between items-center pt-5"
              style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
            >
              <span className="text-[10px] tracking-[0.08em]" style={{ color: 'var(--color-muted-foreground)' }}>
                0{fIdx + 1} OF 0{scenarios.length}
              </span>
              <div className="flex gap-[5px]">
                {scenarios.map((_, j) => (
                  <button
                    key={j}
                    onClick={() => setFIdx(j)}
                    aria-label={`Scenario ${j + 1}`}
                    className="h-5 w-6 border-0 border-b-2 bg-transparent cursor-pointer transition-colors duration-300"
                    style={{ borderColor: j === fIdx ? 'var(--color-accent)' : 'var(--color-hairline)' }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
