"use client";

import aboutSectionImg from "@/public/front-view-male-holding-tray-with-burger-fries 1.png";
import visionImg from "@/public/image 5.png";
import meetTeamImg from "@/public/image (14).png";
import {
  descriptionAboutPage,
  aboutTitle,
  aboutSectionTitle,
  aboutSectionDescription,
  readMoreBtn,
  visionTitle,
  visionDescription,
  setsTitle,
  meetTeamTitle,
  meetTeamDescription,
} from "./component/constanta";
import aboutImg from "@/public/freepik-export-20241012102932k36Z 1 (2).png";
import Banner from "@/app/component/banner/Banner";
import { animation } from "./component/animation";
import FullBanner from "../component/banner/FullBanner";
import { visibleExit } from "../animation";
import { useEffect } from "react";
import useSetsStore from "../store/useSetsStore";
import List from "../component/List";
import MenuLinkBtn from "../component/navigation/MenuLinkBtn";

export default function About() {
  const { sets, fetchSets } = useSetsStore();

  useEffect(() => {
    fetchSets("api/setsData");
  }, [fetchSets]);

  const styleTextTitle = "text-redGemuany text-[96px]";
  const styleTextAbout = "text-whiteSecond text-[61px]";
  const styleContactTitle = "text-whiteSecond text-5xl font-bold";
  const styleContactAbout = "text-whiteSecond text-2xl font-light opacity-45";
  const stylePositionMenu = "items-center";
  const fullBannerPosition =
    "absolute inset-0 flex flex-col justify-around items-start w-3/6 h-full z-50";
  const contentAboutSectionPosition =
    "flex flex-col justify-around items-start w-4/6";
  const src = '/menu'

  return (
    <>
      <Banner
        title={aboutTitle}
        description={descriptionAboutPage}
        img={aboutImg}
        animation={animation}
        styleTextTitle={styleTextTitle}
        styleTextAbout={styleTextAbout}
      />
      <FullBanner
        img={aboutSectionImg}
        title={aboutSectionTitle}
        description={aboutSectionDescription}
        animation={visibleExit}
        readMoreBtn={readMoreBtn}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
        contentAboutSectionPosition={contentAboutSectionPosition}
        src={src}
      />
      <List sets={sets} title={setsTitle} titlePosition={stylePositionMenu} />
      <MenuLinkBtn/>
      <FullBanner
        img={visionImg}
        title={visionTitle}
        description={visionDescription}
        animation={visibleExit}
        readMoreBtn={readMoreBtn}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
        contentAboutSectionPosition={contentAboutSectionPosition}
        stylePosition={fullBannerPosition}
        src={src}
      />
      <FullBanner
        img={meetTeamImg}
        title={meetTeamTitle}
        description={meetTeamDescription}
        animation={visibleExit}
        readMoreBtn={readMoreBtn}
        styleTextTitle={styleContactTitle}
        styleTextAbout={styleContactAbout}
        contentAboutSectionPosition={contentAboutSectionPosition}
        stylePosition={fullBannerPosition}
        src={src}
      />
    </>
  );
}
