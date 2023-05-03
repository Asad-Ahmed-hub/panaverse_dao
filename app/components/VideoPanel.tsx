import Image from "next/image";
import React from "react";

const VideoPanel = () => {
  return (
    <div className="flex flex-row space-x-2">
      <div className="flex-shrink-0 overflow-hidden">
        <Image
          src={
            "https://i.ytimg.com/vi/m22yCipunto/hqdefault.jpg?s…RhMIEMoZTAP&rs=AOn4CLBzRP0publn3cWtAcAUQ0kCBJsCTQ"
          }
          width={110}
          height={50}
          alt="video number 1 "
          className="rounded-lg"
        />
      </div>
      <div className="flex-grow px-1">
        <h2 className="text-sm font-bold text-[#130f25] line-clamp-2 ">
          Hello World with JavaScript (Project-Based Programming By Hira Khan
          and Adil Altaf)
        </h2>
        <p className="text-sm text-gray-700">Panaverse DAO</p>
        <p className="text-sm text-gray-700">
          <span>475 views </span>
          <span className='before:content-["•"]'> 3 days ago</span>
        </p>
      </div>
    </div>
  );
};

export default VideoPanel;
