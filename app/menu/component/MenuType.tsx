"use client";

import imgBurgers from "@/public/menu/image 6.png";
import imgCombos from "@/public/menu/image 7.png";
import imgBeverages from "@/public/menu/image 8.png";
import imgDesserts from "@/public/menu/image 16.png";
import imgGreenLine from "@/public/menu/Line 2.svg";
import imgRedLine from "@/public/menu/Line 4.svg";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const menu = [
  { id: 1, name: "Burgers", img: imgBurgers, have: true },
  { id: 2, name: "Combos", img: imgCombos, have: false },
  { id: 3, name: "Beverages", img: imgBeverages, have: false },
  { id: 4, name: "Desserts", img: imgDesserts, have: false },
];

const montserrat = Montserrat({ weight: "400" });

const MenuType = () => {
  return (
    <div className="flex justify-center items-center w-4/5 mx-auto mt-20 gap-x-20">
      {menu.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className={`${item.have ? 'bg-white':'bg-darkBlue'} w-auto h-auto p-5  rounded-full flex items-center justify-center`}>
            <Image
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
            />
          </div>
          <h3 className={`${montserrat.className} text-whiteSecond`}>
            {item.name}
          </h3>
          <div>
            <Image src={item.have ? imgGreenLine : imgRedLine} alt="line" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuType;
