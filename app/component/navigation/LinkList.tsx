"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const links = [
  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Menu", link: "/menu" },
  { id: 3, title: "Blog", link: "/blog" },
  { id: 4, title: "Contact us", link: "/contact" },
];

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
      <div className="relative flex justify-end items-center md:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-whiteSecond p-4 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-redGemuany text-whiteSecond shadow-md"
          >
            {links.map((item) => {
              const isActive = pathname === item.link;

              return (
                <div key={item.id} className="w-full text-center">
                  <Link
                    href={item.link}
                    className={`block py-3 ${
                      isActive ? "bg-buttonActive" : "bg-redGemuany"
                    }`}
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    <motion.span
                      className={`${montserrat.className} text-base`}
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

      {/* Desktop Menu */}
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
                  isActive ? "bg-buttonActive" : "bg-redGemuany"
                }`}
              >
                <motion.span
                  className={`${montserrat.className} text-base`}
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
