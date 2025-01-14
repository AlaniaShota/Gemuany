import { Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerImgProps {
  img: string | StaticImageData;
  animation?: Variants;
}

const BannerImg: React.FC<BannerImgProps> = ({ img }) => {
  return (
    <div className="w-full lg:h-full max-sm:h-[241px] bg-black bg-opacity-45 relative max-sm:rounded-none max-sm:overflow-hidden">
      <Image
        src={img}
        alt="Germany"
        layout="fill"
        className="object-cover max-sm:object-center"
      />
    </div>
  );
};

export default BannerImg;
