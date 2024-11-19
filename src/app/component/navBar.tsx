import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { SheetDemo } from "./menu";

const NavBar = () => {
  return (
    <div className="w-full h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50 border-black">
      <header className="text-black font-extrabold">
        <div className="container mx-auto flex flex-wrap p-3 flex-row justify-between items-center">
          <Link className="flex title-font font-bold items-center text-gray-500 hover:text-gray-300 md:mb-0 duration-300" href={"#Footer"}>
            <Image
              src={require("../../../public/Assests/navbar-logo.png")}
              alt="Muhammad Ahmed"
              width={100}
              height={100}
              className="w-[50px] rounded-full"
            />

            <span className="ml-3 text-lg font-abc">Muhammad Ahmed</span>
          </Link>

          <nav className="hidden md:ml-auto md:flex flex-row items-center justify-between text-base font-abc hover:font-extrabold text-gray-500 duration-300">
            <Link href={"/"} className="mr-5 hover:text-gray-300 duration-300">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-300 duration-300">
              About Me
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-gray-300 duration-300">
              Projects
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-300 duration-300">
              Skills
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-300 duration-300">
              Contact Us
            </Link>
          </nav>

          <Link href="/Assests/Resume.pdf" target="_blank">
            <button
              className="hidden lg:inline-flex items-center  border-0 py-1 px-3 focus:outline-none   rounded text-base mt-4 md:mt-0 font-abc font-bold duration-300 bg-gray-500 text-black hover:bg-gray-500 hover:text-gray-200">
              Download CV
              <FaDownload className="text-xl ml-2" />
            </button>
          </Link>
          <div className="text-2xl md:hidden">
            <SheetDemo />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
