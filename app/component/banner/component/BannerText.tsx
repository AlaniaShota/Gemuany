import React from 'react';
import { Lobster, Montserrat } from 'next/font/google';
import { motion, Variants } from 'framer-motion'; // Import Variants
import {Button} from '../../Button';
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
  isContactPage?:boolean
  styleTextTitle?:string,
  styleTextAbout?:string,
}

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
});

const BannerText: React.FC<BannerTextProps> = ({ 
  title, 
  description, 
  aboutBtn, 
  readMoreBtn, 
  animation, 
  isAboutPage,
  isContactPage, 
  styleTextTitle, 
  styleTextAbout, }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1,
  });

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
      {aboutBtn && (
        <Button widthStyle='w-1/2'>
          <span>{aboutBtn}</span>
        </Button> ) 
       }
        {isContactPage && (
        <motion.div  
           whileHover={{ scale: 1.1 }} 
           transition={{ type: 'spring', duration: 0.1, delay:0.1, stiffness: 300 }} >
          <Link href='/contact' className='flex items-start justify-start text-redGemuany border-b border-black hover:border-b-red-700'>
          {readMoreBtn} <Image  layout="intrinsic" src={arrow} alt='arrow' width={18} className='pt-1 ml-3'/>
          </Link> 
        </motion.div>
        )}
    </motion.div>
  );
};

export default BannerText;
