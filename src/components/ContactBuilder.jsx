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

// ─── Neumorphic token styles (dark) ───────────────────────────────────────────
const BASE_BG = '#0d1b16';
const SHADOW_D = '#040907';
const SHADOW_L = '#183329';
const ACCENT = '#7ec8a0';

const raisedStyle = {
  background: BASE_BG,
  boxShadow: `8px 8px 16px ${SHADOW_D}, -8px -8px 16px ${SHADOW_L}`,
  borderRadius: '999px',
  border: 'none',
};

const pressedStyle = {
  background: BASE_BG,
  boxShadow: `inset 5px 5px 10px ${SHADOW_D}, inset -5px -5px 10px ${SHADOW_L}`,
  borderRadius: '999px',
  border: 'none',
};

const activeStyle = {
  background: '#2a5a4a',
  boxShadow: `0 6px 16px rgba(42,90,74,0.45)`,
  borderRadius: '999px',
  border: 'none',
  color: '#ffffff',
};

const fieldUnderlineStyle = {
  background: 'transparent',
  borderBottom: `1px solid rgba(126,200,160,0.2)`,
  outline: 'none',
  color: '#f0f5f0',
  padding: '10px 0',
  width: '100%',
  fontSize: '1rem',
  transition: 'border-color 0.2s',
};

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
            style={isSelected ? activeStyle : raisedStyle}
            className="inline-flex items-center gap-2 text-left py-2 px-5 text-[13px] font-medium cursor-pointer transition-all duration-300"
            aria-pressed={isSelected}
            onClick={() => onToggle(id)}
          >
            <span style={{ color: isSelected ? '#fff' : 'rgba(240,245,240,0.75)' }}>
              {label}
            </span>
            {isSelected && (
              <span style={{ color: ACCENT, fontSize: '11px' }} aria-hidden="true">✓</span>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const formRef = useRef(null);

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
      if (service === "Something else") setCustomService("");
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

  const handleSubmit = async (e) => {
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
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("companyName", companyName);
      formData.append("email", email);
      formData.append("contactNumber", contactNumber);
      
      formData.append("services", selectedServices.join(", "));
      if (selectedServices.includes("Something else")) {
        formData.append("customService", customService);
      }
      formData.append("supportType", supportType);
      formData.append("orgType", orgType);
      formData.append("location", location);
      formData.append("additionalInfo", additionalInfo);
      formData.append("generatedBrief", brief.headline);

      const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby9BMHl15R7r95I_ClGw26d2iEHERbN8NieXvIPOC7WiHeMY8aaJsuys4Mb5V69Zot9/exec";
      
      await fetch(WEB_APP_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      setSelectedServices([]);
      setCustomService("");
      setSupportType("");
      setOrgType("");
      setLocation("");
      setAdditionalInfo("");
      
      // Clear contact info fields
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setEmail("");
      setContactNumber("");
      
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setValidationMessage("Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle = {
    display: 'block',
    fontSize: '9px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'rgba(126,200,160,0.6)',
    marginBottom: '6px',
  };

  const sectionLabelStyle = {
    display: 'block',
    fontSize: '9px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'rgba(240,245,240,0.45)',
    marginBottom: '14px',
  };

  return (
    <>
      <section style={{ background: BASE_BG }} className="py-[130px] max-[760px]:py-[80px] border-b border-[#183329]/50 relative z-20">
        <div className="shell">
          <div className="grid grid-cols-[1fr_1.1fr] gap-[80px] lg:gap-[120px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[60px]">
            
            {/* LEFT: BUILDER QUESTIONS */}
            <div className="flex flex-col gap-[48px]">
              
              <div role="group" aria-labelledby="cat-services">
                <label id="cat-services" style={sectionLabelStyle}>
                  What do you need support with?
                </label>
                <OptionList 
                  options={SERVICES} 
                  selectedItems={selectedServices} 
                  onToggle={toggleService} 
                />
                {selectedServices.includes("Something else") && (
                  <div
                    className="mt-4"
                    style={{
                      borderRadius: '1rem',
                      padding: '16px 20px',
                      background: BASE_BG,
                      boxShadow: `inset 4px 4px 8px ${SHADOW_D}, inset -4px -4px 8px ${SHADOW_L}`,
                    }}
                  >
                    <input 
                      type="text" 
                      placeholder="Tell us what you're looking for." 
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      style={{ background: 'transparent', border: 'none', outline: 'none', color: '#f0f5f0', fontSize: '15px', width: '100%' }}
                      className="placeholder:text-[rgba(240,245,240,0.3)] italic"
                    />
                  </div>
                )}
              </div>

              <div role="group" aria-labelledby="cat-support">
                <label id="cat-support" style={sectionLabelStyle}>
                  How would you like us to support you?
                </label>
                <OptionList 
                  options={SUPPORT_TYPES} 
                  selectedItems={[supportType]} 
                  onToggle={(id) => setSupportType(supportType === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-org">
                <label id="cat-org" style={sectionLabelStyle}>
                  Who are you?
                </label>
                <OptionList 
                  options={ORG_TYPES} 
                  selectedItems={[orgType]} 
                  onToggle={(id) => setOrgType(orgType === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-loc">
                <label id="cat-loc" style={sectionLabelStyle}>
                  Where are you based?
                </label>
                <OptionList 
                  options={LOCATIONS} 
                  selectedItems={[location]} 
                  onToggle={(id) => setLocation(location === id ? "" : id)} 
                />
              </div>

              <div role="group" aria-labelledby="cat-else">
                <label id="cat-else" style={sectionLabelStyle}>
                  Anything else?
                </label>
                <textarea 
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="A specific requirement, situation, software, timeline or question."
                  style={{
                    width: '100%',
                    minHeight: '110px',
                    background: BASE_BG,
                    boxShadow: `inset 5px 5px 12px ${SHADOW_D}, inset -5px -5px 12px ${SHADOW_L}`,
                    borderRadius: '1.25rem',
                    padding: '18px 20px',
                    fontSize: '15px',
                    color: '#f0f5f0',
                    border: 'none',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  className="placeholder:text-[rgba(240,245,240,0.3)]"
                ></textarea>
              </div>

            </div>

            {/* RIGHT: CONTACT + BRIEF */}
            <div className="relative">
              <div className="lg:sticky lg:top-[120px] pt-4 lg:pt-0">

                {/* CONTACT FIELDS */}
                <div
                  style={{
                    background: BASE_BG,
                    boxShadow: `16px 16px 32px ${SHADOW_D}, -16px -16px 32px ${SHADOW_L}`,
                    borderRadius: '2rem',
                    padding: '40px',
                  }}
                >
                  <div style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: '700', color: 'rgba(126,200,160,0.6)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT, display: 'inline-block' }}></span>
                    Direct Contact
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display, Georgia, serif)', fontWeight: '300', fontSize: '1.5rem', color: '#f0f5f0', marginBottom: '28px', lineHeight: '1.3' }}>
                    Let's put a name to the requirement.
                  </h3>

                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                    <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fname" style={labelStyle}>First name</label>
                        <input 
                          id="fname"
                          type="text" 
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)}
                          style={fieldUnderlineStyle}
                          className="dark-autofill"
                          onFocus={e => e.target.style.borderBottomColor = ACCENT}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(126,200,160,0.2)'}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lname" style={labelStyle}>Last name</label>
                        <input 
                          id="lname"
                          type="text" 
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                          style={fieldUnderlineStyle}
                          className="dark-autofill"
                          onFocus={e => e.target.style.borderBottomColor = ACCENT}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(126,200,160,0.2)'}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" style={labelStyle}>Company name</label>
                      <input 
                        id="company"
                        type="text" 
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        style={fieldUnderlineStyle}
                        className="dark-autofill"
                        onFocus={e => e.target.style.borderBottomColor = ACCENT}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(126,200,160,0.2)'}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input 
                          id="email"
                          type="email" 
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          style={fieldUnderlineStyle}
                          className="dark-autofill"
                          onFocus={e => e.target.style.borderBottomColor = ACCENT}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(126,200,160,0.2)'}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" style={labelStyle}>Contact number</label>
                        <input 
                          id="phone"
                          type="tel" 
                          value={contactNumber}
                          onChange={e => setContactNumber(e.target.value)}
                          style={fieldUnderlineStyle}
                          className="dark-autofill"
                          onFocus={e => e.target.style.borderBottomColor = ACCENT}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(126,200,160,0.2)'}
                        />
                      </div>
                    </div>

                    {/* BRIEF PREVIEW */}
                    <div
                      style={{
                        marginTop: '24px',
                        padding: '24px',
                        borderRadius: '1.25rem',
                        background: BASE_BG,
                        boxShadow: `inset 5px 5px 12px ${SHADOW_D}, inset -5px -5px 12px ${SHADOW_L}`,
                      }}
                    >
                      <div style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: '700', color: 'rgba(126,200,160,0.5)', marginBottom: '14px' }}>Your brief</div>

                      <div style={{ fontFamily: 'var(--font-display, Georgia, serif)', fontWeight: '300', fontSize: '1.7rem', lineHeight: '1.2', color: '#f0f5f0', marginBottom: '14px', transition: 'all 0.3s' }}>
                        {brief.headline}
                      </div>

                      {brief.subtext && (
                        <div style={{ fontSize: '1rem', color: 'rgba(240,245,240,0.45)', marginBottom: '14px', fontWeight: '300' }}>
                          {brief.subtext}
                        </div>
                      )}

                      {selectedServices.length >= 3 && (
                        <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: '700', color: ACCENT, marginBottom: '10px' }}>
                          {selectedServices.length} services selected
                        </div>
                      )}

                      {brief.details && (
                        <div style={{ fontSize: '13px', color: 'rgba(240,245,240,0.55)', marginBottom: '14px' }}>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                            {brief.details.slice(0, 3).map((detail, i) => (
                              <span key={i} className="flex items-center gap-3">
                                {i > 0 && <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(126,200,160,0.3)', display: 'inline-block' }}></span>}
                                <span>{detail}</span>
                              </span>
                            ))}
                            {brief.details.length > 3 && (
                              <span style={{ color: ACCENT, fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em' }}>+{brief.details.length - 3}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {validationMessage && (
                      <div style={{ padding: '16px', borderLeft: `3px solid ${ACCENT}`, background: 'rgba(126,200,160,0.06)', borderRadius: '0 0.75rem 0.75rem 0', fontSize: '14px', color: 'rgba(240,245,240,0.8)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <span style={{ color: ACCENT, marginTop: '2px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </span>
                        {validationMessage}
                      </div>
                    )}

                    <div className="mt-2">
                      <button 
                        type="submit"
                        className="group inline-flex items-center justify-between gap-3 px-8 py-4 w-full cursor-pointer transition-all duration-300"
                        style={{
                          borderRadius: '999px',
                          background: '#2a5a4a',
                          boxShadow: '0 8px 20px rgba(42,90,74,0.4)',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '11px',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          fontWeight: '700',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 28px rgba(42,90,74,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(42,90,74,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          <svg viewBox="0 0 16 16" style={{ width: '14px', height: '14px' }} fill="none" aria-hidden="true"><path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"></path></svg>
                        </span>
                      </button>
                    </div>

                    {isSubmitted && (
                      <div style={{ marginTop: '16px', padding: '20px', borderRadius: '1.25rem', background: BASE_BG, boxShadow: `inset 4px 4px 10px ${SHADOW_D}, inset -4px -4px 10px ${SHADOW_L}`, display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <span style={{ color: ACCENT, marginTop: '2px', flexShrink: 0 }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                        </span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '700', color: '#f0f5f0', marginBottom: '4px' }}>Enquiry received</div>
                          <div style={{ fontSize: '13px', color: 'rgba(240,245,240,0.65)', lineHeight: '1.6' }}>Thanks, {firstName}. We'll review your requirement and come back to you directly — usually within one business day.</div>
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
