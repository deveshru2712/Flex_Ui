"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface CardProps {
  id: number;
  question: string;
  description: string;
  answer: string;
}

const Card = ({ id, question, description, answer }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // checking if it is a mobile device
      const newIsMobile = window.innerWidth < 768 || "ontouchstart" in window;
      setIsMobile(newIsMobile);
      // Reset flip state when switching between mobile/desktop
      if (newIsMobile !== isMobile) {
        setIsFlipped(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, [isMobile]);

  const handleClick = () => {
    if (isMobile) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="h-full min-h-[300px] w-full cursor-pointer relative perspective-distant"
      onClick={handleClick}
    >
      <motion.div
        animate={isMobile ? { rotateY: isFlipped ? 180 : 0 } : { rotateY: 0 }}
        whileHover={!isMobile ? { rotateY: 180 } : {}}
        transition={{ duration: 0.5 }}
        className="border h-full w-full flex flex-col transform-3d absolute px-4 sm:px-6 py-4 backface-hidden rounded-2xl sm:rounded-3xl dark:bg-slate-300/10"
      >
        <div className="flex items-start md:text-lg text-2xl sm:text-xl gap-0.5 font-semibold font-geist mb-3 sm:mb-4 h-14 sm:h-16">
          <span className="flex-shrink-0">{id}.</span>
          <h1 className="leading-tight">{question}</h1>
        </div>

        <div className="w-full px-3 sm:px-4 py-1.5 bg-black/10 dark:bg-white/10 rounded-2xl sm:rounded-3xl mb-3 sm:mb-4 font-medium text-base">
          Problem
        </div>

        <div className="flex-grow mb-3 sm:mb-4">
          <p className="text-gray-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* back face */}
        <div className="border rounded-3xl absolute backface-hidden w-full h-full inset-0 rotate-y-180">
          <div className="flex flex-col px-6 py-4 space-y-5">
            <div className="dark:text-white font-medium bg-black/10 dark:bg-white/30 rounded-full px-4 py-1.5">
              Solution
            </div>
            <p className="text-xs sm:text-sm">{answer}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
