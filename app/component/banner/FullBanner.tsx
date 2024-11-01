"use client"

import { useInView } from 'react-intersection-observer';
import { Variants, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Lobster, Montserrat } from 'next/font/google';
import Link from 'next/link';
import arrow from '@/public/ep_right.svg'
import { contactBtn } from '../constanta';

interface BannerProps {
    title: string,
    description: string,
    aboutBtn?: string,
    readMoreBtn?:string,
    img: string | StaticImageData,
    animation: Variants,
    styleTextTitle?:string,
    styleTextAbout?:string,
    isAboutPage?: boolean,
    isMenuPage?:boolean
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

const FullBanner:React.FC<BannerProps> = ({isMenuPage, animation, title, styleTextTitle, styleTextAbout, description, img}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 1,
      });

  return (
    <div className={`relative inset-0 flex h-[583px] w-4/5 my-20 mx-auto`}>
        <div className={`w-full h-full bg-black bg-opacity-50 relative rounded-xl`}>
            <Image
                src={img}
                alt='Banner Image'
                layout="intrinsic"
                className={`w-full h-full object-cover rounded-xl`}
            />
        </div>
        <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden' }
            exit="exit"
            variants={animation}
            ref={ref}
            transition={{ type: 'spring', duration: 0.4, delay:0.1, stiffness: 300 }} 
            className="absolute inset-0 flex flex-col justify-around items-start w-2/6 h-full">
            <h2 className={`text-4xl text-redGemuany ${lobster.className} text-5xl font-bold`}>{title}</h2>
            <p className={`mt-2 text-whiteSecond ${montserrat.className} text-2xl font-light`}>{description}</p>
            <motion.div 
                whileHover={{ scale: 1.1 }} 
                transition={{ type: 'spring', duration: 0.1, delay:0.1, stiffness: 300 }} >
            <Link href='/menu' className='flex items-start justify-start text-redGemuany border-b border-black hover:border-b-red-700'>
                {contactBtn} <Image  layout="intrinsic" src={arrow} alt='arrow' width={18} className='pt-1 ml-3'/>
            </Link>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default FullBanner
