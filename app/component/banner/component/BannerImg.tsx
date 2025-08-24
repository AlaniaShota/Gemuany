"use client";

import Image, { StaticImageData } from "next/image";
import { Variants, motion } from "framer-motion";

interface BannerImgProps {
  img: string | StaticImageData;
  animation?: Variants;
  isHomePage?: boolean;
}

const BannerImg: React.FC<BannerImgProps> = ({
  img,
  animation,
  isHomePage,
}) => {
  const imgWrapperClass = isHomePage
    ? "relative sm:absolute w-full flex justify-end items-center opacity-45 h-[393px] max-sm:h-screen" 
    : "relative w-full h-full flex justify-center items-center";

  const imgClass = isHomePage
    ? "object-cover w-full h-full max-w-md max-sm:max-w-full"
    : "object-cover w-full h-full";

  return (
    <motion.div
      className={imgWrapperClass}
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      <Image
        src={img}
        alt="Banner Image"
        className={imgClass}
        fill={!isHomePage }
        priority
      />
      {!isHomePage && (
        <div className="absolute inset-0 bg-black/30" /> 
      )}
    </motion.div>
  );
};

export default BannerImg;
