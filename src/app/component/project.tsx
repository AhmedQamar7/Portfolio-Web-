"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";


const Project = () => {
  return (
    <div id="Project" className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="title-font sm:text-4xl text-5xl text-center mb-4 font-medium text-orange-500 font-def">
              My Projects
              <br />
              <br />
              <div className="text-gray-300 font-abc">
                <Typewriter
                  options={{
                    strings: ["TypeScript Projects", "JavaScript Projects", "Node.Js Projects", "HTML & CSS Projects"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h1>
          </div>


          {/* Box 1 */}

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="To-Do List"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/To-Do List.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    To-Do List
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    To-Do List is a simple application that can allows users to create,
                    edit and it also delete tasks.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/To-Do_List"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 2 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Calculator"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Calculator.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    Calculator
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    A Calculator project which includes basic arithmetic operations as well as more complex mathematical functions.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/Calculator"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 3 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Currency Converter"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Currency-Converter.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed line-clamp-3 text-gray-300 font-abc">
                    Currency Converter is a simple web application that converts the amount from one currency to another using exchange rates.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/Currency-converter"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 4 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="ATM"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/ATM.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    ATM
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    Virtual ATM simulation with realistic withdrawal amounts, transaction fees, and account balances.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/ATM-cli-Project"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 5 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="CountDown Timer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/CountDown-Timer.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    CountDown Timer
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    A countdown timer is a type of application that counts down from a given time until it reaches zero.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/CountDown"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 6 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="Word Counter"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Word-Counter.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    Word Counter
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    word counter app that counts the number of words, characters and lines in a given document or inputs
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/Word-counter"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 7 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="Inquirer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Inquirer.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    Inquirer
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    Inquirer is a command-line interface (CLI) that uses JavaScript, Python's Enquire library and Node.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/Inquirer"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 8 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="No. Guessing Game"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Guessing Game.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    No. Guessing Game
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    Guessing Game where the user has to guess a number between 1 and 10, but they don't know what it is.
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/Guessing-Game"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Box 9 */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 line-clamp-2">
              <div className="flex relative">
                <Image
                  alt="Amazon Clone Project"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/Assests/Amazon Clone.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-neutral-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-orange-500 mb-3 font-def">
                    Amazon Clone Project
                  </h1>
                  <p className="leading-relaxed text-gray-300 font-abc">
                    A Simple Amazon Clone Project using basic HTML & CSS. Dive into my virtual marketplace!
                  </p>
                  <Link
                    href={"https://github.com/AhmedQamar7/AmazonClone-Project"}
                    className="text-orange-500 inline-flex items-center mt-3 hover:underline font-def"
                    target="_blank"
                  >
                    <p>View Project Code</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
