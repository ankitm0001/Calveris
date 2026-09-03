import { createFileRoute } from "@tanstack/react-router";

import {
  DifferentiatorSection,
  FinalCta,
  PageHero,
  ProcessSection,
} from "@/components/site/sections";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Building Capacity With Calveris" },
      {
        name: "description",
        content:
          "Four steps from brief to embedded: tell us what you need, meet your professional, integrate with your team and scale when your workload changes.",
      },
      { property: "og:title", content: "How It Works | Building Capacity With Calveris" },
      {
        property: "og:description",
        content:
          "A simple, founder-led process for adding audit and accounting capacity to your UK firm.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="How it works"
        title="From brief to embedded in four steps."
        copy="No lengthy onboarding, no layers of management. Tell us the role you need and we introduce professionals who integrate into your existing systems and processes."
      />
      <ProcessSection />
      <DifferentiatorSection />
      <FinalCta />
    </>
  ),
});
