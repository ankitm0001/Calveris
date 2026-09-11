import { useEffect, useRef, useState } from 'react';

const services = [
  "Bookkeeping",
  "Payroll",
  "Month-end",
  "Payables & Receivables",
  "Management Reporting",
  "Year-end & Tax Support",
  "Audit Support"
];

const transformation = [
  {
    step: "01",
    label: "WHERE YOU ARE",
    headline: "Accounting grows with the business.",
    text: "More work, more coordination and more attention are required to keep everything current."
  },
  {
    step: "02",
    label: "THE PRESSURE",
    headline: "The accounting workload becomes harder to keep up with.",
    text: "Work can become fragmented, reactive or take time away from higher-value work."
  },
  {
    step: "03",
    label: "CALVERIS STEPS IN",
    headline: "Accounting work is taken on and managed.",
    text: "Calveris takes on the accounting work within the agreed scope and works within the existing business setup."
  },
  {
    step: "04",
    label: "THE WORK GETS UNDER CONTROL",
    headline: "Work stays current and organised.",
    text: "The accounting workload is kept current, organised and managed through a consistent process."
  },
  {
    step: "05",
    label: "THE INFORMATION BECOMES CLEARER",
    headline: "Clearer, usable financial information.",
    text: "The business has up-to-date accounting information and meaningful reporting to work from."
  },
  {
    step: "06",
    label: "THE OUTCOME",
    headline: "Accounting is handled.",
    text: "Your team has more room to focus on the business."
  }
];

export default function Services() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);
  
  const timelineRef = useRef(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    // Reveal section
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px' });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Smooth scroll spy for timeline
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when the timeline passes slightly below the center of the viewport
      const startTrigger = windowHeight * 0.6;
      const totalScrollDistance = rect.height;
      const distanceScrolled = startTrigger - rect.top;
      
      let progress = distanceScrolled / totalScrollDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global progress mapped to the number of nodes (0 to N-1)
  const globalProgress = scrollYProgress * (transformation.length - 1);

  return (
    <section 
      className="bg-background text-foreground py-28 lg:py-40 scroll-mt-[90px]" 
      id="services" 
      ref={sectionRef}
      style={{ borderBottom: '1px solid var(--color-hairline)' }}
    >
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* LEFT SIDE - HEADER & SERVICES */}
          <div className={`lg:sticky lg:top-32 self-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[9px] tracking-widest uppercase font-bold mb-6" 
              style={{ 
                color: 'var(--color-accent)', 
                background: 'var(--color-background)', 
                boxShadow: 'inset 6px 6px 12px #c4c6cc, inset -6px -6px 12px #ffffff' 
              }}
            >
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45" style={{ background: 'var(--color-accent)' }}></span>
              Our services
            </div>
            <h2 className="display-lg mb-12 text-balance max-w-lg leading-[1.1]">
              The exact accounting work your business needs handled.
            </h2>
            
            <div className="flex flex-col gap-4" role="list">
              {services.map((service, j) => (
                <div 
                  key={j}
                  className="group relative flex justify-between items-center py-4 px-6 lg:py-5 lg:px-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-default"
                  style={{
                    background: 'var(--color-background)',
                    boxShadow: '10px 10px 20px #c4c6cc, -10px -10px 20px #ffffff'
                  }}
                >
                  <div className="flex gap-5 items-center">
                    <span className="text-[11px] tracking-widest text-muted-foreground font-bold opacity-70 group-hover:text-accent transition-colors duration-500">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display font-medium text-xl text-foreground">
                      {service}
                    </span>
                  </div>
                  <span className="text-lg text-accent/60 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT SIDE - TRANSFORMATION TIMELINE */}
          <div className={`lg:pl-12 flex flex-col pt-12 lg:pt-0 transition-all duration-1000 delay-[140ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative" ref={timelineRef}>
              <div className="flex flex-col gap-0">
                {transformation.map((step, i) => {
                  const isActive = globalProgress >= i - 0.2; // Add a small threshold leeway
                  
                  // Calculate how full the line segment below this node should be (0 to 100%)
                  const segmentProgress = globalProgress - i;
                  const lineFillPercent = Math.max(0, Math.min(1, segmentProgress)) * 100;
                  
                  return (
                    <div 
                      key={i} 
                      className="flex gap-8 group"
                    >
                      {/* Node / Line column */}
                      <div className="flex flex-col items-center mt-1.5">
                        
                        {/* Neumorphic Node */}
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-500"
                          style={{
                            background: isActive ? 'var(--color-forest)' : 'var(--color-background)',
                            boxShadow: isActive 
                              ? 'inset 4px 4px 10px rgba(0,0,0,0.4), inset -2px -2px 6px rgba(255,255,255,0.1)' 
                              : '6px 6px 12px #c4c6cc, -6px -6px 12px #ffffff',
                          }}
                        >
                           <div 
                             className="w-3 h-3 rounded-full transition-all duration-500"
                             style={{
                               background: isActive ? 'var(--color-accent)' : 'rgba(0,0,0,0.1)',
                               boxShadow: isActive ? '0 0 10px rgba(124, 170, 120, 0.8)' : 'inset 1px 1px 3px rgba(0,0,0,0.2)'
                             }}
                           ></div>
                        </div>
                        
                        {/* Neumorphic Connecting Groove */}
                        {i < transformation.length - 1 && (
                          <div 
                            className="w-2.5 flex-grow my-3 min-h-[90px] lg:min-h-[140px] rounded-full relative overflow-hidden transition-all"
                            style={{
                              background: 'var(--color-background)',
                              boxShadow: 'inset 3px 3px 6px #c4c6cc, inset -3px -3px 6px #ffffff'
                            }}
                          >
                            <div 
                              className="absolute top-0 left-0 w-full rounded-full transition-all duration-100 ease-out"
                              style={{ 
                                height: `${lineFillPercent}%`, 
                                background: 'var(--color-forest)',
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className={`pt-1.5 ${i < transformation.length - 1 ? 'pb-16 lg:pb-24' : ''}`}>
                        <div className={`text-[10px] tracking-[0.12em] uppercase font-bold mb-3 transition-colors duration-500 ${
                          isActive ? 'text-accent' : 'text-muted-foreground/50'
                        }`}>
                          {step.step} / {step.label}
                        </div>
                        <h3 className={`font-display text-[26px] lg:text-[28px] leading-[1.2] mb-4 transition-colors duration-500 ${
                          isActive ? 'text-foreground' : 'text-muted-foreground/50'
                        }`}>
                          {step.headline}
                        </h3>
                        <p className={`text-[15px] leading-relaxed max-w-[420px] transition-colors duration-500 ${
                          isActive ? 'text-foreground/80' : 'text-muted-foreground/40'
                        }`}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
