"use client";
import React from "react";
import { motion } from "framer-motion";
import { exitVisit } from "@/app/animation";
import Link from "next/link";

interface LinksProp {
  src?: string;
  readMoreBtn: string;
}

export const MenuLinkBtn = () => {
  return (
    <motion.div
      className="w-4/5 flex justify-center items-center mx-auto"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={exitVisit}
      transition={{
        type: "spring",
        duration: 0.4,
        delay: 2,
        stiffness: 300,
      }}
    >
      <Link
        href="/menu/"
        className="inline-flex justify-center items-center rounded-xl py-3 px-8 bg-redGemuany hover:bg-buttonActive ease-in-out duration-300"
      >
        <span className="text-whiteSecond">Menu</span>
      </Link>
    </motion.div>
  );
};

export const ReadMore: React.FC<LinksProp> = ({ src = "/", readMoreBtn }) => {
  return (
    <div >
      <button className="readMoreBtn">
        <Link href={src}>{readMoreBtn} </Link>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-icon"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
