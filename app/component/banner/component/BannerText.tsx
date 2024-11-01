import React from 'react';
import { Lobster, Montserrat } from 'next/font/google';
import { motion, Variants } from 'framer-motion'; // Import Variants
import {Button, ReadMoreButton} from '../../Button';
import { useInView } from 'react-intersection-observer';
import arrow from '@/public/ep_right.svg'
import Image from 'next/image';
import Link from 'next/link';

interface BannerTextProps {
  title: string;
  description: string;
  aboutBtn?: string;
  readMoreBtn?:string
  animation: Variants; 
  isAboutPage?: boolean
  styleTextTitle?:string,
  styleTextAbout?:string,
  contactPageUrl?:string
  menuPageUrl?:string
}

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

const BannerText: React.FC<BannerTextProps> = ({ title, description, aboutBtn, readMoreBtn, animation, isAboutPage, styleTextTitle, styleTextAbout, menuPageUrl, contactPageUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1,
  });
  //URL have bags 
  const linkUrl = contactPageUrl ? contactPageUrl : menuPageUrl || '/';

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden' }
      exit="exit"
      variants={animation}
      ref={ref}
      transition={{ type: 'spring', duration: 0.4, delay:0.1, stiffness: 300 }}
      className={`flex flex-col ${isAboutPage ? 'justify-center items-center mt-40 bg-gray-50-red z-40':'justify-around items-start w-full h-[393px]'}`}
    >
      <h1 className={`${lobster.className} ${styleTextTitle} `}>{title}</h1>
      <h2 className={`${montserrat.className}  ${styleTextAbout} ${isAboutPage ? 'w-2/3 text-center':'w-full'}`}>{description}</h2>
      {aboutBtn &&(
        <Button>
          <span>{aboutBtn}</span>
        </Button> ) 
       }
       {linkUrl&&(
        <Link href={linkUrl} className='flex items-start justify-start text-redGemuany border-b border-black hover:border-b-red-700'>
        {readMoreBtn} <Image  layout="intrinsic" src={arrow} alt='arrow' width={18} className='pt-1 ml-3'/>
       </Link>)
       }
    </motion.div>
  );
};

export default BannerText;
