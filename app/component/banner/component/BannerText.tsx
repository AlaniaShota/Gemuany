import React from "react";
import { Lobster, Montserrat } from "next/font/google";
import { motion, Variants } from "framer-motion"; // Import Variants
import { Button } from "../../Button";
import { useInView } from "react-intersection-observer";
import { ReadMore } from "../../navigation/ButtonLinks";
import { readMoreBtn } from "@/app/about/component/constanta";
import { useDisableAnimation } from "@/app/useDisableAnimation";
import { transactionAnimate, visibleExit } from "@/app/animation";

interface BannerTextProps {
  title: string;
  description: string;
  aboutBtn?: string;
  animation?: Variants;
  isAboutPage?: boolean;
  isContactPage?: boolean;
  isBlogPage?: boolean;
  styleTextTitle?: string;
  styleTextAbout?: string;
  src?: string;
}

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

const BannerText: React.FC<BannerTextProps> = ({
  title,
  description,
  aboutBtn,
isAboutPage,
  isBlogPage,
  styleTextTitle,
  styleTextAbout,
  src,
}) => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const disableAnimation = useDisableAnimation();
  return (
    <motion.div
      // initial="hidden"
      // animate={inView ? "visible" : "hidden"}
      // exit="exit"
      // variants={animation}
      // custom={description.length}
      ref={ref}
      // transition={{ type: "spring", duration: 0.4, delay: 0.1, stiffness: 300 }}
      variants={!disableAnimation ? visibleExit : undefined}
      initial={!disableAnimation ? "hidden" : false}
      animate={!disableAnimation ? "visible" : false}
      exit={!disableAnimation ? "exit" : undefined}
      transition={!disableAnimation ? transactionAnimate : undefined}
      className={`flex flex-col z-10 ${
        isAboutPage
          ? "justify-center items-center sm:mt-5 w-5/12 z-40"
          : "w-1/3 items-start justify-start text-start"
      }
      ${
        isBlogPage
          ? "justify-center gap-8 items-center w-1/2 max-sm:w-full lg:h-full sm:h-auto text-center z-40"
          : "justify-center max-sm:justify-center gap-0 max-sm:gap-20 max-lg:items-center max-sm:items-center w-full lg:h-[393px] max-sm:h-screen"
      }`}
      
    >
      <h1 className={`${lobster.className} ${styleTextTitle}`}>{title}</h1>
      <h2
        className={`${montserrat.className}  ${styleTextAbout} ${
          isAboutPage || isBlogPage  ? "w-2/3 text-center" : "w-full text-start max-sm:text-center"
        }`}
      >
        {description}
      </h2>
      {aboutBtn && (
        <Button widthStyle="w-1/2">
          <span>{aboutBtn}</span>
        </Button>
      )}
      {src && <ReadMore src={src} readMoreBtn={readMoreBtn} />}
    </motion.div>
  );
};

export default BannerText;
