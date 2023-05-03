"use client";
import React from "react";
import Image from "next/image";
import PanacloudLogo from "../../public/panacloudLogo.svg";
import SaylaniLogo from "../../public/saylaniLogo.png";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
  fadeIn,
} from "./utils/motion";
import { TitleText, TypingText } from "./CustomTexts";

const Sponsers = () => {
  return (
    <div
      className={`rounded-xl flex flex-col  justify-center items-center  flex-wrap  px-20 w-full pb-4 pt-4   `}
    >
      <motion.div
        variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full self-center"
      >
        <motion.p
          variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          className="heading-style text-center py-6"
        >
          Sponsers By
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col lg:flex-row w-full items-center justify-evenly py-4 gap-4"
      >
        <Image
          src={PanacloudLogo}
          width={100}
          height={100}
          alt="saylani Logo"
          className="w-40 h-1/5 self-center"
        />
        <Image
          src={SaylaniLogo}
          width={100}
          height={100}
          alt="saylani Logo"
          className="w-40 h-full self-center"
        />
      </motion.div>
    </div>
  );
};

export default Sponsers;
