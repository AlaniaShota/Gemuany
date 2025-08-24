"use client"
import Image from 'next/image'
import appleImg from '@/public/Apple.svg'
import androidImg from '@/public/Playstore.svg'
import phone from '@/public/39426174_8730477 1.png'
import burger from '@/public/pngwing.com 1.png'
import { iphone, iphoneTitle, androidTitle, android, offerNumber, discount, downloadTitle, donwloadBtn } from './constanta'

const Offer = () => {
  return (
    <div className="bg-redGemuany lg:my-40 max-sm:my-32 flex lg:flex-row max-sm:flex-col-reverse justify-around items-center lg:h-36 max-sm:gap-6 max-sm:px-4 max-sm:py-6">
    <div className="flex lg:flex-row max-sm:flex-row-reverse lg:justify-center max-sm:justify-between lg:items-center max-sm:items-start gap-3 max-sm:w-full max-sm:gap-4">
      <div className="flex flex-row outline outline-offerBorder rounded-md bg-black p-1 max-sm:w-[45%]">
        <Image src={appleImg} alt="iphone" width={20} height={24} />
        <div className="flex flex-col justify-center items-start text-whiteSecond pl-2">
          <h4 className="text-[9px]">{iphoneTitle}</h4>
          <h4 className="text-sm">{iphone}</h4>
        </div>
      </div>
      <div className="flex flex-row outline outline-offerBorder rounded-md bg-black p-1 max-sm:w-[45%]">
        <Image src={androidImg} alt="android" width={20} height={24} />
        <div className="flex flex-col justify-center items-start text-whiteSecond pl-2">
          <h4 className="text-[9px]">{androidTitle}</h4>
          <h4 className="text-sm">{android}</h4>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-row justify-center items-center text-whiteSecond">
        <h2 className="text-5xl font-bold">{offerNumber}</h2>
        <h3 className="text-2xl pt-3 pl-2">{discount}</h3>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center text-whiteSecond">
        <h2 className="text-sm font-light">{downloadTitle}</h2>
        <button className="bg-buttonActive py-3 px-6 rounded-xl">
          <span>{donwloadBtn}</span>
        </button>
      </div>
    </div>
    <div className="flex justify-center items-center gap-4 max-sm:flex-col max-sm:w-full">
      <Image
        src={phone}
        alt="Phone"
        width={595}
        height={334}
        className="lg:block max-sm:hidden object-cover"
      />
      <Image
        src={burger}
        alt="Burger"
        width={476}
        height={251}
        className="object-cover"
      />
    </div>
  </div>
  
  )
}

export default Offer
