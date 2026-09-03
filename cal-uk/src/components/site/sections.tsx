import heroImage from "@/assets/hero-architecture.jpg";
import hellyImage from "@/assets/founder-helly.jpg";
import sriImage from "@/assets/founder-sri.jpg";
import { Cta, Diamond, Eyebrow, Marquee, Reveal, SectionHeading } from "./primitives";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Curved concrete and timber architecture viewed from below"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-40 text-ink-foreground">
        <div className="mb-10 h-px w-full bg-hairline-light" />
        <Reveal>
          <Eyebrow className="text-ink-foreground/75">
            Your extended audit &amp; accounting team — for UK accountancy firms
          </Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display-xl mt-8 max-w-[14ch]">Your audit team, extended.</h1>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal delay={200} className="lg:col-span-6">
            <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-foreground/80">
              Experienced audit and accounting professionals helping UK accountancy firms increase
              capacity, meet deadlines and grow — without the recruitment headache.
            </p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-foreground/60">
              From Audit Juniors to Audit Seniors and ACCA-qualified accounting professionals,
              Calveris gives your firm access to the people you need, when you need them.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Cta to="/contact" variant="solid-light">
                Build Your Team
              </Cta>
              <Cta to="/about" variant="outline-light">
                Talk to a Founder
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={320} className="lg:col-span-6 lg:flex lg:items-end lg:justify-end">
            <div className="border border-hairline-light bg-ink/40 p-8 backdrop-blur-sm lg:max-w-sm">
              <p className="eyebrow text-ink-foreground/70">You provide the client.</p>
              <p className="mt-3 font-display text-3xl font-light italic">
                We provide the capacity.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function StatementMarquee() {
  return (
    <div className="bg-background">
      <Marquee
        items={[
          "You provide the client — we provide the capacity",
          "Your extended audit & accounting team",
          "Audit Juniors to Audit Managers",
          "ACCA-qualified professionals",
        ]}
      />
    </div>
  );
}

const modelPoints = ["Your client.", "Your relationship.", "Your control.", "Our people."];

export function ModelSection() {
  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow className="text-muted-foreground">The model</Eyebrow>
            <h2 className="display-lg mt-8">
              You provide the client.
              <br />
              We provide the capacity.
            </h2>
            <div className="mt-10 h-px w-2/3 bg-hairline" />
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <p className="body-lg">
              Finding experienced Audit Seniors is difficult. Finding them when you actually need
              them is even harder. Calveris helps UK accountancy firms strengthen their existing
              teams with experienced audit and accounting professionals.
            </p>
            <ul className="mt-10 border-t border-hairline">
              {modelPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 border-b border-hairline py-5 font-display text-xl font-normal"
                >
                  <Diamond />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const problems = [
  "Growing audit portfolios",
  "Recruitment challenges",
  "Busy-season pressure",
  "Partner and manager overload",
  "Difficulty finding experienced Audit Seniors",
  "Difficulty finding ACCA-qualified accountants",
];

export function ProblemSection() {
  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="text-muted-foreground">The real problem</Eyebrow>
            <h2 className="display-lg mt-8 max-w-[14ch]">Good Audit Seniors are hard to find.</h2>
            <p className="mt-10 max-w-md font-display text-2xl font-light italic text-foreground/70">
              There is another way to build capacity.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:pt-4">
          <Reveal delay={120}>
            <p className="eyebrow text-muted-foreground">Common capacity pressures include:</p>
            <ul className="mt-8 border-t border-hairline">
              {problems.map((problem) => (
                <li
                  key={problem}
                  className="group flex items-center gap-4 border-b border-hairline py-5 text-[1.05rem] transition-colors hover:text-accent"
                >
                  <Diamond />
                  <span className="font-display text-xl font-normal">{problem}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const promises = [
  "Your clients remain your clients.",
  "Your firm remains responsible for the client relationship.",
  "Your relationship stays with you.",
  "Calveris provides the professional capacity behind the scenes.",
];

export function DifferentiatorSection() {
  return (
    <section className="bg-ink py-28 text-ink-foreground lg:py-40">
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-ink-foreground/60">The promise that matters most</Eyebrow>
          <h2 className="display-lg mt-8 max-w-[18ch]">
            We don&apos;t replace your firm. We strengthen it.
          </h2>
          <p className="mt-8 max-w-2xl font-display text-2xl font-light italic text-ink-foreground/75 md:text-[2rem]">
            Your firm remains in control.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-16 grid border-t border-l border-hairline-light md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise}
                className="flex items-start gap-4 border-r border-b border-hairline-light p-8 transition-colors duration-500 hover:bg-ink-foreground/[0.04] lg:p-10"
              >
                <Diamond className="mt-3" />
                <p className="font-display text-xl font-normal leading-snug md:text-2xl">
                  {promise}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-ink-foreground/60">
            We&apos;re an extension of your team — not another firm competing for your clients.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const auditRoles = [
  {
    number: "01",
    title: "Audit Junior",
    copy: "Audit testing, working papers, documentation and fieldwork support.",
  },
  {
    number: "02",
    title: "Audit Semi-Senior",
    copy: "Audit sections, testing, working papers and delivery support.",
  },
  {
    number: "03",
    title: "Audit Senior",
    copy: "Leading audit sections, supervising juniors and supporting managers.",
  },
  {
    number: "04",
    title: "Audit Manager",
    copy: "Senior-level audit management, review and team support.",
  },
];

export function AuditTeamSection() {
  return (
    <section className="bg-forest py-28 text-forest-foreground lg:py-40">
      <div className="shell">
        <SectionHeading
          tone="light"
          eyebrow="Audit capacity"
          title={<>Add the audit experience your firm needs.</>}
          aside={
            <>
              Whether you need additional support during busy season or want to strengthen your team
              permanently, Calveris provides experienced audit professionals who work alongside your
              existing team.
            </>
          }
        />

        <Reveal delay={140}>
          <div className="mt-16 grid border-t border-l border-hairline-light md:grid-cols-2">
            {auditRoles.map((role) => (
              <article
                key={role.title}
                className="group relative overflow-hidden border-r border-b border-hairline-light p-8 transition-colors duration-500 hover:bg-forest-foreground/[0.05] lg:p-12"
              >
                <span className="pointer-events-none absolute right-6 top-2 font-display text-7xl font-light text-forest-foreground/10">
                  {role.number}
                </span>
                <p className="eyebrow text-forest-foreground/50">{role.number}</p>
                <h3 className="mt-6 font-display text-3xl font-normal">{role.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-foreground/65">
                  {role.copy}
                </p>
                <span className="mt-8 block text-accent transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14">
            <Cta to="/audit-team" variant="outline-light">
              Find Your Audit Professional
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const accountingServices = [
  "Accounts Preparation",
  "Bookkeeping",
  "Management Accounts",
  "Financial Reporting",
  "VAT Support",
  "ACCA-Qualified Accountants",
];

export function AccountingTeamSection() {
  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="Accounting capacity"
          title={<>More than audit capacity.</>}
          aside={
            <>
              Your firm&apos;s workload doesn&apos;t stop at audit. Calveris also provides
              ACCA-qualified and experienced accounting professionals to support your wider delivery
              team.
            </>
          }
        />

        <Reveal delay={140}>
          <ul className="mt-16 border-t border-hairline">
            {accountingServices.map((service, index) => (
              <li key={service}>
                <div className="group flex items-center gap-6 border-b border-hairline py-7 transition-colors duration-500 hover:bg-secondary/60">
                  <span className="eyebrow w-10 text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-display text-2xl font-normal transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {service}
                  </h3>
                  <span className="text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-14">
            <Cta to="/accounting-team">Explore Accounting Support</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    copy: "Role, seniority, software, workload and start date.",
  },
  {
    number: "02",
    title: "Meet your professional",
    copy: "We introduce professionals aligned with your firm's requirements.",
  },
  {
    number: "03",
    title: "Integrate with your team",
    copy: "They work within your existing systems and processes.",
  },
  {
    number: "04",
    title: "Scale when you need",
    copy: "Increase or adjust capacity as your workload changes.",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-hairline bg-secondary/40 py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-muted-foreground">How it works</Eyebrow>
          <h2 className="display-lg mt-8 max-w-[18ch]">From brief to embedded in four steps.</h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-16 grid border-t border-l border-hairline md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group border-r border-b border-hairline p-8 transition-colors duration-500 hover:bg-background lg:p-10"
              >
                <p className="font-display text-5xl font-light text-foreground/15 transition-colors duration-500 group-hover:text-accent/40">
                  {step.number}
                </p>
                <h3 className="mt-8 font-display text-2xl font-normal leading-snug">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const reasons = [
  {
    number: "01",
    title: "Recruitment Without the Wait",
    copy: "Access experienced professionals without waiting months to recruit.",
  },
  {
    number: "02",
    title: "Experienced Professionals",
    copy: "Junior, Semi-Senior, Senior, Manager and ACCA-qualified professionals.",
  },
  {
    number: "03",
    title: "Flexible Capacity",
    copy: "Build capacity around your actual workload.",
  },
  {
    number: "04",
    title: "Founder-Level Access",
    copy: "Direct access to Calveris founders and senior leadership.",
  },
];

export function WhySection() {
  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40">
      <div className="shell">
        <SectionHeading
          eyebrow="Why Calveris"
          title={<>Professional expertise, flexible capacity.</>}
          aside={
            <span className="block text-right">
              A trusted delivery partner for firms that need people — not another provider to
              manage.
            </span>
          }
        />

        <Reveal delay={140}>
          <div className="mt-16 grid border-t border-l border-hairline md:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group relative overflow-hidden border-r border-b border-hairline p-8 transition-colors duration-500 hover:bg-secondary/60 lg:p-12"
              >
                <span className="pointer-events-none absolute right-6 top-4 font-display text-7xl font-light text-foreground/[0.06]">
                  {reason.number}
                </span>
                <p className="eyebrow text-accent">{reason.number}</p>
                <h3 className="mt-6 font-display text-3xl font-normal">{reason.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {reason.copy}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const founders = [
  {
    name: "Helly Shah",
    role: "Co-Founder | ACCA",
    image: hellyImage,
    linkedin: "https://www.linkedin.com/in/ACoAAC0NpGYBviSaUcXr7MzJLKpn88bfc1qu2iU",
    bio: "Helly is an ACCA-qualified finance professional and entrepreneur with experience in accounting, financial management and supporting businesses across the UK, US and international markets. Having built and led accounting operations serving international clients, Helly brings a strong focus on accuracy, efficient processes and practical commercial insight.",
  },
  {
    name: "Sri Sivalingam",
    role: "Co-Founder | ACCA",
    image: sriImage,
    linkedin: "https://uk.linkedin.com/in/sri-sivalingam-acca-9b8399a8",
    bio: "Sri is an ACCA-qualified professional with a background in audit at one of the UK's top 10 accountancy firms and extensive experience supporting businesses with year-end accounts, financial reporting and commercial decision-making. Having also successfully run his own retail business for over six years while completing his ACCA, Sri brings both professional and real-world business experience.",
  },
];

export function FoundersSection() {
  return (
    <section className="border-b border-hairline bg-background py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-muted-foreground">The founders</Eyebrow>
          <h2 className="display-lg mt-8 max-w-[20ch]">Meet the people behind Calveris.</h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 140}>
              <article className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role}`}
                    width={912}
                    height={1104}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.025]"
                  />
                </div>
                <h3 className="mt-8 font-display text-3xl font-normal">{founder.name}</h3>
                <p className="eyebrow mt-3 text-accent">{founder.role}</p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow mt-8 inline-flex items-center gap-3 border border-foreground/25 px-6 py-3 tracking-[0.18em] transition-colors duration-500 hover:bg-ink hover:text-ink-foreground"
                >
                  LinkedIn
                  <span aria-hidden>↗</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderMessageSection() {
  return (
    <section className="bg-forest py-28 text-forest-foreground lg:py-40">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="text-forest-foreground/60">Founder message</Eyebrow>
            <h2 className="display-lg mt-8 max-w-[16ch]">
              Built by accountants who understand the pressure.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:pt-6">
          <Reveal delay={140}>
            <p className="font-display text-2xl font-light italic leading-snug text-forest-foreground/85 md:text-[1.9rem]">
              We know what it is like when the audit portfolio grows faster than the team.
            </p>
            <p className="mt-8 text-[0.98rem] leading-relaxed text-forest-foreground/65">
              Calveris was created to give UK accountancy firms access to experienced professionals
              without compromising control, quality or client relationships.
            </p>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-forest-foreground/65">
              We&apos;re not here to take your clients. We&apos;re here to help you serve more of
              them.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-ink py-28 text-ink-foreground lg:py-40">
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-ink-foreground/55">Next step</Eyebrow>
          <h2 className="display-xl mt-8 max-w-[14ch]">Need more capacity?</h2>
          <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-ink-foreground/70">
            Tell us the professional you need. We&apos;ll help you build the team.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Cta to="/contact" variant="solid-light">
              Build Your Team
            </Cta>
            <Cta to="/about" variant="outline-light">
              Speak to a Founder
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="bg-ink pb-24 pt-40 text-ink-foreground lg:pb-32 lg:pt-52">
      <div className="shell">
        <Reveal>
          <Eyebrow className="text-ink-foreground/60">{eyebrow}</Eyebrow>
          <h1 className="display-lg mt-8 max-w-[18ch]">{title}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink-foreground/70">
            {copy}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
