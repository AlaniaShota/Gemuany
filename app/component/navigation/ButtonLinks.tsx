"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { exitVisit } from '@/app/animation'
import Link from 'next/link'
import Image from 'next/image'
import arrow from "@/public/ep_right.svg";

interface LinksProp{
    src?:string
    readMoreBtn:string
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
  )
}

export const ReadMore:React.FC<LinksProp> = ({src='/', readMoreBtn}) => {
    return(
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            duration: 0.1,
            delay: 0.1,
            stiffness: 300,
          }}
        >
          <Link
            href={src}
            className="flex items-start justify-start text-redGemuany border-b border-transparent hover:border-b-red-700"
          >
            {readMoreBtn}{" "}
            <Image
              layout="intrinsic"
              src={arrow}
              alt="arrow"
              width={18}
              className="pt-1 ml-3"
            />
          </Link>
        </motion.div>
    )
}
