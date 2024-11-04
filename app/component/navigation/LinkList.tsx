"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const links = [
  { id: 1, title: "About", link: "/about" },
  { id: 2, title: "Menu", link: "/menu" },
  { id: 3, title: "Blog", link: "/blog" },
  { id: 4, title: "Contact us", link: "/contact" },
];

const montserrat = Montserrat({
  weight: "600",
  // subsets: ['latin'],
});

const LinkList = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-around w-full">
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
  );
};

export default LinkList;
