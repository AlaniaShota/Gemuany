"use client"

import { descriptionAboutPage, aboutTitle } from "./component/constanta";
import aboutImg from '@/public/freepik-export-20241012102932k36Z 1 (2).png'
import Banner from "@/app/component/banner/Banner";
import { animation } from "./component/animation";

export default function about(){
    console.log(descriptionAboutPage, aboutTitle, '----------------------')
    const styleTextTitle = 'text-redGemuany text-[96px]'
    const styleTextAbout = 'text-whiteSecond text-[61px]'

    return (
        <>
            <Banner title={aboutTitle} description={descriptionAboutPage} img={aboutImg} animation={animation} styleTextTitle={styleTextTitle} styleTextAbout={styleTextAbout}/>
        </>
    )
}