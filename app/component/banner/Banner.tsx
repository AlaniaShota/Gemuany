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
  animation: Variants;
  styleTextTitle?: string;
  styleTextAbout?: string;
  isAboutPage?: boolean;
  isContactPage?: boolean;
  src?:string
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  aboutBtn,
  img,
  animation,
  styleTextTitle,
  styleTextAbout,
  src
}) => {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = links.some((item) => item.link === "/contact");

  return (
    <div
      className={`${
        isAboutPage ? "mt-0" : "my-20"
      } relative flex justify-between items-start w-4/5 mx-auto`}
    >
      {isAboutPage ? (
        <div className="absolute inset-0 flex items-start justify-center w-full h-full">
          <BannerText
            isAboutPage={isAboutPage}
            title={title}
            description={description}
            animation={animation}
            styleTextTitle={styleTextTitle}
            styleTextAbout={styleTextAbout}
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
