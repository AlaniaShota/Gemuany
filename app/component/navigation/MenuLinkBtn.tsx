"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { exitVisit } from '@/app/animation'
import Link from 'next/link'

const MenuLinkBtn = () => {
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

export default MenuLinkBtn
