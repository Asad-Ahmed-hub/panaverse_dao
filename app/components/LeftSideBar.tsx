"use client";
import { QuaterType } from "@/DataType/DataType";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LeftSideBar = ({
  quaters,
  handleindex,
  inumber,
  path,
}: {
  quaters: QuaterType[];
  handleindex: (i: number) => void;
  inumber: number;
  path: string;
}) => {
  return (
    <div className="w-full border-l-2 border-black/40 ">
      <ul className="w-full text-[18px] font-medium text-justify">
        {quaters?.map((item: QuaterType, index: number) => (
          <Link key={item.id} href={`${path}?quater=${item.id}`}>
            <li
              key={item.id}
              onClick={() => {
                handleindex(index);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`${
                index == inumber
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
  );
};

export default LeftSideBar;
