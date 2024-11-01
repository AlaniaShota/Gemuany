import Image from 'next/image';
import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { Burger } from '../store/useStore';
import { itemVariants } from '../animation';

const montserrat = Montserrat({
  weight: '700',
});

interface ItemProps {
  burgers: Burger[];
}

const Item: React.FC<ItemProps> = ({ burgers }) => {
  return (
    <div
      className={`${montserrat.className} w-full h-full mt-44 mb-10 text-whiteSecond rounded-lg shadow-lg relative grid grid-cols-3 gap-y-40 gap-x-20`}
    >
      {burgers.slice(0, 3).map((item, index) => (
        <motion.div
          key={item.id}
          className="w-full p-6 bg-item rounded-lg relative flex justify-center flex-col items-center"
          variants={itemVariants[index]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{  type: 'spring', duration: 0.4, stiffness: 300 }}
        >
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
            <Image layout="intrinsic" src={item.img} alt="Testing" width={346} height={347} className="rounded-full" />
          </div>
          <div className="flex flex-col justify-between items-start w-full">
            <div className="flex flex-col justify-start flex-wrap items-start mt-14">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm opacity-55 text-[#FAF3E0] font-light my-2">{item.about}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-semibold">{item.price}</span>
              <div className="flex flex-row justify-between items-center w-1/3">
                <span className="rounded-3xl bg-priceUnic text-xs font-light py-1 px-2">{item.time}</span>
                <Image  layout="intrinsic" src={item.add_svg} alt={item.name} width={29} height={29} className="bg-green-500 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Item;
