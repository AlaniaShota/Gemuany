import { ReviewType } from '@/app/store/useStoreReview'
import { reviewTitle } from './constanta'
import { Montserrat } from 'next/font/google'
import {motion} from 'framer-motion'
import Image from 'next/image'

interface ListProps{
    review:ReviewType[]
}

const montserrat = Montserrat({
    weight:'400'
})

const Review:React.FC<ListProps> = ({review}) => {
  return (
    <div className='flex flex-col justify-between items-start w-4/5 my-20 mx-auto cursor-default'>
      <h1 className={`${montserrat.className} text-whiteSecond text-4xl`}>{reviewTitle}</h1>
      <div className='flex flex-row gap-10 my-32'>
        {review.slice(0,3).map(item => (
        <motion.div
                 key={item.id}
                 className="w-[445px] h-auto p-8 bg-item rounded-xl relative flex justify-between flex-row items-center"
               
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <Image layout="intrinsic" src={item.img} alt="Testing" width={113} height={113} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-between items-start w-full">
            <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'spring', duration: 0.4, stiffness: 300 }}
            whileHover={{
              rotateY: 10,
              translateZ: 150,
              translateX: -1
            }}
            style={{ transformStyle: 'preserve-3d' }} 
            className="flex flex-col justify-start flex-wrap items-start mt-14">
              <h2 className="text-xl text-whiteSecond">{item.title}</h2>
              <p className="text-sm opacity-55 text-[#FAF3E0] my-2">{item.about}</p>
              <h2 className="text-xl text-whiteSecond">{item.name}</h2>
            </motion.div>
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Review
