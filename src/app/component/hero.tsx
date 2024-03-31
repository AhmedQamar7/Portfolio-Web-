"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container mx-auto flex px-7 py-20 pt-[35px] md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="ml-6 title-font sm:text-[60px] text-[70px] mb-4 text-orange-500 font-def font-bold">
            Hi, I am
            <br className="hidden lg:inline-block " />
            <Typewriter
              options={{
                strings: ["Muhammad Ahmed", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="ml-6 mb-8 mr-10 leading-relaxed text-white font-abc">
            A passionate Computer Science Student Programmer with a knack
            <br />
            for designing and developing websites.
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
              {/* <button className="ml-6 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg font-abc font-bold">
                Hire Me
              </button> */}
              <button
                className="px-6 z-20 py-2 ml-6 bg-orange-500 rounded-full text-black relative font-bold font-abc after:-z-20 after:absolute after:h-1 after:w-1 after:text-gray-200 after:bg-orange-600 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-full after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-500 transition-all duration-600 hover:[text-shadow:2px_2px_2px_616161] text-2xl after:font-extrabold"
              >
                Hire Me
              </button>

            </Link>
            <Link
              href={"https://www.linkedin.com/in/muhammad-ahmed-b9b135266/"}
              target="_blank"
            >
              {/* <button className="ml-2 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-gray-200 rounded-full text-lg font-abc font-bold">
                Lets Talk
              </button> */}
              <button
                className="px-6 z-20 py-2 ml-2 bg-gray-700 rounded-full text-white relative font-semibold font-abc after:-z-20 after:absolute after:h-1 after:w-1 after:text-black after:bg-gray-500 after:right-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-full after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-500 transition-all duration-600 hover:[text-shadow:2px_2px_2px_#FFBF00] text-2xl after:fomt-bold"
              >
                Lets Talk
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-8/10 mr-0">
          <Image
            className="object-cover object-center rounded mx-[18px] w-[35rem]"
            alt="Muhammad Ahmed"
            width={500}
            height={500}
            src={require("../../../public/Assests/finally.ahmed.png")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
