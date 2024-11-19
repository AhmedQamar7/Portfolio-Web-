import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      <footer className="text-black body-font font-abc">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-700" href="https://www.linkedin.com/in/muhammad-ahmed-b9b135266/" target="_blank">
            <Image
              src={"/Assests/Logo.png"}
              alt="Muhammad Ahmed"
              width={100}
              height={100}
              className="w-[50px] rounded-full"
            />
            <span className="ml-3 text-xl text-black hover:text-gray-600">Muhammad Ahmed</span>
          </Link>
          <p className="text-sm text-black hover:font-medium sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad Ahmed —
            <Link
              href="https://www.linkedin.com/in/muhammad-ahmed-b9b135266/"
              className="text-gray-700 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Ahmed Qamar
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ml-3">
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/muhammad-ahmed-b9b135266/"
              }
              className="text-gray-700"
            >
              <FaLinkedin className="hover:text-[#0077B5] text-3xl duration-300" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/muhammad_ahmed_qamar/#"}
              className="text-gray-700"
            >
              <RiInstagramFill className="hover:text-[#ee2a7b] text-3xl duration-300" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/muhammad.ahmed.qamar.07"}
              className="text-gray-700"
            >
              <FaFacebook className="hover:text-[#316FF6] text-3xl duration-300" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/ahmedQamar7"}
              className="text-gray-700"
            >
              <FaGithub className="hover:text-[#2b3137] text-3xl duration-300" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;