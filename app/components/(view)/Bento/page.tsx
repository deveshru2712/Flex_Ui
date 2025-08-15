import React from "react";
import FirstCard from "./Cards/FIrstCard";
import SeconCard from "./Cards/SeconCard";
import ThirdCard from "./Cards/ThirdCard";
import FourthCard from "./Cards/FourthCard";
import FifthCard from "./Cards/FifthCard";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-200 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto my-5 h-full grid grid-cols-2 gap-5">
        <FirstCard />
        <SeconCard />
        <ThirdCard />
        <FourthCard />
        <FifthCard />
      </div>
    </div>
  );
};

export default Page;
