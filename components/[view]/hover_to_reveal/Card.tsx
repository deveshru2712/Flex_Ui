import React from "react";

interface CardProps {
  id: number;
  question: string;
  description: string;
  answer: string;
}

const Card = ({ id, question, description, answer }: CardProps) => {
  return (
    <div className="h-[300px] w-full border rounded-3xl px-4 py-6 cursor-pointer group hover:bg-black group-hover:bg-black duration-500 transition-all">
      <div className="flex flex-col space-y-10 group-hover:hidden">
        <span className="flex items-start gap-0.5 font-geist text-xl font-semibold">
          {id}.<h2 className="text-wrap">{question}</h2>
        </span>
        <div className="w-full rounded-3xl bg-black/10 text-center px-4 py-2 font-medium">
          Problem
        </div>
        <div className="font-medium text-base">{description}</div>
      </div>
      <div className="group-hover:flex flex-col space-y-10 hidden ">
        <div className="w-full rounded-3xl bg-white/60 text-white text-center px-4 py-2 font-medium">
          Solution
        </div>
        <div className="font-medium text-base text-white">{answer}</div>
      </div>
    </div>
  );
};

export default Card;
