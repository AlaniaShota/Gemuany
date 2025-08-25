"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu";
import { Lobster } from "next/font/google";

export const links = [
  { id: 16, title: "Home", link: "/" },
  { id: 17, title: "About", link: "/about" },
  { id: 27, title: "Menu", link: "/menu" },
  { id: 37, title: "Blog", link: "/blog" },
  { id: 47, title: "Contact us", link: "/contact" },
];

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });
const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
  weight: "600",
});

const LinkList = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <div className="relative flex flex-col justify-end items-end md:hidden z-50 ">
        <UseAnimations
          animation={menu}
          onClick={toggleMenu}
          size={52}
          strokeColor="white"
          reverse={isOpen}
          speed={2}
        />
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative flex flex-col justify-center items-center w-full max-sm:px-10 h-screen bg-redGemuany text-whiteSecond shadow-md"
          >
            {links.map((item) => {
              const isActive = pathname === item.link;

              return (
                <div
                  key={item.id}
                  className="w-full text-center flex flex-col justify-center items-center"
                >
                <Link
                href={item.link}
                className={`inline-flex justify-center items-center rounded-xl w-full py-6 px-8 ${
                  isActive ? `${lobster.className} bg-buttonActive` : `${montserrat.className} bg-redGemuany`
                }`}
              
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    <motion.span
                      className={`text-2xl ${
                        isActive ? `${lobster.className} bg-buttonActive` : `${montserrat.className} bg-redGemuany`
                      }`}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: isActive ? 1 : 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.span>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>

      <div className="hidden md:flex justify-around w-full">
        {links.map((item) => {
          const isActive = pathname === item.link;

          return (
            <motion.div
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-row items-center justify-between text-whiteSecond"
            >
              <Link
                href={item.link}
                className={`inline-flex justify-center items-center rounded-xl py-3 px-8 ${
                  isActive ? `${lobster.className} bg-buttonActive` : `${montserrat.className} bg-redGemuany`
                }`}
              >
                <motion.span
                  className={`${
                  isActive ? `${lobster.className} bg-buttonActive`  : `${montserrat.className} bg-redGemuany`
                }`}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: isActive ? 1 : 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LinkList;
