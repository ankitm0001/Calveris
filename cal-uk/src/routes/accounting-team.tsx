import { createFileRoute } from "@tanstack/react-router";

import { AccountingTeamSection, FinalCta, PageHero, WhySection } from "@/components/site/sections";

export const Route = createFileRoute("/accounting-team")({
  head: () => ({
    meta: [
      { title: "Accounting Team | ACCA-Qualified Accounting Capacity | Calveris" },
      {
        name: "description",
        content:
          "Accounts preparation, bookkeeping, management accounts, financial reporting, VAT support and ACCA-qualified accountants for UK accountancy firms.",
      },
      {
        property: "og:title",
        content: "Accounting Team | ACCA-Qualified Accounting Capacity | Calveris",
      },
      {
        property: "og:description",
        content:
          "More than audit capacity — accounting professionals who support your firm's wider delivery team.",
      },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Accounting capacity"
        title="More than audit capacity."
        copy="Your firm's workload doesn't stop at audit. Calveris provides ACCA-qualified and experienced accounting professionals across accounts preparation, bookkeeping, management accounts, financial reporting and VAT support."
      />
      <AccountingTeamSection />
      <WhySection />
      <FinalCta />
    </>
  ),
});
