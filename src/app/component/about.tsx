"use client";
import React from "react"
import Image from "next/image"


const About = () => {
  return (
    <div id="about" className="bg-black">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">

            {/* <div className="rounded-lg h-64 overflow-hidden">
            <Image
            alt="About Me"
            className="object-cover object-center h-full w-full"
            src="/images/me.jpg"
            width={1200}
            height={500}
            />
            </div> */}



            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">

                  <Image
                    src={require("../../../public/Assests/Ahmed.png")}
                    alt="Muhammad Ahmed"
                    width={100}
                    height={100}
                    layout="responsive"
                    className="w-[50px] rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center text-center justify-center ml-2 font-normal">
                  <h2 className="font-medium title-font mt-4 text-gray-200 text-lg font-abc">
                    Muhammad Ahmed
                  </h2>
                  <div className="w-12 h-0.5 bg-gray-200 rounded mt-2 mb-4" />
                  <div className="text-neutral-400">
                    <p className="text-base font-abc ">
                      Innovative Web Developer | Proficient in Next.js, React.js, Typescript, JavaScript, Node.js, Tailwind CSS | Looking forward to collaborate on Next.js Projects!
                    </p>
                  </div>
                  <br>
                  </br>
                </div>
              </div>

              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <br/>
                <div className="title-font sm:text-4xl text-5xl text-center mb-4 text-gray-200 font-abc font-bold">
                  <i>About Me</i>

                  <p className="leading-relaxed text-lg mb-2 mt-10 text-left text-neutral-400 font-abc font-normal">
                    As a web developer, I thrive on turning ideas into interactive digital experiences. I command HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js, React.js, and even dive into the realms of C and C++. Currently, I am pursuing Generative AI and Cloud Computing Engineering. When I am not coding, you all find me exploring the latest tech trends or lost in a good book. Lets connect and build something remarkable!

                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >

    </div >
  );
}

export default About

