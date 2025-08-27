"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Burger } from "../store/useStore";
import { transactionAnimate, visibleExit } from "../animation";
import Card from "./Card";
import { SetsType } from "../store/useSetsStore";
import { ReviewType } from "../store/useStoreReview";
import { useDisableAnimation } from "../useDisableAnimation";
import { useInView } from "react-intersection-observer";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

interface ListProps {
  burgers?: Burger[];
  sets?: SetsType[];
  review?: ReviewType[];
  title?: string;
  titlePosition?: string;
  menuPage?: boolean;
}

const List: React.FC<ListProps> = ({
  burgers,
  sets,
  review,
  titlePosition,
  title,
  menuPage,
}) => {
  const data = burgers || sets || review || [];
  const { ref } = useInView({ triggerOnce: true, threshold: 1 });
  const disableAnimation = useDisableAnimation()
  return (
    <div
      className={`flex justify-center ${titlePosition} lg:w-4/5 max-sm:w-11/12 mt-10 mx-auto flex-col`}
    >
      <AnimatePresence>
        <motion.h1
          ref={ref}
          variants={!disableAnimation ? visibleExit : undefined}
          initial={!disableAnimation ? "hidden" : false}
          animate={!disableAnimation ? "visible" : false}
          exit={!disableAnimation ? "exit" : undefined}
          transition={!disableAnimation ? transactionAnimate : undefined}
          className={`${montserrat.className} text-whiteSecond flex flex-col lg:text-4xl max-sm:text-2xl font-semibold`}
        >
          {title}
        </motion.h1>
          <Card burgerData={data} menuPage={menuPage} />
      </AnimatePresence>
    </div>
  );
};

export default List;
