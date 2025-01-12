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
        <div className="relative flex h-full w-4/5 my-32 mx-auto">
          <div className="w-full h-full bg-black bg-opacity-50 relative rounded-xl">
            <Image
              src={imgOrder}
              alt="location"
              layout="intrinsic"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <motion.div
            transition={{
              type: "spring",
              duration: 0.4,
              delay: 0.1,
              stiffness: 300,
            }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          >
            <div className={`${montserrat.className} w-2/3  h-full flex flex-col justify-around items-center text-whiteSecond`}>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-5xl font-bold">{orderTitle}</h1>
                    <p className="text-xl font-light">{orderDescription}</p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-1/3 flex flex-col items-start">
                        <h2 className="text-xl font-normal">{websiteTitle}</h2>
                        <p className="text-base font-light pl-5">{websiteDescription}</p>
                        <ReadMore src={src} readMoreBtn={readMoreBtn}/>
                    </div>
                    <div className="w-1/3 flex flex-col items-start">
                        <h2 className="text-xl font-normal">{partnerTitle}</h2>
                        <p className="text-base font-light pl-5">{wolt}</p>
                        <p className="text-base font-light pl-5">{glovo}</p>
                        <ReadMore src={src} readMoreBtn={readMoreBtn}/>
                    </div>
                </div>
                <div className="flex justify-center items-start flex-col">
                    <h2 className="text-xl font-normal">{paymentTitle}</h2>
                    <p className="text-base font-light pl-5">{paymentDescription}</p>
                    <p className="text-base font-light pl-5">{paymentSecondDescription}</p>
                </div>
            </div>
          </motion.div>
        </div>
      );
}

export default OrderBanner
