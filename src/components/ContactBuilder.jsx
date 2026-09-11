import { useState, useRef, useEffect } from 'react';

const SERVICES = [
  "Bookkeeping",
  "Payroll",
  "Management Reporting",
  "Payables & Receivables",
  "Year-end & Tax Support",
  "Audit Support",
  "Something else"
];

const SUPPORT_TYPES = [
  { id: "Full-time", label: "Full-time (FTE)" },
  { id: "Part-time", label: "Part-time (PTE)" },
  { id: "Ad hoc", label: "Ad hoc" },
  { id: "Not sure", label: "Not sure" }
];

const ORG_TYPES = [
  "Business",
  "Finance / Accounting Firm"
];

const LOCATIONS = [
  "UK",
  "US"
];

function OptionList({ options, selectedItems, onToggle }) {
  return (
    <div className="flex flex-wrap gap-3" role="group">
      {options.map((opt) => {
        const id = typeof opt === 'string' ? opt : opt.id;
        const label = typeof opt === 'string' ? opt : opt.label;
        const isSelected = selectedItems.includes(id);

        return (
          <button 
            key={id}
            type="button"
            className={`group relative overflow-hidden inline-flex items-center gap-2 text-left py-2 px-4 border transition-colors duration-300 ${isSelected ? 'bg-accent text-accent-foreground border-accent' : 'bg-transparent border-hairline-light text-forest-foreground hover:border-forest-foreground/40'}`}
            aria-pressed={isSelected}
            onClick={() => onToggle(id)}
          >
            <span className="font-body text-[14px] leading-none">
              {label}
            </span>
            {isSelected && (
              <span className="text-[12px] opacity-100" aria-hidden="true">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function ContactBuilder() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [customService, setCustomService] = useState("");
  const [supportType, setSupportType] = useState("");
  const [orgType, setOrgType] = useState("");
  const [location, setLocation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const formRef = useRef(null);

  // Auto-update phone prefix when location changes if phone is empty or matches previous default
  useEffect(() => {
    if (location === "UK" && (!contactNumber || contactNumber === "+1 ")) {
      setContactNumber("+44 ");
    } else if (location === "US" && (!contactNumber || contactNumber === "+44 ")) {
      setContactNumber("+1 ");
    }
  }, [location]);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
      if (service === "Something else") setCustomService(""); // Clear if unselected
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const getDynamicBrief = () => {
    const hasNotSure = supportType === "Not sure" || selectedServices.includes("Not sure");

    if (hasNotSure && selectedServices.length === 0) {
      return { 
        headline: "Looking for finance support — requirements to be discussed.",
        details: null,
        subtext: "We'll work out the details together."
      };
    }

    if (selectedServices.length === 0 && !supportType && !orgType && !location) {
      return { headline: "Tell us what you need.", details: null, subtext: "Select what applies and we'll build the brief here." };
    }

    let servicesText = "";
    const effectiveServices = selectedServices.map(s => s === "Something else" ? (customService.trim() ? "custom requirements" : "bespoke support") : s.toLowerCase());
    
    let details = null;
    let serviceCount = selectedServices.length;

    if (serviceCount === 0) {
      servicesText = "finance support";
    } else if (serviceCount === 1) {
      servicesText = effectiveServices[0] + " support";
    } else if (serviceCount === 2) {
      servicesText = `${effectiveServices[0]} and ${effectiveServices[1]} support`;
    } else {
      servicesText = `finance support across ${serviceCount} areas`;
      details = selectedServices.map(s => s === "Something else" ? (customService.trim() || "Custom requirements") : s);
    }

    if (hasNotSure) {
       return {
         headline: `Looking for ${servicesText} — requirements to be discussed.`,
         details: details,
         subtext: ""
       }
    }

    let sentence = servicesText;
    
    if (supportType) {
      sentence = `${supportType} ${sentence}`;
    }

    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    if (orgType || location) {
      let context = [];
      if (location) context.push(location);
      if (orgType) {
        context.push(orgType === "Business" ? "business" : "firm");
      } else {
        context.push("organisation");
      }
      sentence += ` for your ${context.join(" ")}.`;
    } else {
      sentence += ".";
    }

    return { headline: sentence, details: details, subtext: "" };
  };

  const brief = getDynamicBrief();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedServices.length === 0 && !supportType && !additionalInfo.trim()) {
      setValidationMessage("Please let us know what you need support with so we can direct your enquiry.");
      return;
    }
    if (!firstName.trim()) {
      setValidationMessage("Please add your first name so we know who we're speaking to.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setValidationMessage("Please add a valid email so we know where to reach you.");
      return;
    }

    setValidationMessage("");
    // Reset all selections, keep contact details
    setSelectedServices([]);
    setCustomService("");
    setSupportType("");
    setOrgType("");
    setLocation("");
    setAdditionalInfo("");
    setIsSubmitted(true);
  };



  return (
    <>
      <section className="bg-forest text-forest-foreground py-[130px] max-[760px]:py-[80px] border-b border-hairline-light relative z-20">
        <div className="shell">
          <div className="grid grid-cols-[1fr_1.1fr] gap-[80px] lg:gap-[120px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[60px]">
            
            {/* LEFT: BUILDER QUESTIONS */}
            <div className="flex flex-col gap-[40px]">
              
              <div role="group" aria-labelledby="cat-services">
                <label id="cat-services" className="block eyebrow text-forest-foreground/60 mb-3">
                  What do you need support with?
                </label>
                <OptionList 
                  options={SERVICES} 
                  selectedItems={selectedServices} 
                  onToggle={toggleService} 
                />
                {selectedServices.includes("Something else") && (
                  <div className="mt-[15px] animate-fade-in border border-hairline-light bg-forest-foreground/[0.04] p-4">
                    <input 
                      type="text" 
                      placeholder="Tell us what you're looking for." 
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      className="w-full bg-transparent text-[15px] text-forest-foreground focus:outline-none placeholder:text-forest-foreground/30 font-display italic"
                    />
                  </div>
                )}
              </div>

              <div role="group" aria-labelledby="cat-support">
                <label id="cat-support" className="block eyebrow text-forest-foreground/60 mb-3">
                  How would you like us to support you?
                </label>
                <OptionList 
                  options={SUPPORT_TYPES} 
                  selectedItems={[supportType]} 
                  onToggle={(id) => setSupportType(supportType === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-org">
                <label id="cat-org" className="block eyebrow text-forest-foreground/60 mb-3">
                  Who are you?
                </label>
                <OptionList 
                  options={ORG_TYPES} 
                  selectedItems={[orgType]} 
                  onToggle={(id) => setOrgType(orgType === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-loc">
                <label id="cat-loc" className="block eyebrow text-forest-foreground/60 mb-3">
                  Where are you based?
                </label>
                <OptionList 
                  options={LOCATIONS} 
                  selectedItems={[location]} 
                  onToggle={(id) => setLocation(location === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-else">
                <label id="cat-else" className="block eyebrow text-forest-foreground/60 mb-3">
                  Anything else?
                </label>
                <textarea 
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="A specific requirement, situation, software, timeline or question."
                  className="w-full min-h-[100px] bg-transparent border border-hairline-light p-4 text-[15px] text-forest-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-forest-foreground/30 resize-y font-body"
                ></textarea>
              </div>

            </div>

            {/* RIGHT: CONTACT + BRIEF */}
            <div className="relative">
              <div className="lg:sticky lg:top-[120px] pt-4 lg:pt-0">

                {/* CONTACT FIELDS */}
                <div className="mb-10">
                  <div className="eyebrow text-forest-foreground/50 mb-1 flex items-center gap-3">
                    <span aria-hidden="true" className="inline-block size-[5px] rotate-45 bg-accent"></span>
                    Direct Contact
                  </div>
                  <h3 className="font-display font-light text-[1.6rem] text-forest-foreground mb-6">Let's put a name to the requirement.</h3>

                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                    <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fname" className="eyebrow text-forest-foreground/50 text-[10px]">First name</label>
                        <input 
                          id="fname"
                          type="text" 
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)}
                          className="w-full bg-transparent border-b border-hairline-light py-2.5 text-[1rem] text-forest-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lname" className="eyebrow text-forest-foreground/50 text-[10px]">Last name</label>
                        <input 
                          id="lname"
                          type="text" 
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                          className="w-full bg-transparent border-b border-hairline-light py-2.5 text-[1rem] text-forest-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="eyebrow text-forest-foreground/50 text-[10px]">Company name</label>
                      <input 
                        id="company"
                        type="text" 
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        className="w-full bg-transparent border-b border-hairline-light py-2.5 text-[1rem] text-forest-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="eyebrow text-forest-foreground/50 text-[10px]">Email</label>
                        <input 
                          id="email"
                          type="email" 
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-hairline-light py-2.5 text-[1rem] text-forest-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="eyebrow text-forest-foreground/50 text-[10px]">Contact number</label>
                        <input 
                          id="phone"
                          type="tel" 
                          value={contactNumber}
                          onChange={e => setContactNumber(e.target.value)}
                          className="w-full bg-transparent border-b border-hairline-light py-2.5 text-[1rem] text-forest-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    {/* BRIEF PREVIEW */}
                    <div className="mt-6 pt-6 border-t border-hairline-light">
                      <div className="eyebrow text-forest-foreground/50 mb-4 text-[10px]">Your brief</div>

                      <div className="font-display font-light text-[1.8rem] lg:text-[2.2rem] leading-[1.15] text-forest-foreground transition-all duration-300 mb-5">
                        {brief.headline}
                      </div>

                      {brief.subtext && (
                        <div className="text-[1rem] text-forest-foreground/50 mb-5 font-light">
                          {brief.subtext}
                        </div>
                      )}

                      {selectedServices.length >= 3 && (
                        <div className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                          {selectedServices.length} services selected
                        </div>
                      )}

                      {brief.details && (
                        <div className="text-[13px] text-forest-foreground/60 mb-5">
                          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[6px]">
                            {brief.details.slice(0, 3).map((detail, i) => (
                              <span key={i} className="flex items-center gap-[12px]">
                                {i > 0 && <span className="w-1 h-1 rounded-full bg-accent/40 block"></span>}
                                <span>{detail}</span>
                              </span>
                            ))}
                            {brief.details.length > 3 && (
                              <span className="text-accent text-[11px] font-bold tracking-wider">+{brief.details.length - 3}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {validationMessage && (
                      <div className="p-4 bg-forest-foreground/[0.06] border-l-2 border-accent text-[14px] text-forest-foreground/80 flex items-start gap-3">
                        <span className="text-accent mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </span>
                        {validationMessage}
                      </div>
                    )}

                    <div className="mt-4">
                      <button 
                        type="submit"
                        className="group inline-flex items-center justify-between gap-3 border px-7 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-500 border-background bg-background text-forest hover:bg-accent hover:border-accent hover:text-accent-foreground cursor-pointer w-full"
                      >
                        <span>Send Enquiry</span>
                        <span className="transition-transform duration-500 group-hover:translate-x-1"><svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true"><path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"></path></svg></span>
                      </button>
                    </div>

                    {isSubmitted && (
                      <div className="mt-5 p-5 border border-accent/30 bg-forest-foreground/[0.05] flex items-start gap-4">
                        <span className="text-accent mt-0.5 shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                        </span>
                        <div>
                          <div className="text-[13px] font-semibold text-forest-foreground mb-1">Enquiry received</div>
                          <div className="text-[13px] text-forest-foreground/70 leading-relaxed">Thanks, {firstName}. We'll review your requirement and come back to you directly — usually within one business day.</div>
                        </div>
                      </div>
                    )}

                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
