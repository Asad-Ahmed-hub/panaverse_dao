"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import React from "react";
import Panaverselogo from "../../public/panaverselogo.webp";
import Link from "next/link";
import { courses, menu } from "@/data/data";
import { usePathname, useSearchParams } from "next/navigation";
import useMenu from "../hooks/useMenu";
import { Menu } from "@/DataType/DataType";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, slideIn } from "@/app/components/utils/motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NavMenu = () => {
  //get url
  const pathname = usePathname();

  const [mobiletoogle, setMobileToogle] = useState<boolean>(false);
  const [desktoptoogle, setDesktopToogle] = useState<boolean>(false);
  const [mobilecourseToogle, setMobileCourseToogle] = useState<boolean>(false);

  // tab styles on onClick
  const desktop_toogle_style: string = desktoptoogle
    ? `hidden md:block`
    : "hidden";
  const mobile_course_toogle: string = mobilecourseToogle ? "" : "hidden";
  const course_tab_style: string = desktoptoogle ? `text-[#d8102f]` : "";

  //Desktop Menu Click Handling
  const handleNavigation = () => {
    setDesktopToogle(false);
    setMobileCourseToogle(false);
    setMobileToogle(false);
  };
  //Mobile Menu Toogle Handling
  const handleMobileNavigation = () => {
    setMobileToogle(!mobiletoogle);
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center content-center py-2 px-4 lg:px-20 sticky inset-x-0 top-0 z-30 primary-bg w-full shadow-xl">
        <div className="">
          <Link href={"/"} title="Panaverse Dao" onClick={handleNavigation}>
            <Image
              src={Panaverselogo}
              width={150}
              height={150}
              alt="panaverse logo"
              className="w-50 h-full lg:w-full  lg:h-20 xl:w-1/2 xl:h-1/2 2xl:w-1/2 2xl:h-1/2"
            />
          </Link>
        </div>
        <div className="hidden  md:block  flex-grow">
          <ul className="flex justify-center items-center  text-white text-lg ">
            {menu.map((item, index) => (
              <>
                {item.id != 2 ? (
                  <Link
                    href={item.url}
                    title={item.title}
                    key={item.id}
                    onClick={handleNavigation}
                  >
                    <li
                      key={item.id}
                      className={` hover:text-[#d8102f] lg:text-lg xl:text-lg 2xl:text-lg font-bold mx-1 ${
                        item.url === pathname ? "text-[#d8102f] p-3" : ""
                      }`}
                    >
                      {item.title}
                    </li>
                  </Link>
                ) : (
                  <li
                    key={item.id}
                    className={`cursor-pointer group hover:bg-gradient-to-br mx-1  p-3  hover:text-[#d8102f]  lg:text-lg xl:text-lg 2xl:text-lg font-bold ${course_tab_style} ${
                      pathname.includes("courses") ? " p-3 text-[#d8102f]" : ""
                    }`}
                    onClick={() => {
                      setDesktopToogle(!desktoptoogle);
                    }}
                  >
                    {item.title}
                    <ul
                      className={`w-[40%] absolute z-50 mt-6 m-auto bg-white text-black space-y-1  ml-[-23px] rounded-lg p-2 hidden ${desktop_toogle_style}`}
                    >
                      {courses.map((item, index) => (
                        <Link
                          href={item.href}
                          title={item.href}
                          key={item.id}
                          onClick={handleNavigation}
                        >
                          <li
                            key={item.id}
                            className={` hover:text-[#d8102f] px-4 py-2 lg:text-lg xl:text-lg 2xl:text-lg font-bold text-left hover:rounded-lg my-1 ${
                              item.basepath === pathname
                                ? " text-[#d8102f] "
                                : ""
                            }`}
                          >
                            {item.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="justify-end ml-auto">
          <Link
            href={"https://www.panaverse.co/"}
            onClick={handleNavigation}
            className="hidden md:block"
          >
            <button className="self-end md:self-center flex-shrink lg:flex-none  bg-gradient-to-br from-[#ab192b] to-[#d8102f] text-white px-6 py-3 rounded-full hover:bg-gradient-to-bl hover:from-white hover:to-white hover:text-[#d8102f] text-[15px] font-extrabold">
              SIGN UP
            </button>
          </Link>
          {!mobiletoogle ? (
            <GiHamburgerMenu
              color="#fff"
              size={30}
              onClick={handleMobileNavigation}
              className="block md:hidden"
            />
          ) : (
            <RxCross2
              color="#fff"
              size={30}
              onClick={handleMobileNavigation}
              className="block md:hidden font-bold"
            />
          )}
        </div>
      </div>
      <motion.nav
        animate={mobiletoogle ? "open" : "closed"}
        variants={variants}
        className={`md:hidden ${
          mobiletoogle
            ? "primary-bg h-screen w-[80%] fixed left-0 top-0 bg-white z-50 overflow-y-auto"
            : "hidden"
        } `}
      >
        <ul className="w-full flex flex-col justify-center items-start  text-white text-lg ">
          {menu.map((item, index) => (
            <>
              {item.id != 2 ? (
                <Link
                  href={item.url}
                  title={item.title}
                  key={item.id}
                  onClick={handleNavigation}
                >
                  <li
                    key={item.id}
                    className={`p-3 hover:rounded-lg  lg:text-lg xl:text-lg 2xl:text-lg font-bold mx-1 ${
                      item.url === pathname ? "text-[#d8102f]" : ""
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
              ) : (
                <li
                  key={item.id}
                  className={`cursor-pointer group hover:bg-gradient-to-br mx-1  p-3 hover:rounded-lg   lg:text-lg xl:text-lg 2xl:text-lg font-bold ${course_tab_style}`}
                  onClick={() => {
                    setMobileCourseToogle(!mobilecourseToogle);
                  }}
                >
                  <div className="flex flex-row space-x-1 justify-start">
                    <div
                      className={`${
                        pathname.includes("courses") ? "text-[#d8102f]" : ""
                      }`}
                    >
                      {item.title}
                    </div>{" "}
                    <div>
                      {mobilecourseToogle ? (
                        <FaAngleUp
                          color={`
              
              ${pathname.includes("courses") ? "#d8102f" : "#fff"}`}
                          size={20}
                          className="mt-1"
                        />
                      ) : (
                        <FaAngleDown
                          color={`${
                            pathname.includes("courses") ? "#d8102f" : "#fff"
                          }`}
                          size={20}
                          className="mt-1"
                        />
                      )}
                    </div>
                  </div>
                  <ul className={`${mobile_course_toogle}`}>
                    {courses.map((item, index) => (
                      <Link
                        href={item.href}
                        title={item.href}
                        key={item.id}
                        onClick={handleNavigation}
                      >
                        <li
                          key={item.id}
                          className={`px-4 py-2 lg:text-lg xl:text-lg 2xl:text-lg font-bold text-left  my-1 ${
                            item.basepath === pathname ? "text-[#d8102f]" : ""
                          }`}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </li>
              )}
            </>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default NavMenu;
