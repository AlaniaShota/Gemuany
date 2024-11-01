import { Variants, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface BannerImgProps {
    img: string | StaticImageData;
    animation?: Variants;
    
}

const BannerImg: React.FC<BannerImgProps> = ({ img, animation }) => {
  return (
    <motion.div
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      // variants={animation}
      // transition={{ type: 'spring', duration: 0.4, stiffness: 300 }}
      className='w-full h-full bg-black bg-opacity-50 relative'
    >
      <Image
        
        src={img}
        alt='Germany'
        layout="responsive"
        className='w-full h-full object-contain'
      />
    </motion.div>
  );
};

export default BannerImg;
