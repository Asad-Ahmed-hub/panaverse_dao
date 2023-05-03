"use client";

import { motion } from "framer-motion";
import { fadeIn, textContainer, textVariant2 } from "./utils/motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles} w-full`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}></motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string | null;
  textStyles: string;
}) => (
  <motion.h2
    variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
    viewport={{ once: true }}
    initial="hidden"
    whileInView="show"
    className={` heading-style heading-color  ${textStyles} w-full`}
  >
    {title}
  </motion.h2>
);
