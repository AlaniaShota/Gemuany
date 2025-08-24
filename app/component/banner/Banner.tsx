"use client";

import BannerText from "./component/BannerText";
import BannerImg from "./component/BannerImg";
import { Variants } from "framer-motion";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { links } from "../navigation/LinkList";

interface BannerProps {
  title: string;
  description: string;
  aboutBtn?: string;
  img: string | StaticImageData;
  animation?: Variants;
  styleTextTitle?: string;
  styleTextAbout?: string;
  src?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  aboutBtn,
  img,
  animation,
  styleTextTitle,
  styleTextAbout,
  src,
}) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isBlogPage = pathname === "/blog";
  const isContactPage = links.some((item) => item.link === "/contact");

  const containerClass = isHomePage
    ? "relative lg:w-4/5 max-sm:w-full mx-auto grid lg:grid-cols-2 max-sm:grid-cols-1 lg:my-20 max-sm:my-5 h-[493px] max-sm:h-screen"
    : "relative w-full flex h-[600px] max-sm:h-screen";

  const textWrapperClass = isHomePage
    ? "lg:static max-sm:absolute inset-x-0  max-sm:bg-black/30 max-sm:h-screen top-0 flex justify-center items-start text-center max-sm:py-8 z-40"
    : "absolute inset-0 flex items-center justify-center text-center max-sm:relative max-sm:z-40";

  return (
    <div className={containerClass}>
      <div className={textWrapperClass}>
        <BannerText
          title={title}
          description={description}
          aboutBtn={aboutBtn}
          animation={animation}
          styleTextTitle={styleTextTitle}
          styleTextAbout={styleTextAbout}
          src={src}
          isAboutPage={isAboutPage}
          isBlogPage={isBlogPage}
          isContactPage={isContactPage}
        />
      </div>

      <BannerImg
        img={img}
        animation={animation}
        isHomePage={isHomePage}
      />
    </div>
  );
};

export default Banner;
