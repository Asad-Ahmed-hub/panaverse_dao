"use client";
import React from "react";

import CourseCard from "./CourseCard";
import { TitleText } from "./CustomTexts";
import YouTube, { YouTubeProps } from "react-youtube";
import VideoPanel from "./VideoPanel";

const Graduation = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const optsmobile: YouTubeProps["opts"] = {
    height: "250",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const optstablet: YouTubeProps["opts"] = {
    height: "350",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="py-8 w-full  ">
      <TitleText
        title={"Graduation Ceremony"}
        textStyles="text-center py-2 lg:py-6"
      />
      <div
        className={`rounded-xl flex flex-col lg:flex-row  justify-center items-center sm:gap-2 lg:gap-0 flex-wrap px-4  lg:px-20 w-full py-4  `}
      >
        <div className=" w-full  px-2">
          <YouTube
            videoId="m22yCipunto"
            opts={opts}
            onReady={onPlayerReady}
            className="w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Graduation;
