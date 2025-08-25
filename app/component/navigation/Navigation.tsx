"use client";
import LinkList from "./LinkList";
import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const Navigation = () => {
  return (
    <header className="flex flex-row justify-around items-center max-sm:w-full md:w-4/5 max-sm:my-2 md:my-5 mx-auto z-50">
      <Link href="/" className="max-sm:hidden">
        <h1 className={`${lobster.className} text-redGemuany md:text-[64px] max-sm:text-3xl`}>
          Gemuany
        </h1>
      </Link>
      <LinkList />
      {/* <h1>
      Sing up
      </h1> */}
    </header>
  );
};

export default Navigation;
