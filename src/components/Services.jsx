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
    <section className="bg-forest text-forest-foreground py-28 lg:py-40 scroll-mt-[90px]" id="services" ref={sectionRef}>
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* LEFT SIDE - HEADER & SERVICES */}
          <div className={`lg:sticky lg:top-[8vh] self-start transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="eyebrow flex items-center gap-3 text-forest-foreground/60 mb-4">
              <span aria-hidden="true" className="inline-block size-[6px] rotate-45 bg-accent"></span>
              <span>Our services</span>
            </div>
            <h2 className="display-lg mb-8 text-balance max-w-lg leading-[1.1]">
              The accounting work your business needs handled.
            </h2>
            
            <div className="border-t border-l border-r border-hairline-light" role="list">
              {services.map((service, j) => (
                <div 
                  key={j}
                  className="group relative overflow-hidden flex justify-between items-center text-left py-3.5 px-5 lg:py-4 lg:px-6 bg-transparent border-b border-hairline-light text-inherit transition-colors duration-500 hover:bg-forest-foreground/[0.05]"
                >
                  <div className="flex gap-5 items-center">
                    <span className="text-[10px] tracking-widest opacity-60 transition-colors duration-500 group-hover:text-accent/80 font-semibold">{String(j + 1).padStart(2, '0')}</span>
                    <span className="font-display font-normal text-lg lg:text-xl leading-[1.1]">{service}</span>
                  </div>
                  <span className="text-base text-accent/60 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT SIDE - TRANSFORMATION */}
          <div className={`lg:pl-16 flex flex-col pt-12 lg:pt-0 transition-all duration-1000 delay-[140ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative" ref={timelineRef}>
              <div className="flex flex-col gap-0">
                {transformation.map((step, i) => {
                  const isActive = globalProgress >= i - 0.2; // Add a small threshold leeway so it highlights slightly before it hits the exact line
                  
                  // Calculate how full the line segment below this node should be (0 to 100%)
                  const segmentProgress = globalProgress - i;
                  const lineFillPercent = Math.max(0, Math.min(1, segmentProgress)) * 100;
                  
                  return (
                    <div 
                      key={i} 
                      className="flex gap-8 group"
                    >
                      {/* Node / Line column */}
                      <div className="flex flex-col items-center mt-2">
                        <div className={`size-[12px] rounded-full border-[2px] transition-colors duration-300 z-10 flex-shrink-0 ${
                          i === transformation.length - 1 && globalProgress >= transformation.length - 1.1
                            ? 'bg-accent border-accent' 
                            : isActive 
                              ? 'border-accent bg-forest' 
                              : 'border-hairline-light bg-forest'
                        }`}></div>
                        
                        {/* Connecting line */}
                        {i < transformation.length - 1 && (
                          <div className="w-[1px] flex-grow my-1 min-h-[80px] lg:min-h-[120px] bg-hairline-light/30 relative overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 w-full bg-accent"
                              style={{ height: `${lineFillPercent}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className={`pt-0.5 ${i < transformation.length - 1 ? 'pb-16 lg:pb-24' : ''}`}>
                        <div className={`text-[10px] tracking-[0.08em] uppercase font-semibold mb-3 transition-colors duration-500 ${
                          isActive ? 'text-accent' : 'text-forest-foreground/40'
                        }`}>
                          {step.step} / {step.label}
                        </div>
                        <h3 className={`font-display text-[26px] lg:text-[28px] leading-[1.2] mb-4 transition-colors duration-500 ${
                          isActive ? 'text-forest-foreground' : 'text-forest-foreground/50'
                        }`}>
                          {step.headline}
                        </h3>
                        <p className={`text-[15px] leading-relaxed max-w-[420px] transition-colors duration-500 ${
                          isActive ? 'text-forest-foreground/80' : 'text-forest-foreground/30'
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
