"use client";

import imgBurgers from "@/public/menu/image 6.png";
import imgCombos from "@/public/menu/image 7.png";
import imgBeverages from "@/public/menu/image 8.png";
import imgDesserts from "@/public/menu/image 16.png";
import imgGreenLine from "@/public/menu/Line 2.svg";
import imgRedLine from "@/public/menu/Line 4.svg";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Atropos from "atropos/react";
import "atropos/css";

const menu = [
  { id: 199, name: "Burgers", img: imgBurgers, have: true },
  { id: 299, name: "Combos", img: imgCombos, have: false },
  { id: 399, name: "Beverages", img: imgBeverages, have: false },
  { id: 499, name: "Desserts", img: imgDesserts, have: false },
];

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
  weight: "700",
});

const MenuType = () => {
  return (
    <div className="flex justify-center items-center w-4/5 mx-auto my-20 gap-x-20 max-sm:w-full max-sm:mx-0 flex-row flex-wrap gap-y-10">
      {menu.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center gap-4"
        >
          <Atropos
            activeOffset={5}
            rotateXMax={4}
            rotateYMax={4}
            shadow={false}
            rotateTouch="scroll-y"
            highlight={false}
            duration={300}
          >
            <div
              className={`${
                item.have ? "bg-whiteSecond" : "bg-darkBlue"
              } w-auto h-auto p-5 rounded-full flex items-center justify-center`}
            >
              <Image
                data-atropos-offset="6"
                data-atropos-scale="3.5"
                src={item.img}
                alt={item.name}
                className=" object-cover"
              />
            </div>

            <h3
              data-atropos-offset="6"
              data-atropos-scale="3.5"
              className={`${montserrat.className} my-3 text-center text-whiteSecond`}
            >
              {item.name}
            </h3>

            <>
              <Image
                className="object-cover w-full items-center flex justify-center"
                data-atropos-offset="6"
                data-atropos-scale="3.5"
                src={item.have ? imgGreenLine : imgRedLine}
                alt="line"
              />
            </>
          </Atropos>
        </div>
      ))}
    </div>
  );
};

export default MenuType;
