import { CoursesType } from "@/DataType/DataType";
import React from "react";
import CourseCard from "./CourseCard";
import { TitleText } from "./CustomTexts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileSlider from "./Slider";
import TeamCard from "./TeamCard";
import { ourteam } from "@/data/data";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="primary-bg w-full py-8">
      <div className=" bg-team-bg bg-no-repeat bg-center bg-cover w-full">
        <TitleText
          title={"Our Team"}
          textStyles="text-center py-6 text-white"
        />
        <div
          className={` rounded-xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3   justify-center items-center  flex-wrap  px-8 lg:px-20 w-full py-8  gap-6 lg:gap-10 `}
        >
          {ourteam.map((item, index) => (
            <>
              <TeamCard
                position={item.position}
                name={item.name}
                profile_image={item.profile_image}
                id={item.id}
                social_profiles={item.social_profiles}
              />
            </>
          ))}
          {/* <ProfileSlider /> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
