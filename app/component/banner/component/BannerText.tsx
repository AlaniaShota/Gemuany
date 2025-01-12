import React from "react";
import { Lobster, Montserrat } from "next/font/google";
import { motion, Variants } from "framer-motion"; // Import Variants
import { Button } from "../../Button";
import { useInView } from "react-intersection-observer";
import { ReadMore } from "../../navigation/ButtonLinks";
import { readMoreBtn } from "@/app/about/component/constanta";

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
  animation,
  isAboutPage,
  isBlogPage,
  styleTextTitle,
  styleTextAbout,
  src,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={animation}
      custom={description.length}
      ref={ref}
      transition={{ type: "spring", duration: 0.4, delay: 0.1, stiffness: 300 }}
      className={`flex flex-col ${
        isAboutPage
          ? "justify-center items-center mt-40 z-40"
          : isBlogPage
          ? "justify-evenly w-1/2 h-full items-center text-center z-40"
          : "justify-around items-start w-full h-[393px]"
      }`}
    >
      <h1 className={`${lobster.className} ${styleTextTitle} `}>{title}</h1>
      <h2
        className={`${montserrat.className}  ${styleTextAbout} ${
          isAboutPage || isBlogPage ? "w-2/3 text-center" : "w-full"
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
