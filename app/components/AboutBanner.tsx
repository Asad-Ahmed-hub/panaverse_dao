import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center justify-start content-center bg-about-us-mobile-bg md:bg-about-us-tablet-bg lg:bg-about-us-bg bg-no-repeat bg-cover bg-right md:bg-right w-full ">
      <div className="px-10 py-10 md:py-44 lg:px-20  w-full lg:w-1/2">
        <h1 className=" text-[36px] md:text-[54px] font-extrabold text-white h-1/2 ">
          About Panaverse DAO
        </h1>
        <p className="  text-[14px] md:text-[17px] text-white text-justify pb-6">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technolgies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </p>
        <Link
          href="https://www.piaic.org/"
          title="PIAIC (Presidential Initiative
                for Artificial Intelligence & Computing)"
          target="_blank"
          className="bg-gradient-to-br from-[#ab192b] to-[#d8102f] px-3 lg:px-10 py-3 text-white text-[15px] font-extrabold  mt-2"
        >
          APPLY NOW
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AboutBanner;
