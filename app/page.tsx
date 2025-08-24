"use client";
import imageHomePage from "@/public/freepik-export-20241012102932k36Z 1.png";
import imageContactPage from "@/public/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (1) 1 (1).png";
import imageMenuPage from "@/public/photorealistic-man-with-burger-meal 1 (1).png";
import {
  titleGemuany,
  aboutGemuany,
  aboutButton,
  contactTitle,
  contactDescription,
  contactBtn,
  menuTitlePage,
  menuDescription,
  reviewTitle,
  menuTitle,
} from "./component/constanta";
import Banner from "./component/banner/Banner";
import { visibleExit } from "./animation";
import List from "./component/List";
import useBurgerStore from "./store/useStore";
import { useEffect } from "react";
import Offer from "./component/Offer";
import FullBanner from "./component/banner/FullBanner";
import useReviewStore from "./store/useStoreReview";
import UserReview from "./component/UserReview";
import MenuLinkBtn from "./component/navigation/MenuLinkBtn";

export default function Home() {
  const { burgers, fetchBurgers } = useBurgerStore();
  const { review, fetchReview } = useReviewStore();

  useEffect(() => {
    fetchBurgers("api/burgerData");
    fetchReview("/api/reviewData");
  }, [fetchBurgers, fetchReview]);

  const styleTextTitle = "text-redGemuany lg:text-[96px] max-md:text-[89px]";
  const styleTextAbout = "text-whiteSecond lg:text-[61px] max-sm:text-[46px]";
  const styleContactTitle = "text-whiteSecond lg:text-5xl max-sm:text-xl font-bold";
  const styleContactAbout = "text-whiteSecond lg:text-2xl max-sm:text-lg font-light opacity-45";
  const fullBannerPosition =
    "absolute inset-0 flex flex-col lg:justify-around max-sm:justify-center items-start lg:w-2/6 max-sm:w-full lg:h-full max-sm:h-[241px]";
  const stylePositionMenu = "items-center";
  const stylePositionReview = "items-start";
  const srcContact = '/contact'
  const srcMenu = '/menu'

  return (
    <>
      <Banner
        animation={visibleExit}
        img={imageHomePage}
        title={titleGemuany}
        description={aboutGemuany}
        aboutBtn={aboutButton}
        styleTextTitle={styleTextTitle}
        styleTextAbout={styleTextAbout}
      />
      <List
        burgers={burgers}
        title={menuTitle}
        titlePosition={stylePositionMenu}
      />
      <MenuLinkBtn/>
      <Offer />
      <Banner
        animation={visibleExit}
        img={imageContactPage}
        title={contactTitle}
        description={contactDescription}
        readMoreBtn={contactBtn}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
        src={srcContact}
      />
      <FullBanner
        animation={visibleExit}
        img={imageMenuPage}
        title={menuTitlePage}
        description={menuDescription}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
        stylePosition={fullBannerPosition}
        src={srcMenu}
      />
      <List
        review={review}
        title={reviewTitle}
        titlePosition={stylePositionReview}
      />
      <UserReview />
    </>
  );
}
