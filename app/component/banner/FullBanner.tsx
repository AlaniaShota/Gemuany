"use client";

import { useInView } from "react-intersection-observer";
import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Lobster, Montserrat } from "next/font/google";
import { contactBtn } from "../constanta";
// import { usePathname } from "next/navigation";
import { ReadMore } from "../navigation/ButtonLinks";
import Atropos from "atropos/react";
import "atropos/css";

interface BannerProps {
  title: string;
  description: string;
  aboutBtn?: string;
  readMoreBtn?: string;
  img: string | StaticImageData;
  animation?: Variants;
  stylePosition?: string;
  contentAboutSectionPosition?: string;
  src?: string;
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
  img,
  src,
}) => {
  // const pathname = usePathname();
  // const isAboutPage = pathname === "/about";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative inset-0 flex h-full lg:w-4/5 max-sm:w-11/12 lg:my-40 max-sm:my-20 mx-auto">
      <div className="relative w-full h-[630px] my-atropos rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="Banner Image"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
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
        className="absolute z-10 top-1/3  max-sm:left-5"
      >
        <Atropos
          activeOffset={5}
          rotateXMax={4}
          rotateYMax={4}
          shadow={true}
          shadowScale={0.1}
          rotateTouch="scroll-y"
          highlight={false}
          duration={300}
        >
          <h2
            data-atropos-offset="1"
            data-atropos-scale="5.5"
            className={`lg:text-4xl max-sm:text-xl text-redGemuany ${lobster.className} font-bold`}
          >
            {title}
          </h2>
          <p
            data-atropos-offset="-3"
            className={`mt-2 text-whiteSecond ${montserrat.className} text-2xl max-sm:text-lg font-light max-w-md`}
          >
            {description}
          </p>
        </Atropos>
        <div data-atropos-offset="2" data-atropos-scale="1.2" className="mt-5">
          <ReadMore src={src} readMoreBtn={contactBtn} />
        </div>{" "}
      </motion.div>
    </div>
  );
};

export default FullBanner;
