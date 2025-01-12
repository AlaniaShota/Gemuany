"use client";
import LinkList from "./LinkList";
import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const Navigation = () => {
  return (
    <header className="flex flex-row justify-around items-center w-4/5 my-5 mx-auto">
      <Link href="/">
        <h1 className={`${lobster.className} text-redGemuany text-[64px]`}>
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
