'use client'

import Image from "next/image";
import imgOrder from '@/public/image 19.png'
import {motion} from 'framer-motion'
import { orderDescription, orderTitle, websiteTitle, websiteDescription, partnerTitle,
    wolt,
    glovo, paymentTitle,
    paymentDescription,
    paymentSecondDescription } from "./constanta";
import { Montserrat } from "next/font/google";


import { hover, motionProps } from "@/app/animation";
import { ReadMore } from "@/app/component/navigation/ButtonLinks";
import { readMoreBtn } from "@/app/about/component/constanta";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

interface BannerProps{
    src?:string
}

const OrderBanner:React.FC<BannerProps> = ({src}) => {
    return (
        <div className="relative flex h-full w-4/5 my-32 mx-auto max-sm:w-full max-sm:h-screen">
          <div className="w-full h-full max-sm:h-screen bg-black bg-opacity-50 relative rounded-xl">
            <Image
              src={imgOrder}
              alt="location"

              className="object-cover max-sm:h-screen w-full rounded-xl max-sm:rounded-none"
            />
          </div>
          <motion.div
               {...motionProps.visibleExit}
               whileHover={hover}
              //  style={{ transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 max-sm:text-center"
          >
            <div className={`${montserrat.className} w-2/3 max-sm:w-full  h-full flex flex-col justify-around items-center text-whiteSecond`}>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-5xl max-sm:text-xl font-bold">{orderTitle}</h1>
                    <p className="text-xl max-sm:text-base font-light">{orderDescription}</p>
                </div>
                <div className="w-full flex flex-row max-sm:flex-col justify-between items-center max-sm:items-start">
                    <div className="w-1/3 max-sm:w-full flex flex-col items-start max-sm:items-center">
                        <h2 className="text-xl max-sm:text-lg font-normal">{websiteTitle}</h2>
                        <p className="text-base font-light pl-5">{websiteDescription}</p>
                        <ReadMore src={src} readMoreBtn={readMoreBtn}/>
                    </div>
                    <div className="w-1/3 max-sm:w-full flex flex-col items-start max-sm:items-center">
                        <h2 className="text-xl max-sm:text-lg font-normal">{partnerTitle}</h2>
                        <p className="text-base font-light pl-5">{wolt}</p>
                        <p className="text-base font-light pl-5">{glovo}</p>
                        <ReadMore src={src} readMoreBtn={readMoreBtn}/>
                        
                    </div>
                </div>
                <div className="flex justify-center items-start flex-col">
                    <h2 className="text-xl max-sm:text-lg font-normal">{paymentTitle}</h2>
                    <p className="text-base font-light pl-5">{paymentDescription}</p>
                    <p className="text-base font-light pl-5">{paymentSecondDescription}</p>
                </div>
            </div>
          </motion.div>
        </div>
      );
}

export default OrderBanner
