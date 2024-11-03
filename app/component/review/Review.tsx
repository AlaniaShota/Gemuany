import { ReviewType } from '@/app/store/useStoreReview'
import { Montserrat } from 'next/font/google'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { SetsType } from '@/app/store/useSetsStore'

interface ListProps{
  data: SetsType[] | ReviewType[];
  title:string
  position:string
}

const montserrat = Montserrat({
    weight:'400'
})

function isReviewType(item: SetsType | ReviewType): item is ReviewType {
  return (item as ReviewType).name !== undefined;
}

const Review:React.FC<ListProps> = ({data, title, position}) => {
  return (
    <div className={`flex flex-col justify-between ${position} w-4/5 mt-40 mx-auto cursor-default`}>
      <h1 className={`${montserrat.className} text-whiteSecond text-4xl`}>{title}</h1>
      <div className='grid grid-cols-3 gap-x-20 mt-32'>
        {data.slice(0,3).map(item => (
        <motion.div
          key={item.id}
          className="w-auto h-auto p-8 bg-item rounded-xl relative flex justify-between flex-row items-center">
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
              {isReviewType(item) ? (
                  <h2 className="text-xl text-whiteSecond">{item.name}</h2>
                ):(
                  <h2 className='text-redGemuany'>{item.btn}</h2>
                )}
            </motion.div>
          </div>
        </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Review
