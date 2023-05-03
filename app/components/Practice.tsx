"use client";
import React from "react";
import { fadeIn } from "./utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText } from "./CustomTexts";
const Practice = () => {
  return (
    <div
      className={` rounded-xl flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center  flex-wrap  px-8 lg:px-20 w-full py-8 lg:py-12   `}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full lg:w-1/2   text-white self-center "
      >
        <TitleText title={"Program of Studies"} textStyles="ml-2" />
        <motion.p
          variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="paragraph-text pt-2"
        >
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialities and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a year-long hybrid programme that includes both onsite and
          online classes and is divided into four quarters of 13 weeks each. The
          emphasis will be on hands-on learning by educating students to produce
          projects. To accommodate everyone, courses will be held primarily on
          weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.{" "}
        </motion.p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full  lg:w-1/2  static z-20 order-first lg:order-last py-2"
      >
        <Image
          src={"/learn-by-doing.webp"}
          width={1000}
          height={1000}
          alt="panaverse dao"
          className="h-full w-full lg:max-w-2xl lg:ml-auto"
        />
      </motion.div>
    </div>
  );
};

export default Practice;
