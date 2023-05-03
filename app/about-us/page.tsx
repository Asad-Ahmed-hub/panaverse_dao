import React from "react";
import AboutBanner from "../components/AboutBanner";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <AboutBanner />
      <div className="px-10 py-10 md:py-10 lg:px-20 w-full ">
        <h1 className=" text-[26px] text-[36px] leading-none font-extrabold text-[#130f25]  h-1/2 ">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <p className=" text-[14px] md:text-[17px] text-[#130f25] text-justify pt-3">
          <Link
            href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            title="This document on Google Docs"
            className="text-blue-600 font-bold text-[17px]"
          >
            This document on Google Docs
            <br />
          </Link>
          The internet is without a doubt the most important technological
          development in human history. Web3 and metaverse technologies expand
          the internet as we know it by introducing novel features and
          advancements. Metaverse will make use of all aspects of modern
          technology, including 3D, VR, AR, AI, blockchain, cloud computing,
          voice computing, ambient computing, and more. Citi is the latest Wall
          Street business to give a positive prognosis for Web 3.0 and the
          Metaverse, terms used to depict a future internet vision centred on
          decentralised technologies and virtual worlds. Citi stated in a March
          2022 research paper that the metaverse economy might have a total
          addressable market of up to $13 trillion and five billion people by
          2030.
        </p>
        <h1 className="pt-6 text-[26px] text-[36px] leading-none font-extrabold text-[#130f25]  h-1/2 ">
          The Program in a Nutshell: Earn While You Learn
        </h1>
        <p className=" text-[14px] md:text-[17px] text-[#130f25] text-justify pt-3">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program’s beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>
        <h1 className="pt-6 text-[26px] text-[36px] leading-none font-extrabold text-[#130f25]  h-1/2 ">
          Program of Studies
        </h1>
        <p className="text-[14px] md:text-[17px] text-[#130f25] text-justify pt-3">
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
          online Zoom laboratories and recorded videos.
        </p>
      </div>
    </div>
  );
};

export default page;
