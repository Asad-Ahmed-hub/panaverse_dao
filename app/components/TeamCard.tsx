"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "./utils/motion";
import Link from "next/link";
import { Team } from "@/DataType/DataType";
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
const TeamCard = ({
  id,
  name,
  position,
  profile_image,
  social_profiles,
}: Team) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#27134E" }}
      variants={fadeIn("up", "spring", id * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className="group flex h-80 flex-col items-center justify-center w-full  p-6 rounded-xl hover:ring-2  hover:ring-white  drop-shadow-2xl  z-10 bg-white  text-[#130f25] hover:text-white"
    >
      <div className="group">
        <Image
          src={profile_image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full rounded-full border-4 border-[#27134E] group-hover:border-[#fff]"
        />
      </div>
      <div className="w-full py-2 group">
        <h1 className="card-heading-style text-center">{name}</h1>
        <p className=" text-center">{position}</p>
      </div>
      <div className="flex flex-row justify-center gap-4  items-center">
        {social_profiles.facebook && (
          <Link href={social_profiles.facebook} title={"facebook"}>
            <BsFacebook size={40} className=" group:hover:text-white"/>
          </Link>
        )}
        {social_profiles.linkedin && (
          <Link href={social_profiles.linkedin} title={"linkedin"}>
            <BsLinkedin size={40} className="rounded-full  group:hover:text-white"/>
          </Link>
        )}
        {social_profiles.github && (
          <Link href={social_profiles.github} title={"github"}>
            <SiGithub size={40}  className="group:hover:text-white"/>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;
