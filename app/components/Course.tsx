import { courses } from "@/data/data";
import { CoursesType } from "@/DataType/DataType";
import Link from "next/link";
import React from "react";
import CourseCard from "./CourseCard";
import { TitleText } from "./CustomTexts";

const Course = () => {
  return (
    <div className="bg-fixed bg-design-bg bg-no-repeat bg-center bg-cover w-full py-8">
      <TitleText
        title={"Specialization"}
        textStyles="text-center py-6 text-white"
      />
      <div
        className={` rounded-xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   justify-center items-center   px-8 lg:px-20 w-full py-8 gap-6 lg:gap-10 `}
      >
        {courses.map((item, index) => (
          <>
            <CourseCard
              href={item.href}
              key={index}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Course;
