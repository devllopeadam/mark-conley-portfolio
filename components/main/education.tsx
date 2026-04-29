"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { EDUCATION } from "@/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
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
        <h1 className="Welcome-text text-[13px]">Education</h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-[30px] md:text-[40px] font-semibold text-white text-center mt-6"
      >
        Academic foundation,
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}aligned with software engineering.
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-gray-400 text-center max-w-2xl mt-4 mb-10"
      >
        Formal education supporting product development and technical problem solving.
      </motion.p>

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-xl"
      >
        {EDUCATION.map((item) => (
          <div
            key={`${item.school}-${item.duration}`}
            className="rounded-xl border border-[#7042f84a] bg-[rgba(10,10,30,0.35)] p-5 md:p-6"
          >
            <p className="text-base font-medium text-cyan-300">{item.duration}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="text-base text-purple-200">{item.school}</p>
            <p className="mt-2 text-base text-gray-400">{item.location}</p>
            <p className="mt-3 text-base leading-7 text-gray-300">
              Subject: {item.subject}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};