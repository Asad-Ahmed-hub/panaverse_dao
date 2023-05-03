"use client";
import Image from "next/image";
import React from "react";
import aboutBackgrounImage from "../../../public/aboutbackground.webp";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
  fadeIn,
} from "./utils/motion";
import { TitleText, TypingText } from "./CustomTexts";

const AboutSection = () => {
  return (
    <>
      <div
        className={` rounded-xl flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center  flex-wrap  px-8 lg:px-20 w-full py-2  lg:py-8   `}
      >
        <motion.div
          variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:w-1/2  static z-20 py-2 "
        >
          <Image
            src={"/aboutpanaverse.webp"}
            width={1000}
            height={1000}
            alt="panaverse dao"
            className="h-full w-full lg:max-w-2xl lg:mr-auto "
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full lg:w-1/2   text-white self-center mt-2"
        >
          <TitleText title={"About Panaverse"} textStyles="ml-2" />
          <motion.p
            variants={fadeIn("up", "spring", 2 * 0.5, 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="paragraph-text pt-2 w-full"
          >
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first three quarters are shared
            by all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development.{" "}
          </motion.p>
          {/* <motion.p
              variants={fadeIn('up', 'spring', 1 * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              className='link-text'>Read more  </motion.p> */}
        </motion.div>
      </div>
    </>
  );
};

export default AboutSection;
