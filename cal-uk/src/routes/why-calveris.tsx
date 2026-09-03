import { createFileRoute } from "@tanstack/react-router";

import {
  DifferentiatorSection,
  FinalCta,
  PageHero,
  ProblemSection,
  WhySection,
} from "@/components/site/sections";

export const Route = createFileRoute("/why-calveris")({
  head: () => ({
    meta: [
      { title: "Why Calveris | Professional Expertise, Flexible Capacity" },
      {
        name: "description",
        content:
          "Recruitment without the wait, experienced audit and ACCA-qualified professionals, flexible capacity and direct founder-level access.",
      },
      { property: "og:title", content: "Why Calveris | Professional Expertise, Flexible Capacity" },
      {
        property: "og:description",
        content:
          "We don't replace your firm. We strengthen it — your client, your relationship, your control, our people.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Why Calveris"
        title="Professional expertise, flexible capacity."
        copy="A trusted delivery partner for UK accountancy firms that need people — not another provider to manage."
      />
      <WhySection />
      <ProblemSection />
      <DifferentiatorSection />
      <FinalCta />
    </>
  ),
});
