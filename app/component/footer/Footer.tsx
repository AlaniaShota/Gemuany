"use client";
import React from "react";
import { inc, titleGemuany } from "../constanta";
import { Lobster, Montserrat } from "next/font/google";
import LinkList from "./component/LinkList";

const lobster = Lobster({ weight: "400" });
const montserrat = Montserrat({ weight: "400" });

const Footer = () => {
  return (
    <div className="flex flex-col justify-around items-start w-4/5 mx-auto mt-20">
      <h1 className={`${lobster.className} text-redGemuany text-5xl`}>
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
