"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import HeroFrontImage from "../../public/banner-men.png";
import HeroBackgroundImage from "../../../public/banner-background.png";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  staggerContainer,
  fadeIn,
} from "./utils/motion";

const HeroBanner = () => {
  const cities = useMemo(() => { return [
    { name: "Karachi" },
    { name: "Lahore" },
    { name: "Islamabad" },
    { name: "Peshawar" },
    { name: "Faislabad" },
  ]}, [])
  const [cityindex, setCityIndex] = useState(0);
  useEffect(() => {
    // Creating a timeout within the useEffect hook
    const cityslider = setInterval(() => {
      if (cityindex == cities.length - 1) {
        setCityIndex(0);
        return;
      }
      setCityIndex(cityindex + 1);
    }, 2000);

    return () => {
      clearInterval(cityslider);
    };
  }, [cities,cityindex]);
  return (
    <div className="relative w-full primary-bg flex flex-col items-center py-2 lg:py-10 px-4 lg:px-20">
      <div
        className={`lg:rounded-3xl flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center  flex-wrap hero-pattern px-4 py-6 bg-banner-background-image bg-no-repeat bg-center bg-cover w-full   relative  bg-black/20 drop-shadow-2xl `}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full lg:w-1/2   text-white self-center px-2"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            className="text-6xl xl:text-7xl 2xl:text-7xl font-semibold"
          >
            Panaverse
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", "spring", 2 * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            className="text-6xl xl:text-7xl 2xl:text-7xl  heading-color font-semibold "
          >
            Dao
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 3 * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            className="text-xl xl:text-2xl 2xl:text-3xl "
          >
            Certified Web 3.0 and Metaverse Developer A Nationwide Program in{" "}
            <motion.span
              variants={fadeIn("up", "spring", 4 * 0.5, 0.75)}
              whileInView="show"
              className="text-3xl xl:text-4xl 2xl:text-4xl  font-semibold heading-color"
            >
              {cities[cityindex].name}
            </motion.span>
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          initial="hidden"
          whileInView="show"
          className="w-full lg:w-1/2  self-center order-first md:order-first lg:order-last static z-20 "
        >
          <Image
            src={HeroFrontImage}
            width={1000}
            height={1000}
            alt="panaverse dao"
            className="w-full h-full  "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
