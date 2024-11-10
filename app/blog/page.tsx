"use client";

import blogImg from "@/public/image 20.png";
import receptImg from "@/public/image 21.png";
import cultureImg from "@/public/image 23.png";
import scenesImg from "@/public/image.png";
import singUpImg from "@/public/image 22.png";
import {
  blobDescription,
  blogTitle,
  sectionTitle,
  receptTitle,
  receptDescription,
  cultureTitle,
  cultureDescription,
  scenesTitle,
  scenesDescription,
  singUpTitle,
  singUpDescription,
} from "./component/constanta";
import Banner from "../component/banner/Banner";
import List from "../component/List";
import useSetsStore from "../store/useSetsStore";
import { useEffect } from "react";
import FullBanner from "../component/banner/FullBanner";
import { animationUpDown, visibleExit } from "../animation";

const bannerData = [
  {
    id: 1,
    title: receptTitle,
    description: receptDescription,
    img: receptImg,
  },
  {
    id: 2,
    title: cultureTitle,
    description: cultureDescription,
    img: cultureImg,
  },
  {
    id: 3,
    title: scenesTitle,
    description: scenesDescription,
    img: scenesImg,
  },
  {
    id: 4,
    title: singUpTitle,
    description: singUpDescription,
    img: singUpImg,
  },
];

export default function Blog() {
  const { sets, fetchSets } = useSetsStore();
  useEffect(() => {
    fetchSets("/api/setsData");
  }, [fetchSets]);

  const styleTextTitle = "text-whiteSecond text-5xl";
  const styleTextAbout = "text-whiteSecond text-2xl font-light";
  const titlePosition = "items-center";
  const fullBannerPosition =
    "absolute inset-0 flex flex-col justify-around items-start w-2/6 h-full";
  const src = "/about";

  return (
    <>
      <Banner
        animation={animationUpDown}
        img={blogImg}
        title={blogTitle}
        description={blobDescription}
        styleTextTitle={styleTextTitle}
        styleTextAbout={styleTextAbout}
        src={src}
      />
      <List sets={sets} title={sectionTitle} titlePosition={titlePosition} />
      {bannerData.map((item) => (
        <FullBanner
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          stylePosition={fullBannerPosition}
          animation={visibleExit}
        />
      ))}
    </>
  );
}
