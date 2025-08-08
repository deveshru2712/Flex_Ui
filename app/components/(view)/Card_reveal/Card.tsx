"use client";
import React from "react";
import { motion } from "motion/react";

interface CardProps {
  id: number;
  question: string;
  description: string;
  answer: string;
}

const Card = ({ id, question, description, answer }: CardProps) => {
  return (
    <div className="min-h-[300px] w-full cursor-pointer perspective-distant">
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full font-geist border rounded-3xl dark:bg-slate-100/10 transform-3d relative"
      >
        {/* front face */}
        <div className="px-6 py-4 backface-hidden flex absolute inset-0 flex-col space-y-10">
          <div className="text-base md:text-xl font-semibold flex items-start gap-0.5">
            {id}.<h2>{question}</h2>
          </div>
          <div className="w-full rounded-3xl bg-black/10 dark:bg-slate-200/50 text-center px-4 py-2 font-medium">
            Problem
          </div>
          <div className="text-sm md:text-base font-medium">{description}</div>
        </div>

        {/* back face */}
        <div className="backface-hidden dark:bg-slate-100/10 absolute border rounded-3xl py-4 px-6 inset-0 flex flex-col space-y-10 rotate-y-180">
          <div className="w-full rounded-3xl bg-black/10 dark:bg-slate-200/50 text-center px-4 py-2 font-medium">
            Solution
          </div>
          <div className="font-medium text-base">{answer}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
