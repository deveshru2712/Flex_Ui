import React from "react";
import Card, { CardProps, PricingTier } from "./Card";

const PricingPage = () => {
  const pricingCards: CardProps[] = [
    {
      Tier: PricingTier.Starter,
      Pricing: "$0",
      BestSuitedFor: "Perfect For Small Teams",
      CTA: "Start Hiring",
      Features: ["3 Projects", "AI Applicant Screening", "AI Recruiter"],
    },
    {
      Tier: PricingTier.Professional,
      Pricing: "$99",
      BestSuitedFor: "Perfect For Growing Teams",
      CTA: "Start Hiring",
      Features: [
        "Unlimited Projects",
        "AI Applicant Screening",
        "AI Recruiter",
        "Risk-Free Guarantee",
      ],
    },
    {
      Tier: PricingTier.Enterprise,
      Pricing: "Custom",
      BestSuitedFor: "For Large Organizations",
      CTA: "Contact Us",
      Features: [
        "Unlimited Projects",
        "AI Applicant Screening",
        "Custom Skill Assessments",
        "Custom AI Recruiter",
      ],
    },
  ];

  return (
    <div className="font-geist min-h-screen w-full py-12 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pricing plans
          </h2>
          <span className="font-semibold text-gray-600">
            Choose the right plan for your needs.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingCards.map((card, idx) => (
            <Card key={`pricing-card-${idx}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
