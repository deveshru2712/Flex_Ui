import React from "react";

export enum PricingTier {
  Starter = "Starter",
  Professional = "Professional",
  Enterprise = "Enterprise",
}

export interface CardProps {
  Tier: PricingTier;
  Pricing: string;
  CTA: string;
  BestSuitedFor: string;
  Features: string[];
}

const Card = ({ Tier, Pricing, BestSuitedFor, CTA, Features }: CardProps) => {
  return (
    <div className="h-[500px] w-[92%] shadow-xl rounded-3xl text-black bg-white">
      <div className="flex flex-col h-full w-full">
        {/* first section */}
        <div className="flex-1/4 px-6 py-4 flex flex-col rounded-3xl border shadow-[0px_18px_22px_2px_#00000024] shadow-3xl justify-between gap-1.5">
          <div
            className={`h-2/3 w-full ${
              Tier === PricingTier.Professional
                ? "bg-gradient-to-r from-[#efddf8] via-[#c1befc] to-[#b0cbf8]"
                : "bg-gray-200"
            } rounded-3xl`}
          >
            <div className="flex flex-col justify-between w-full h-full px-4 py-5">
              <span className="font-semibold text-base px-4 py-0.5 border bg-white w-fit rounded-xl">
                {Tier}
              </span>
              <div className="px-2 text-4xl font-medium">
                {Pricing}
                <span className="text-xl font-semibold">
                  {Pricing !== "Custom" && "/month"}
                </span>
              </div>
            </div>
          </div>
          <div className="font-semibold pl-4">{BestSuitedFor}</div>
          <button className="bg-gradient-to-b shadow-[1px_4px_10px_4px_#00000024] from-black/60 via-black/80 to-black/90 text-white font-medium cursor-pointer px-6 py-2.5 rounded-3xl hover:opacity-90 transition-opacity">
            {Pricing !== "Custom" ? "Start Hiring" : "Contact Us"}
          </button>
        </div>

        {/* second section */}
        <div className="flex-1 rounded-3xl px-6 mt-4 py-4">
          <ul className="space-y-2">
            {Features.map((feature, index) => (
              <li key={index} className="flex items-center group">
                <span className="mr-2 group-hover:text-green-500 font-semibold">
                  ✓
                </span>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
