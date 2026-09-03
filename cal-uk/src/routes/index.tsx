import { createFileRoute } from "@tanstack/react-router";

import {
  AccountingTeamSection,
  AuditTeamSection,
  DifferentiatorSection,
  FinalCta,
  FounderMessageSection,
  FoundersSection,
  Hero,
  ModelSection,
  ProblemSection,
  ProcessSection,
  StatementMarquee,
  WhySection,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calveris Limited | Your Audit Team, Extended" },
      {
        name: "description",
        content:
          "Calveris gives UK accountancy firms Audit Juniors, Semi-Seniors, Seniors, Managers and ACCA-qualified accounting professionals. Your client. Your control. Our people.",
      },
      { property: "og:title", content: "Calveris Limited | Your Audit Team, Extended" },
      {
        property: "og:description",
        content:
          "Experienced audit and accounting professionals helping UK accountancy firms increase capacity and meet deadlines.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatementMarquee />
      <ModelSection />
      <ProblemSection />
      <AuditTeamSection />
      <AccountingTeamSection />
      <DifferentiatorSection />
      <ProcessSection />
      <WhySection />
      <FoundersSection />
      <FounderMessageSection />
      <FinalCta />
    </>
  );
}
