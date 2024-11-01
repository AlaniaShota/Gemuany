"use client"
import imageHomePage from '@/public/freepik-export-20241012102932k36Z 1.png'
import imageContactPage from '@/public/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (1) 1 (1).png'
import imageMenuPage from '@/public/photorealistic-man-with-burger-meal 1 (1).png'
import { titleGemuany, aboutGemuany, aboutButton, contactTitle, contactDescription, contactBtn, menuTitlePage, menuDescirption } from './component/constanta';
import Banner from './component/banner/Banner';
import { visibleExit } from './animation';
import List from './component/List';
import useBurgerStore from './store/useStore';
import { useEffect } from 'react';
import Offer from './component/Offer';
import FullBanner from './component/banner/FullBanner';
import useReviewStore from './store/useStoreReview';
import Review from './component/Review';

export default function Home() {
  const { burgers, fetchBurgers } = useBurgerStore()
  const {review, fetchReview} = useReviewStore()

  useEffect(() => {
    fetchBurgers('api/burgerData');
    fetchReview('/api/reviewData')
  }, [fetchBurgers, fetchReview])

  const styleTextTitle = 'text-redGemuany text-[96px]'
  const styleTextAbout = 'text-whiteSecond text-[61px]'
  const styleContactTitle = 'text-whiteSecond text-5xl font-bold'
  const styleContactAbout = 'text-whiteSecond text-2xl font-light opacity-45'

  return (
    <>
    <Banner 
      animation={visibleExit} 
      img={imageHomePage} 
      title={titleGemuany} 
      description={aboutGemuany} 
      aboutBtn={aboutButton} 
      styleTextTitle={styleTextTitle}
      styleTextAbout={styleTextAbout}/>
    <List burgers={burgers}/>
    <Offer/>
    <Banner
      animation={visibleExit}
      img={imageContactPage}
      title={contactTitle}
      description={contactDescription}
      readMoreBtn={contactBtn}
      styleTextTitle={styleContactTitle}
      styleTextAbout={styleContactAbout}
      />
      <FullBanner
      animation={visibleExit}
      img={imageMenuPage}
      title={menuTitlePage}
      description={menuDescirption}
      readMoreBtn={contactBtn}
      styleTextTitle={styleContactTitle}
      styleTextAbout={styleContactAbout}
      />
      <Review review={review}/>
    </>
  );
}
