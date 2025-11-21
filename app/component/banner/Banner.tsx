"use client";

import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import BannerImg from "./component/BannerImg";
import BannerText from "./component/BannerText";
import { BannerPageType, BannerVariant, layoutConfig } from "./bannerConfig";
import {
  animationUpDown,
  transactionAnimate,
  visibleExit,
} from "@/app/animation";
interface BannerProps {
  title: string;
  description: string;
  aboutBtn?: string;
  img: string | StaticImageData;
  animation?: Variants;
  styleTextTitle?: string;
  styleTextAbout?: string;
  src?: string;
  readMoreBtn?: string;
  stylePosition?: 'left' | 'right' | 'center' | string;
  variant?: BannerVariant; // "split" | "full"
  text?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  aboutBtn,
  img,
  animation,
  styleTextTitle,
  styleTextAbout,
  src,
  readMoreBtn,
  // textAlignClass,
  variant = "split",
}) => {
  const pathname = usePathname();

  let pageType: BannerPageType = "home";
  if (pathname === "/about") pageType = "about";
  else if (pathname === "/blog") pageType = "blog";
  else if (pathname === "/contact") pageType = "contact";

  const {
    containerClass,
    textWrapperClass,
    imageWrapperClass,
    imageClass,
    overlayClass,
    textAlignClass,
  } = layoutConfig[variant];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const animationVariant = pageType === "home" ? visibleExit : animationUpDown;
  return (
    <div className={containerClass}>
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="exit"
          variants={animationVariant}
          transition={transactionAnimate}
          className={textWrapperClass}
        >
          <BannerText
            title={title}
            description={description}
            aboutBtn={aboutBtn}
            pageType={pageType}
            styleTextTitle={styleTextTitle}
            styleTextAbout={styleTextAbout}
            src={src}
            readMoreBtn={readMoreBtn}
            text={textAlignClass}
          />
        </motion.div>
      </AnimatePresence>
      <BannerImg
        img={img}
        animation={animation}
        wrapperClassName={imageWrapperClass}
        imageClassName={imageClass}
        fill
        overlayClassName={overlayClass}
      />
    </div>
  );
};

export default Banner;
