"use client"

import { Montserrat } from "next/font/google";
import { menuTitle } from "./component/constanta";
import Slider from "./component/Slider";
import MenuType from "./component/MenuType";
import List from "../component/List";
import useBurgerStore from "../store/useStore";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
  weight:'700'
});

export default function Menu() {
  const { burgers, fetchBurgers } = useBurgerStore();
  const pathname = usePathname();

  const isMenuPage = pathname === '/menu'
  
  useEffect(() => {
    fetchBurgers("api/burgerData");
  }, [fetchBurgers]);

  return (
    <>
      <div className="absolute top-80 z-20 w-full flex items-center justify-center ">
        <h1 className={`${montserrat.className} text-6xl max-sm:text-2xl text-whiteSecond bg-black p-6 rounded-3xl`}>{menuTitle}</h1>
      </div>
      <Slider />
      <MenuType />
      <List burgers={burgers} menuPage={isMenuPage}/>
    </>
  );
}
