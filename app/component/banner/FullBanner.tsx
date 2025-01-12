"use client";

import { useInView } from "react-intersection-observer";
import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Lobster, Montserrat } from "next/font/google";
import { contactBtn } from "../constanta";
import { usePathname } from "next/navigation";
import { ReadMore } from "../navigation/ButtonLinks";

interface BannerProps {
  title: string;
  description: string;
  aboutBtn?: string;
  readMoreBtn?: string;
  img: string | StaticImageData;
  animation?: Variants;
  styleTextTitle?: string;
  styleTextAbout?: string;
  isAboutPage?: boolean;
  isMenuPage?: boolean;
  contactPageUrl?: string;
  menuPageUrl?: string;
  stylePosition?: string;
  contentAboutSectionPosition?: string;
  src?:string
}

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

const FullBanner: React.FC<BannerProps> = ({
  animation,
  title,
  description,
  stylePosition,
  contentAboutSectionPosition,
  img,
  src
}) => {
  const pathname = usePathname();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const isAboutPage = pathname === "/about";

  return (
    <div className={`relative inset-0 flex h-full w-4/5 my-40 mx-auto`}>
      {!isAboutPage && (
        <div
          className={`w-full h-full bg-black bg-opacity-50 relative rounded-xl`}
        >
          <Image
            src={img}
            alt="Banner Image"
            layout="intrinsic"
            className={`w-full h-full object-contain rounded-xl`}
          />
        </div>
      )}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="exit"
        variants={animation}
        ref={ref}
        transition={{
          type: "spring",
          duration: 0.4,
          delay: 0.1,
          stiffness: 300,
        }}
        className={`${
          stylePosition ? stylePosition : contentAboutSectionPosition
        } ml-10`}
      >
        <h2
          className={`text-4xl text-redGemuany ${lobster.className} text-5xl font-bold`}
        >
          {title}
        </h2>
        <p
          className={`mt-2 text-whiteSecond ${montserrat.className} text-2xl font-light`}
        >
          {description}
        </p>
        <ReadMore src={src} readMoreBtn={contactBtn}/>
      </motion.div>
      {isAboutPage  && (
        <div
          className={`w-full h-full bg-black bg-opacity-50 relative rounded-xl`}
        >
          <Image
            src={img}
            alt="Banner Image"
            layout="intrinsic"
            className={`w-full h-full object-contain rounded-xl`}
          />
        </div>
      )}
    </div>
  );
};

export default FullBanner;
