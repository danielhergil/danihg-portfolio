import Link from "next/link";
import { Chivo_Mono } from "@next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const chivo_mono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo",
});

const navbar_links = [
  { link: "/", label: "Home" },
  { link: "/career", label: "Career" },
  { link: "/", label: "About" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-charcoal shadow-md">
      <div className="flex items-center m-7 md:ml-20 ml-12 bg-burnt-sienna">
        <span
          className={`font-bold text-3xl tracking-tight m-3 p-1 ${chivo_mono.variable} font-chivo text-charcoal`}
        >
          DHG
        </span>
      </div>
      <div className="hidden md:block flex-auto items-center m-0">
        <span
          className={`font-bold text-2xl tracking-tight m-3 ml-1 ${chivo_mono.variable} font-chivo text-maize-crayola`}
        >
          Daniel Hernández Gil
        </span>
      </div>
      <div className="hidden md:block relative items-center justify-items-end mr-36">
        <ul className="flex flex-row space-x-12">
          {navbar_links.map((nav, index) => (
            <li
              key={index}
              className={`font-bold text-lg tracking-tight m-3 ml-1 ${chivo_mono.variable} font-chivo text-maize-crayola hover:text-burnt-sienna`}
            >
              <Link href={nav.link}>{nav.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden relative items-center justify-items-end mr-8">
        {toggle ? (
          <XMarkIcon
            className="h-16 w-16 text-burnt-sienna"
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <Bars3Icon
            className="h-16 w-16 text-burnt-sienna"
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
        <div className={`${toggle ? "flex" : "hidden"} absolute mt-10 `}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li
              key={0}
              className={`animate-navbarMobile1 origin-top-center block font-bold text-lg tracking-tight m-3 ml-1 ${chivo_mono.variable} font-chivo text-maize-crayola`}
            >
              <Link href={navbar_links[0].link}>{navbar_links[0].label}</Link>
            </li>
            <li
              key={1}
              className={`animate-navbarMobile2 origin-top-center block font-bold text-lg tracking-tight m-3 ml-1 ${chivo_mono.variable} font-chivo text-maize-crayola`}
            >
              <Link href={navbar_links[1].link}>{navbar_links[1].label}</Link>
            </li>
            <li
              key={2}
              className={`animate-navbarMobile3 origin-top-center block font-bold text-lg tracking-tight m-3 ml-1 ${chivo_mono.variable} font-chivo text-maize-crayola`}
            >
              <Link href={navbar_links[2].link}>{navbar_links[2].label}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
