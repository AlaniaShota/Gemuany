"use client";

import { useEffect } from "react";
import List from "./component/List";
import Offer from "./component/Offer";
import MenuLinkBtn from "./component/navigation/MenuLinkBtn";
import UserReview from "./component/UserReview";
import useBurgerStore from "./store/useStore";
import useReviewStore from "./store/useStoreReview";
import { homeSections } from "./homeSections";
import Banner from "./component/banner/Banner";
import type { StaticImageData } from "next/image"; 

export default function Home() {
  const { burgers, fetchBurgers } = useBurgerStore();
  const { review, fetchReview } = useReviewStore();

  useEffect(() => {
    fetchBurgers("api/burgerData");
    fetchReview("/api/reviewData");
  }, [fetchBurgers, fetchReview]);

  return (
    <>
      {homeSections.map((section, index) => {
        switch (section.type) {
          case "banner": {
            const bannerProps = section.props as {
              img: string | StaticImageData;
              title: string;
              description: string;
              aboutBtn?: string;
              styleTextTitle: string;
              styleTextAbout: string;
              variant: "split" | "full";
              readMoreBtn?: string;
              src?: string;
              stylePosition?: string;
            };

            return (
              <Banner
                key={index}
                img={bannerProps.img}
                title={bannerProps.title}
                description={bannerProps.description}
                aboutBtn={bannerProps.aboutBtn}
                styleTextTitle={bannerProps.styleTextTitle}
                styleTextAbout={bannerProps.styleTextAbout}
                variant={bannerProps.variant}
                readMoreBtn={bannerProps.readMoreBtn}
                src={bannerProps.src}
                stylePosition={bannerProps.stylePosition}
              />
            );
          }
          case "list": {
            const listProps = section.props as {
              title: string;
              titlePosition: string;
              dataKey: string;
            };

            return (
              <List
                key={index}
                title={listProps.title}
                titlePosition={listProps.titlePosition}
                burgers={listProps.dataKey === "burgers" ? burgers : undefined}
                review={listProps.dataKey === "review" ? review : undefined}
              />
            );
          }
          case "menuBtn":
            return <MenuLinkBtn key={index} />;
          case "offer":
            return <Offer key={index} />;
          case "userReview":
            return <UserReview key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
}
