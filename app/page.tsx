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
          case "banner":
            return <Banner key={index} {...section.props} />;
          case "list":
            return (
              <List
                key={index}
                {...section.props}
                burgers={section.props.dataKey === "burgers" ? burgers : undefined}
                review={section.props.dataKey === "review" ? review : undefined}
              />
            );
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
