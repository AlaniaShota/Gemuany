import { Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerImgProps {
    img: string | StaticImageData;
    animation?: Variants;
    
}

const BannerImg: React.FC<BannerImgProps> = ({ img }) => {
  return (
    <div className='w-full h-full bg-black bg-opacity-50 relative'>
      <Image
        src={img}
        alt='Germany'
        layout="responsive"
        className='w-full h-full object-contain'
      />
    </div>
  );
};

export default BannerImg;
