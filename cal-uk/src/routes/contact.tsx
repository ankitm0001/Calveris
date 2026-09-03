import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";

import { Diamond, Eyebrow, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Build Your Audit & Accounting Team | Calveris" },
      {
        name: "description",
        content:
          "Tell us the professional your firm needs — Audit Junior to Audit Manager or ACCA-qualified accountant — and speak directly to a Calveris founder.",
      },
      { property: "og:title", content: "Contact | Build Your Audit & Accounting Team | Calveris" },
      {
        property: "og:description",
        content: "Tell us the professional you need. We'll help you build the team.",
      },
    ],
  }),
  component: Contact,
});

const roles = [
  "Audit Junior",
  "Audit Semi-Senior",
  "Audit Senior",
  "Audit Manager",
  "ACCA-Qualified Accountant",
  "Accounts Preparation",
  "Bookkeeping",
  "Management Accounts",
  "Financial Reporting",
  "VAT Support",
];

const fieldClass =
  "w-full border-b border-hairline bg-transparent py-4 text-[1.05rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const firm = String(form.get("firm") || "");
    const email = String(form.get("email") || "");
    const role = String(form.get("role") || "");
    const details = String(form.get("details") || "");
    const subject = encodeURIComponent(`Calveris enquiry — ${role} for ${firm}`);
    const body = encodeURIComponent(
      `Name: ${name}\nFirm: ${firm}\nEmail: ${email}\nProfessional needed: ${role}\n\nWorkload, software and start date:\n${details}`,
    );
    window.location.href = `mailto:info@calveris.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Need more capacity?"
        copy="Tell us the professional you need. We'll help you build the team — with direct access to a Calveris founder."
      />

      <section className="border-b border-hairline bg-background py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="text-muted-foreground">Direct access</Eyebrow>
              <p className="mt-8 font-display text-3xl font-light leading-snug">
                Speak to a founder, not a call centre.
              </p>
              <ul className="mt-10 border-t border-hairline text-sm text-muted-foreground">
                <li className="flex items-center gap-4 border-b border-hairline py-5">
                  <Diamond />
                  <a
                    href="mailto:info@calveris.co.uk"
                    className="transition-colors hover:text-accent"
                  >
                    info@calveris.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-4 border-b border-hairline py-5">
                  <Diamond />
                  <a href="tel:+447999901081" className="transition-colors hover:text-accent">
                    +44 7999 901081
                  </a>
                </li>
                <li className="flex items-center gap-4 border-b border-hairline py-5">
                  <Diamond />
                  <a
                    href="https://wa.me/447999901081"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    WhatsApp a founder ↗
                  </a>
                </li>
                <li className="flex items-center gap-4 border-b border-hairline py-5">
                  <Diamond />
                  United Kingdom · Founder-led enquiries
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <form className="grid gap-8 md:grid-cols-2" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Your name</span>
                  <input required name="name" className={fieldClass} placeholder="Full name" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Firm name</span>
                  <input required name="firm" className={fieldClass} placeholder="Your practice" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@firm.co.uk"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Professional needed</span>
                  <select required name="role" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a role
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="eyebrow text-muted-foreground">
                    Workload, software and start date
                  </span>
                  <textarea
                    name="details"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about the portfolio, software and when you need capacity."
                  />
                </label>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="eyebrow inline-flex items-center gap-3 border border-ink bg-ink px-7 py-4 tracking-[0.18em] text-ink-foreground transition-colors duration-500 hover:border-accent hover:bg-accent"
                  >
                    Draft Enquiry Email
                    <span aria-hidden>↗</span>
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground md:col-span-2">
                  This securely opens a pre-filled email to info@calveris.co.uk. Prefer a quick
                  conversation? Call or WhatsApp us on +44 7999 901081.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
