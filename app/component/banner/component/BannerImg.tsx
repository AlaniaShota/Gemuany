"use client";

import Image, { StaticImageData } from "next/image";
import { Variants, motion } from "framer-motion";

interface BannerImgProps {
  img: string | StaticImageData;
  animation?: Variants;
  wrapperClassName?: string;
  imageClassName?: string;
  fill?: boolean;
  overlayClassName?: string; // если есть — рисуем overlay
}

const BannerImg: React.FC<BannerImgProps> = ({
  img,
  wrapperClassName = "relative w-full h-full flex justify-center items-center",
  imageClassName = "object-cover w-full h-full",
  fill = true,
  overlayClassName,
}) => {
  return (
    <motion.div
      className={wrapperClassName}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      // variants={visibleExit}
      // transition={{ ...{ type: "spring", duration: 0.4, stiffness: 300 } }}
    >
      <Image
        src={img}
        alt="Banner"
        className={imageClassName}
        {...(fill ? { fill: true } : { width: 100, height: 1080 })}
        priority
      />
      {overlayClassName ? <div className={overlayClassName} /> : null}
    </motion.div>
  );
};

export default BannerImg;
