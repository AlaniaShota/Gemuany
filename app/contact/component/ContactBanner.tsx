"use client";
import imgLocation from "@/public/image 18.png";
import Image from "next/image";
import { motion } from "framer-motion";
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

const montserrat = Montserrat({
  weight: "700",
});

const leftData = [
  { id: 1, title: addressTitle, description: addressDescription },
  { id: 2, title: phoneTitle, description: phoneDescription },
  {
    id: 3,
    title: mediaTitle,
    description: mediaDescription,
    instagram: instagram,
    facebook: facebook,
  },
];

const rightData = [
  {
    id: 1,
    title: workTimeTitle,
    description: workTimeMonday,
    secondDescription: workTimeSaturdaySunday,
  },
  {
    id: 2,
    title: emailTitle,
    description: emailDescription,
  },
];

const ContactBanner = () => {
  return (
    <div className="relative flex h-full w-4/5 my-32 mx-auto">
      <div className="w-full h-full bg-black bg-opacity-50 relative rounded-xl">
        <Image
          src={imgLocation}
          alt="location"
          layout="intrinsic"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <motion.div
        transition={{
          type: "spring",
          duration: 0.4,
          delay: 0.1,
          stiffness: 300,
        }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
      >
        <div className="flex flex-col justify-between items-center w-full">
          <div className="w-2/3 h-full flex flex-col justify-around items-center">
            <h1
              className={`text-4xl text-whiteSecond ${montserrat.className} font-bold w-full text-center`}
            >
              {location}
            </h1>
            <div className="flex flex-row justify-between items-start w-full h-full">
              <div className="w-1/2 h-full flex justify-start items-center flex-col">
                {leftData.map((item) => (
                  <div 
                    key={item.id}
                    className={`${montserrat.className} flex flex-col justify-start list-disc gap-y-4  items-start text-whiteSecond w-full h-full`}
                  >
                    <h1 className="text-2xl font-normal text-start pt-6">
                      {item.title}
                    </h1>
                    <p className="font-light list-disc text-start pl-5">
                      {item.description}
                    </p>
                    {instagram && (
                      <>
                        <p className="font-light text-start pl-5">
                          {item.instagram}
                        </p>
                        <p className="font-light text-start pl-5">
                          {item.facebook}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex justify-end items-end flex-col h-auto">
                {rightData.map((item) => (
                  <div
                    key={item.id}
                    className={`${montserrat.className} flex flex-col justify-start items-start  gap-y-4  text-whiteSecond w-auto h-auto`}
                  >
                    <h1 className="text-2xl font-normal pt-6">{item.title}</h1>
                    <p className="font-light text-start pl-5">{item.description}</p>
                    {item.secondDescription && (
                      <p className="font-light text-start pl-5">{item.secondDescription}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactBanner;
