import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-orange-500">
      <footer className="text-gray-600 body-font font-def">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-700">
            <Image
              src={require("../../../public/Assests/Logo.png")}
              alt="Muhammad Ahmed"
              width={100}
              height={100}
              className="w-[50px] rounded-full"
            />
            <span className="ml-3 text-xl text-black">Muhammad Ahmed</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad Ahmed —
            <a
              href="https://www.linkedin.com/in/muhammad-ahmed-b9b135266/"
              className="text-gray-700 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Ahmed Qamar
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ml-3">
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/muhammad-ahmed-b9b135266/"
              }
              className="text-black"
            >
              <FaLinkedin className="hover:text-[#0077B5] text-3xl" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/muhammad_ahmed_qamar/#"}
              className="text-black"
            >
              <RiInstagramFill className="hover:text-[#ee2a7b] text-3xl" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/muhammad.ahmed.qamar.07"}
              className="text-black"
            >
              <FaFacebook className="hover:text-[#316FF6] text-3xl" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/ahmedQamar7"}
              className="text-black"
            >
              <FaGithub className="hover:text-[#2b3137] text-3xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;