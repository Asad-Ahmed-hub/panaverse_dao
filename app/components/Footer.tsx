"use client";
import { courses } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Panaverselogo from "../../public/panaverselogo.webp";
import menulinks from "./metadata";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="grid grid-cols-1 md:grid-cols-1 lg:md:grid-cols-4 gap-10 py-12  content-center primary-bg text-white px-8 lg:px-20">
      <div>
        <Image
          src={Panaverselogo}
          width={170}
          height={170}
          alt="panaverse logo"
        />
        <p className="text-[20px] text-left lg:text-justify text-white mt-4">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers.</p>
      </div>
      <div>
        <h1 className="text-2xl heading-style text-white">Menu</h1>
        <ul className="text-xl space-y-2 mt-2 list-disc text-white">
          {courses.map((item, index) => (
            <Link href={item.href} title={item.href} key={item.id}>
              <li
                className={`${
                  item.basepath == pathname
                    ? "heading-color px-4 pt-1  cursor-pointer font-bold text-[20px]"
                    : "hover:heading-color px-4 pt-1  cursor-pointer text-[20px]"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="justify-self-start">
        <h1 className="text-2xl heading-style text-left text-white">
          Social Media
        </h1>
        <div className="flex flex-row justify-start gap-4  items-center mt-2">
          <Link
            href={"https://www.facebook.com/groups/panaverse"}
            title={"facebook"}
          >
            <BsFacebook size={40} className=" hover:text-[#1975f0]"/>
          </Link>
          <Link href={"https://github.com/panaverse"} title={"github"}>
          <SiGithub size={40}  className="hover:text-[#78228d]"/>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl heading-style text-white">Contact Us</h1>
        <div className="w-full">

          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4 w-full">
            <div>
            <FaPhoneAlt size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-whitetext-center  font-bold">
              <Link href="tel:+92-308-2220203">+92-308-2220203</Link> 
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <RiWhatsappFill size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-white text-center  font-bold">
              <Link href="https://wa.me/923082220203">+92-308-2220203</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-full space-x-2 pt-4">
            <div>
            <MdEmail size={30} color="#fff" />
            </div>
            <div>
              <p className="  text-[20px] text-white text-center  font-bold">
              <Link href="mailto:info@panaverse.co">info@panaverse.co</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
