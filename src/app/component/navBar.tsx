import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const NavBar = () => {
  return(
    <div className="bg-orange-500 z-50 sticky top-0">
      <header className="text-black font-extrabold">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center text-black mb-4 md:mb-0">
            <Image
              src={require("../../../public/Assests/Logo.png")}
              alt="Muhammad Ahmed"
              width={100}
              height={100}
              className="w-[50px] rounded-full"
            />

            <span className="ml-3 text-xl font-def">Muhammad Ahmed</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base font-abc font-extrabold">
            <Link href={"/"} className="mr-5 hover:text-gray-200 font-extrabold">
              Home
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-gray-200">
              Projects
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-200">
              Skills
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-200">
              About Me
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-200">
              Contact Us
            </Link>
          </nav>

          <a href="/Assests/My-CV.pdf" target="_blank">
            <button 
            className="inline-flex items-center bg-orange-600 border-0 py-1 px-3 focus:outline-none text-gray-800 hover:bg-black hover:text-orange-500 rounded text-base mt-4 md:mt-0 font-abc font-bold">
              Download CV
              <FaDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
