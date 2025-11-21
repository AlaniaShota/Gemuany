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

export const homeSections = [
  {
    type: "banner",
    props: {
      img: imageHomePage,
      title: titleGemuany,
      description: aboutGemuany,
      aboutBtn: aboutButton,
      styleTextTitle:
        "text-redGemuany lg:text-[96px] max-md:text-[89px] font-bold",
      styleTextAbout:
        "text-whiteSecond lg:text-[61px] max-sm:text-[43px] font-light",
      variant: "split",
    },
  },
  {
    type: "list",
    props: {
      key: "burgers",
      title: menuTitle,
      titlePosition: "items-center",
      dataKey: "burgers",
    },
  },
  {
    type: "menuBtn",
    props: {},
  },
  {
    type: "offer",
    props: {},
  },
  {
    type: "banner",
    props: {
      img: imageContactPage,
      title: contactTitle,
      description: contactDescription,
      readMoreBtn: contactBtn,
      styleTextTitle: "text-whiteSecond lg:text-5xl max-sm:text-xl font-bold",
      styleTextAbout:
        "text-whiteSecond lg:text-2xl max-sm:text-lg font-light opacity-55",
      src: "/contact",
      variant: "split",
    },
  },
  {
    type: "banner",
    props: {
      img: imageMenuPage,
      title: menuTitlePage,
      description: menuDescription,
      styleTextTitle: "text-whiteSecond lg:text-5xl max-sm:text-xl font-bold",
      styleTextAbout:
        "text-whiteSecond lg:text-2xl max-sm:text-lg font-light opacity-55",
      stylePosition:
        "absolute inset-0 flex flex-col lg:justify-around max-sm:justify-center  lg:w-2/6 max-sm:w-full lg:h-full max-sm:h-[241px]",
      src: "/menu",
      variant: "full",
    },
  },
  {
    type: "list",
    props: {
      key: "review",
      title: reviewTitle,
      titlePosition: "items-start",
      dataKey: "review",
    },
  },
  {
    type: "userReview",
    props: {},
  },
];
