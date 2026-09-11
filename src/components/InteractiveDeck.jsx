import { useState } from 'react';
import { BarChart3, Shield, Clock, Database } from 'lucide-react';

export default function InteractiveDeck() {
  const [hoverIdx, setHoverIdx] = useState(null);
  
  const cards = [
      { id: 4, label: "2024", title: "Strategic Forecast", subtitle: "Predictive financial modeling", icon: <BarChart3 size={24}/> },
      { id: 3, label: "2023", title: "Tax & Compliance", subtitle: "Finalized year-end filings", icon: <Shield size={24}/> },
      { id: 2, label: "Q3", title: "Month-End Close", subtitle: "Comprehensive reconciliation", icon: <Clock size={24}/> },
      { id: 1, label: "Live", title: "Ledger Engine", subtitle: "Real-time sync & visibility", icon: <Database size={24}/> },
  ];

  return (
      <div className="relative w-full max-w-[500px] h-[650px] flex items-center justify-center pointer-events-auto z-50 mx-auto lg:ml-auto">
          
          {/* Background Ambient Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4ade80] rounded-full mix-blend-screen opacity-10 blur-[100px] pointer-events-none animate-[pulseGlow_6s_ease-in-out_infinite]"></div>

          {/* 
            The Ledger Array:
            Uses pure 2D transforms (translateY, translateX) to create a flawless, stable 
            cascading stack that feels 3D but eliminates all browser hitbox glitching.
          */}
          <div className="relative w-full h-[450px] animate-[floatUpDown_8s_ease-in-out_infinite] flex flex-col justify-start mt-20">
              {cards.map((card, i) => {
                  const isHovered = hoverIdx === i;
                  const isAnyHovered = hoverIdx !== null;
                  
                  // Staggered vertical base positioning
                  const baseTop = i * 85; 
                  const zIndex = isHovered ? 50 : 10 - i;
                  
                  // Transform logic for pulling active card out and pushing others away
                  let translateY = baseTop;
                  let translateX = 0;
                  let scale = 1 - (i * 0.05); // Deeper cards are visually smaller
                  
                  if (isAnyHovered) {
                      if (isHovered) {
                          translateX = -40; // Pull heavily to the left to feature it
                          translateY = baseTop - 15; // Lift up slightly
                          scale = 1.05; // Enlarge
                      } else if (i < hoverIdx) {
                          translateY = baseTop - 50; // Push above cards up
                          translateX = 20; // Push them slightly right
                      } else {
                          translateY = baseTop + 50; // Push below cards down
                          translateX = 20; // Push them slightly right
                      }
                  }

                  return (
                      <div
                          key={card.id}
                          onMouseEnter={() => setHoverIdx(i)}
                          onMouseLeave={() => setHoverIdx(null)}
                          className="absolute left-0 right-0 cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                          style={{
                              top: '0px',
                              zIndex: zIndex,
                              transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
                              opacity: isAnyHovered && !isHovered ? 0.3 : 1,
                              filter: isAnyHovered && !isHovered ? 'blur(3px)' : 'blur(0px)',
                              transformOrigin: 'center top'
                          }}
                      >
                          {/* Ultra-Premium Glassmorphic Card */}
                          <div className={`relative w-[90%] sm:w-[420px] mx-auto rounded-[2rem] border overflow-hidden backdrop-blur-2xl p-8 transition-all duration-[600ms]
                              ${isHovered 
                                  ? 'bg-gradient-to-br from-[#153225]/95 to-[#0a1812]/98 border-[#4ade80]/60 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(74,222,128,0.25)]' 
                                  : 'bg-gradient-to-br from-[#112119]/90 to-[#060c09]/95 border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.7)]'
                              }
                          `}>
                              {/* Glowing top scanline */}
                              <div className={`absolute top-0 left-0 w-full h-[2px] transition-all duration-700 ${isHovered ? 'bg-gradient-to-r from-transparent via-[#4ade80] to-transparent shadow-[0_0_20px_#4ade80] opacity-100' : 'bg-white/20 opacity-30'}`}></div>
                              
                              <div className="flex items-start gap-6 relative z-10">
                                  <div className={`p-4 rounded-2xl flex items-center justify-center transition-all duration-500 border ${isHovered ? 'bg-[#4ade80]/15 text-[#4ade80] border-[#4ade80]/40 shadow-[inset_0_0_20px_rgba(74,222,128,0.25)] scale-110' : 'bg-white/5 text-[#a3c2a3] border-white/10'}`}>
                                      {card.icon}
                                  </div>
                                  <div>
                                      <div className="flex items-center gap-2 mb-2">
                                          <span className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isHovered ? 'text-[#4ade80]' : 'text-white/40'}`}>{card.label}</span>
                                      </div>
                                      <h3 className={`text-2xl font-serif mb-1.5 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/80'}`}>{card.title}</h3>
                                      <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${isHovered ? 'text-[#e5e7eb]' : 'text-[#6b7280]'}`}>{card.subtitle}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
  );
}
