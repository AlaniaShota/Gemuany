"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Burger } from "../store/useStore";
import { exitVisit, visibleExit } from "../animation";
import Link from "next/link";
import Card from "./Card";
import { SetsType } from "../store/useSetsStore";
import { ReviewType } from "../store/useStoreReview";

const montserrat = Montserrat();

interface ListProps {
  burgers?: Burger[];
  sets?: SetsType[];
  review?: ReviewType[];
  title?: string;
  titlePosition?: string;
  menuPage?:string
}

const List: React.FC<ListProps> = ({
  burgers,
  sets,
  review,
  titlePosition,
  title,
  menuPage
}) => {
  const data = burgers || sets || review || [];
  return (
    <div
      className={`flex justify-center ${titlePosition} w-4/5 mt-40 mx-auto flex-col`}
    >
      <AnimatePresence>
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={visibleExit}
          transition={{
            type: "spring",
            duration: 0.4,
            delay: 0.1,
            stiffness: 300,
          }}
          className={`${montserrat.className} text-whiteSecond text-4xl font-semibold`}
        >
          {title}
        </motion.h1>
        <Card burgerData={data} />
        {/* {menuPage ? <>Hello</>:<motion.div
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
          </motion.div>} */}
        {!review && (
          <motion.div
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default List;
