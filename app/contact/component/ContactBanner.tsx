"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import {
  location,
  addressTitle,
  addressDescription,
  workTimeTitle,
  workTimeMonday,
  workTimeSaturdaySunday,
  phoneTitle,
  phoneDescription,
  emailTitle,
  emailDescription,
  mediaTitle,
  mediaDescription,
  instagram,
  facebook,
} from "./constanta";
import { Montserrat } from "next/font/google";
import imgLocation from "@/public/image 18.png";
import { motionProps } from "@/app/animation";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
  weight: "700",
});

const leftData = [
  { id: 16, title: addressTitle, description: addressDescription },
  { id: 26, title: phoneTitle, description: phoneDescription },
  {
    id: 36,
    title: mediaTitle,
    description: mediaDescription,
    instagram,
    facebook,
  },
];

const rightData = [
  {
    id: 14,
    title: workTimeTitle,
    description: workTimeMonday,
    secondDescription: workTimeSaturdaySunday,
  },
  {
    id: 24,
    title: emailTitle,
    description: emailDescription,
  },
];

const LeftColumn = ({ data }: { data: typeof leftData }) => {
  return (
    <div className="w-1/2 max-sm:w-full h-full flex flex-col items-start">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${montserrat.className} flex flex-col gap-y-4 text-whiteSecond w-full`}
        >
          <h1 className="text-2xl max-sm:text-lg font-normal pt-6 max-sm:pt-3">
            {item.title}
          </h1>
          <p className="font-light max-sm:text-base pl-5 max-sm:pl-2">
            {isMobile ? item.description.slice(0, 30) : item.description}
          </p>
          {item.instagram && (
            <>
              <p className="font-light text-start pl-5 max-sm:pl-2">
                {item.instagram}
              </p>
              <p className="font-light text-start pl-5 max-sm:pl-2">
                {item.facebook}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const RightColumn = ({ data }: { data: typeof rightData }) => {
  return (
    <div className="w-1/2 max-sm:w-full flex flex-col items-start">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${montserrat.className} flex flex-col gap-y-4 text-whiteSecond w-auto`}
        >
          <h1 className="text-2xl max-sm:text-lg font-normal pt-6 max-sm:pt-3">
            {item.title}
          </h1>
          <p className="font-light max-sm:text-base pl-5 max-sm:pl-2">
            {item.description}
          </p>
          {item.secondDescription && (
            <p className="font-light text-start pl-5 max-sm:pl-2">
              {item.secondDescription}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const ContactBanner = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="relative flex h-full w-4/5 my-32 mx-auto max-sm:w-full max-sm:h-screen">
      <div className="w-full h-full max-sm:h-screen bg-black bg-opacity-50 relative rounded-xl max-sm:rounded-none">
        <Image
          src={imgLocation}
          alt="location"
          className="object-cover w-full max-sm:h-screen rounded-xl max-sm:rounded-none"
        />
      </div>
      <motion.div
        {...motionProps.visibleExit}
        ref={ref}
        className="absolute inset-0 flex flex-col justify-center items-center max-sm:items-start text-start p-4 max-sm:p-2"
      >
        <div className="flex flex-col items-center w-full">
          <div className="w-2/3 max-sm:w-full flex flex-col items-center">
            <h1
              className={`text-4xl text-whiteSecond ${montserrat.className} font-bold w-full text-center`}
            >
              {location}
            </h1>
            <div className="flex flex-row max-sm:flex-col justify-between w-full">
              <LeftColumn data={leftData} />
              <RightColumn data={rightData} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactBanner;
