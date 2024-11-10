import { Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerImgProps {
  img: string | StaticImageData;
  animation?: Variants;
}

const BannerImg: React.FC<BannerImgProps> = ({ img }) => {
  return (
    <div className="w-full h-full  bg-black bg-opacity-45 relative">
      <Image
        src={img}
        alt="Germany"
         layout="intrinsic"
        className="w-full h-full  bg-black bg-opacity-45 object-contain rounded-xl"
      />
    </div>
  );
};

export default BannerImg;
