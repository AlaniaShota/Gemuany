"use client"
import Image from 'next/image'
import appleImg from '@/public/Apple.svg'
import androidImg from '@/public/Playstore.svg'
import phone from '@/public/39426174_8730477 1.png'
import burger from '@/public/pngwing.com 1.png'
import { iphone, iphoneTitle, androidTitle, android, offerNumber, discount, downloadTitle, donwloadBtn } from './constanta'

const Offer = () => {
  return (
    <div className='bg-redGemuany my-40 flex flex-row justify-around items-center h-36'>
      <div className='flex flex-col justify-center items-center gap-3 w-32'>
        <div className='flex flex-row outline outline-offerBorder rounded-md bg-black p-1 w-full'>
            <Image  layout="intrinsic" src={appleImg} alt='iphone' width={20} height={24}/>
        <div className='flex flex-col justify-center items-center text-whiteSecond pl-2'>
            <h4 className='text-[9px]'>{iphoneTitle}</h4>
            <h4 className='text-sm'>{iphone}</h4>
        </div>
        </div>
        
        <div className='flex flex-row outline outline-offerBorder rounded-md bg-black p-1 w-full'>
            <Image  layout="intrinsic" src={androidImg} alt='iphone' width={20} height={24}/>
        <div className='flex flex-col justify-center items-center text-whiteSecond pl-2'>
            <h4 className='text-[9px]'>{androidTitle}</h4>
            <h4 className='text-sm'>{android}</h4>
        </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <Image  layout="intrinsic" src={phone} alt='Phone' width={595} height={334}/>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center text-whiteSecond'>
                <h2 className='text-5xl font-bold'>{offerNumber}</h2>
                <h3 className='text-2xl pt-3 pl-2'>{discount}</h3>
            </div>
            <div className='flex flex-col justify-center gap-2 items-center text-whiteSecond'>
                <h2 className='text-sm font-light'>{downloadTitle}</h2>
                <button className='bg-buttonActive py-3 px-6 rounded-xl'>
                    <span>{donwloadBtn}</span>
                </button>
            </div>
        </div>
      </div>
      <div>
        <Image  layout="intrinsic" src={burger} alt='Burger' width={476} height={251} className='object-cover'/>
      </div>
    </div>
  )
}

export default Offer
