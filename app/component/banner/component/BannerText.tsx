import React from "react";
import { Lobster, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { Button } from "../../Button";
import { ReadMore } from "../../navigation/ButtonLinks";
import { useInView } from "react-intersection-observer";
import { useDisableAnimation } from "@/app/useDisableAnimation";
import { transactionAnimate, visibleExit } from "@/app/animation";
import { BannerPageType, pageTextConfig } from "../bannerConfig";
import { readMoreBtn } from "@/app/about/component/constanta";

interface BannerTextProps {
  title: string;
  description: string;
  aboutBtn?: string;
  pageType: BannerPageType;
  styleTextTitle?: string;
  styleTextAbout?: string;
  src?: string;
  text?: string;
  readMoreBtn?: string; 
}

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });
const montserrat = Montserrat({ subsets: ["latin"], preload: false });

const BannerText: React.FC<BannerTextProps> = ({
  title,
  description,
  aboutBtn,
  pageType,
  styleTextTitle,
  styleTextAbout,
  src,
  text,
  // readMoreBtn,
}) => {
  const { ref } = useInView({ triggerOnce: true, threshold: 1 });
  const disableAnimation = useDisableAnimation();

  const textAlignClass = pageTextConfig[pageType];

  return (
    <motion.div
      ref={ref}
      variants={!disableAnimation ? visibleExit : undefined}
      initial={!disableAnimation ? "hidden" : false}
      animate={!disableAnimation ? "visible" : false}
      exit={!disableAnimation ? "exit" : undefined}
      transition={!disableAnimation ? transactionAnimate : undefined}
      className={`flex flex-col w-full justify-center  h-full gap-8 z-10`}
    >
      <Atropos
        activeOffset={5}
        rotateXMax={4}
        rotateYMax={4}
        shadow={false}
        rotateTouch="scroll-y"
        highlight={false}
        duration={300}
      >
        <h1
          data-atropos-offset="6"
          data-atropos-scale="3.5"
          className={`${lobster.className} px-20 ${styleTextTitle} ${text}`}
        >
          {title}
        </h1>
        <h2
          data-atropos-offset="3"
          data-atropos-scale="3.5"
          className={`${montserrat.className} px-20 my-10 ${styleTextAbout} ${text} ${textAlignClass}`}
        >
          {description}
        </h2>
      </Atropos>

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
