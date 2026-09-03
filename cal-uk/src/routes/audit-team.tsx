import { createFileRoute } from "@tanstack/react-router";

import { AuditTeamSection, FinalCta, PageHero, ProcessSection } from "@/components/site/sections";

export const Route = createFileRoute("/audit-team")({
  head: () => ({
    meta: [
      { title: "Audit Team | Audit Juniors to Audit Managers | Calveris" },
      {
        name: "description",
        content:
          "Add Audit Juniors, Semi-Seniors, Seniors and Managers to your UK accountancy firm. Experienced audit capacity that works inside your existing team.",
      },
      { property: "og:title", content: "Audit Team | Audit Juniors to Audit Managers | Calveris" },
      {
        property: "og:description",
        content:
          "Experienced audit professionals for UK accountancy firms — from fieldwork support to senior-level review.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Audit capacity"
        title="Add the audit experience your firm needs."
        copy="From fieldwork and working papers to leading sections and reviewing files, Calveris provides audit professionals at every level — working within your firm, under your control."
      />
      <AuditTeamSection />
      <ProcessSection />
      <FinalCta />
    </>
  ),
});
