"use client";
import React from "react";
import { inc, titleGemuany } from "../constanta";
import { Lobster, Montserrat } from "next/font/google";
import LinkList from "./component/LinkList";

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });
const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
  weight: "400",
});

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-start lg:w-4/5 max-sm:w-11/12 mx-auto mt-20">
      <div className="w-full mb-4 border border-b-blackGray" />
      <h1 className={`${lobster.className} text-redGemuany text-start max-sm:text-center w-full text-5xl`}>
        {titleGemuany}
      </h1>
      <LinkList />
      <h2
        className={`${montserrat.className} text-whiteSecond text-center w-full my-10 cursor-default`}
      >
        {inc}
      </h2>
    </div>
  );
};

export default Footer;
