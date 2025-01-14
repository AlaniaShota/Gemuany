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
  readMoreBtn?: string;
  img: string | StaticImageData;
  animation?: Variants;
  styleTextTitle?: string;
  styleTextAbout?: string;
  isAboutPage?: boolean;
  isContactPage?: boolean;
  isBlogPage?: boolean;
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
  const isAboutPage = pathname === "/about";
  const isBlogPage = pathname === "/blog";
  const isContactPage = links.some((item) => item.link === "/contact");

  return (
    <div
      className={`${
        isAboutPage || isBlogPage ? "mt-0" : "lg:my-20 max-sm:my-5"
      } relative ${
        isAboutPage || isBlogPage ? "w-full" : "lg:w-4/5 max-sm:w-full"
      } mx-auto grid grid-cols-2 max-sm:grid-cols-1 max-sm:h-[241px]`}
    >
      {isAboutPage || isBlogPage ? (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full max-sm:relative max-sm:z-40">
          <BannerText
            isAboutPage={isAboutPage}
            isBlogPage={isBlogPage}
            title={title}
            description={description}
            animation={animation}
            styleTextTitle={styleTextTitle}
            styleTextAbout={styleTextAbout}
            src={src}
          />
        </div>
      ) : (
        <BannerText
          title={title}
          description={description}
          aboutBtn={aboutBtn}
          animation={animation}
          styleTextTitle={styleTextTitle}
          styleTextAbout={styleTextAbout}
          isContactPage={isContactPage}
          src={src}
        />
      )}
      <BannerImg img={img} animation={animation} />
    </div>
  );
};

export default Banner;
