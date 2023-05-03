"use client";
import LeftSideBar from "@/app/components/LeftSideBar";
import { courses, coursesquaters } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useCourse from "@/app/hooks/useCourse";
import { CourseSyllabus, QuaterType } from "@/DataType/DataType";
import Loading from "./loading";
import RichText from "@/app/components/RichText";
import Image from "next/image";
import { TitleText } from "@/app/components/CustomTexts";
import { motion, useScroll, useSpring } from "framer-motion";
import { fadeIn } from "@/app/components/utils/motion";

export async function generateStaticParams() {
  return courses.map((item) => ({
    props: item.basepath,
  }));
}

const Page = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const quaterparam = searchParams.get("quater");
  const [index, setIndex] = useState(
    !quaterparam || Number(quaterparam) > 5 ? 0 : Number(quaterparam) - 1
  );
  const {
    course,
    loading,
    error,
  }: { course: CourseSyllabus; loading: boolean; error: boolean } = useCourse(
    pathname,
    coursesquaters
  );

  const handleindex = (i: number) => {
    setIndex(i);
  };

  if (loading) return <Loading />;
  if (error) {
    return <div>Something Went Wrong</div>;
  }

  return (
    <>

      <div className="w-full">
        <Suspense fallback={<div>Loading</div>}>
          <div className="w-full grid grid-cols-1   justify-center items-center primary-bg  bg-no-repeat bg-cover py-28  px-4 lg:px-20">
            <TitleText
              title={!course.id ? null : course.title}
              textStyles="text-white"
            />
            <motion.p
              variants={fadeIn("up", "spring", 1 * 0.7, 0.75)}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
              className="paragraph-course-text text-white py-2"
            >
              {course.description}
            </motion.p>
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <div className="relative flex flex-col lg:flex-row  px-4 lg:px-20 ">
            <Suspense fallback={<div>Loading</div>}>
              <motion.aside
                variants={fadeIn("up", "spring", 1 * 0.9, 0.75)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="lg:h-screen lg:sticky lg:top-20  w-full lg:w-1/5 py-8 order-last lg:order-first"
              >
                <h1 className="text-xl font-bold">Program Structure</h1>
                <LeftSideBar
                  quaters={course.quaters}
                  handleindex={handleindex}
                  inumber={index}
                  path={pathname}
                />

                <h1 className="text-xl font-bold pt-2">Courses</h1>
                <div className="w-full border-l-2 border-black/40">
                  <ul className="w-full text-[18px] font-medium ">
                    {courses.map((item, index) => (
                      <Link href={item.href} title={item.href} key={item.id}>
                        <li
                          className={`${
                            item.basepath == pathname
                              ? "heading-color px-4 pt-1  cursor-pointer font-bold"
                              : "hover:heading-color px-4 pt-1  cursor-pointer"
                          }`}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </motion.aside>
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
              <motion.main
                variants={fadeIn("up", "spring", 1 * 0.9, 0.75)}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="col-span-3 flex-grow w-full lg:w-4/5 px-2 py-8 "
              >
                {!course.id ? null : (
                  <RichText quaters={course?.quaters} i={index} />
                )}
              </motion.main>
            </Suspense>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default Page;
