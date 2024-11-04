"use client"
import {motion} from 'framer-motion'
import facebook from '@/public/Social media icons.svg'
import instagram from '@/public/Social media icons (1).svg'
import twitter from '@/public/Group.svg'
import youtube from '@/public/Social media icons (2).svg' 
import linkedIn from '@/public/Social media icons (3).svg'
import Link from 'next/link'
import Image from 'next/image'

const linkUrl = [ 
    { id: 1, title: 'About us', link: '/about' },
    { id: 2, title: 'Order', link: '/menu' },
    { id: 3, title: 'Our story', link: '/blog' },
    { id: 4, title: 'Contact us', link: '/contact' }
]

const linkDisable = [
    { id: 1, title: 'English' },
    { id: 2, title: 'Privacy' },
    { id: 3, title: 'Community' },
    { id: 4, title: 'Cookie preferences' },
] 

const linkIcon = [
    { id: 1, img: facebook, link: 'facebook.com'},
    { id: 2, img: instagram, link: 'instagram.com'},
    { id: 3, img: twitter, link: 'twitter.com'},
    { id: 4, img: youtube, link: 'youtube.com'},
    { id: 5, img: linkedIn, link: 'linkedin.com'}
]

const LinkList = () => {
  return (
    <div className='flex flex-col w-full my-10'>
        <div className='flex flex-row justify-between items-center w-full my-4'>
        <div className='flex flex-row items-start gap-4'>
            {linkUrl.map(item => (
            <div key={item.id} className='flex flex-row items-start gap-4'>
                <Link href={item.link}>
                    <motion.h3
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: 'spring', duration: 0.1, delay:0.1, stiffness: 300 }} 
                        className='border-b text-whiteSecond text-lg font-semibold'>
                            {item.title}
                        </motion.h3>
                </Link>
            </div>
            ))}
        </div>
        <div className='flex flex-row items-center gap-4'>
            {linkIcon.map(item => (
                <Link key={item.id} href={item.link} target='_blank' className='w-6 h-6'>
                <Image src={item.img} layout="intrinsic" alt='Link' className='object-cover w-full h-full'/>
                </Link>
            ))}
        </div>
        </div>
        <div  className='flex flex-row items-start gap-4'>
            {linkDisable.map(item => (
                <motion.h3
                key={item.id}
                whileHover={{ scale: 1.1 }} 
                transition={{ type: 'spring', duration: 0.1, delay:0.1, stiffness: 300 }} 
                className='border-b text-whiteSecond hover:opacity-75 cursor-wait'>
                    {item.title}
                </motion.h3>
            ))}
        </div>
    </div>
  )
}

export default LinkList
