"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Burger } from "../store/useStore";
import { visibleExit } from "../animation";
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
  menuPage?:boolean
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
      className={`flex justify-center ${titlePosition} w-4/5 mt-10 mx-auto flex-col`}
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
        <Card burgerData={data} menuPage={menuPage}/>
      </AnimatePresence>
    </div>
  );
};

export default List;
