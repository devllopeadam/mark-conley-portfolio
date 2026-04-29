"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { EXPERIENCE } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center px-6 md:px-10 py-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Professional experience</h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-[30px] md:text-[40px] font-semibold text-white text-center mt-6"
      >
        Built for delivery,
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}shaped by real product work.
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-gray-400 text-center max-w-3xl mt-4 mb-12"
      >
        Product delivery experience focused on scalable web and mobile systems.
      </motion.p>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-4xl rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.45)] p-6 backdrop-blur-sm"
      >
        <div className="space-y-4">
          {EXPERIENCE.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="rounded-xl border border-[#7042f84a] bg-[rgba(10,10,30,0.35)] p-4 md:p-5"
            >
              <p className="text-sm text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-xl font-medium text-white">{item.role}</h3>
              <p className="text-sm text-purple-200">{item.company}</p>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};