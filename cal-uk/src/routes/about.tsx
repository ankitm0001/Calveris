import { createFileRoute } from "@tanstack/react-router";

import {
  FinalCta,
  FounderMessageSection,
  FoundersSection,
  ModelSection,
  PageHero,
} from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Founders of Calveris Limited" },
      {
        name: "description",
        content:
          "Calveris was founded by two ACCA-qualified professionals to give UK accountancy firms access to experienced audit and accounting capacity.",
      },
      { property: "og:title", content: "About Us | The Founders of Calveris Limited" },
      {
        property: "og:description",
        content: "Built by accountants who understand the pressure of a growing audit portfolio.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="About us"
        title="Meet the people behind Calveris."
        copy="Calveris Limited was founded by two ACCA-qualified professionals with audit, accounting and real business experience across the UK and international markets."
      />
      <FoundersSection />
      <ModelSection />
      <FounderMessageSection />
      <FinalCta />
    </>
  ),
});
