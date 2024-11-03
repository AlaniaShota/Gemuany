"use client"
import {AnimatePresence, motion} from 'framer-motion'
import { menuTitle } from './constanta'
import { Montserrat } from 'next/font/google';
import Item from './Item';
import { Burger } from '../store/useStore';
import { exitVisit, visibleExit } from '../animation';
import Link from 'next/link';

const montserrat = Montserrat();

interface ListProps {
    burgers: Burger[];
}

const List:React.FC<ListProps> = ({burgers}) => {
  return (
    <div className='flex justify-center items-center w-4/5 my-40 mx-auto flex-col'>
      <AnimatePresence>
      <motion.h1 
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={visibleExit}
         transition={{ type: 'spring', duration: 0.4, delay: 0.1, stiffness: 300 }}
       className={`${montserrat.className} text-whiteSecond text-4xl font-semibold`}>{menuTitle}</motion.h1>
        <Item burgers={burgers}/>
        <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={exitVisit}
            transition={{ type: 'spring', duration: 0.4, delay: 2, stiffness: 300 }}
        >
        <Link
            className='inline-flex justify-center items-center rounded-xl py-3 px-8 bg-redGemuany hover:bg-buttonActive ease-in-out duration-300'
            href='/menu/'>
            <span className='text-whiteSecond'>Menu</span>
        </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default List
