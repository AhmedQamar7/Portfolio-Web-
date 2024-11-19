"use client"
import React from "react";
import Link from "next/link";

const Contact = () => {

  return (
    <div id="contact">
      <section className="text-black body-font relative font-abc">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.953211754543!2d67.1479743736693!3d24.865447545061244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b1c2b740abf%3A0xa95c4bb16f79bb6!2sSaima%20Luxury%20Homes!5e0!3m2!1sen!2s!4v1711881026535!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs font-abc">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-200">
                  Saima Luxury Homes, Shah-Faisal, Karachi.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs font-abc">
                  EMAIL
                </h2>
                <Link href={"muhammadahmedqamar07@gmail.com"} className="text-gray-200 leading-relaxed">
                  muhammadahmedqamar07@gmail.com
                </Link>
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs mt-4 font-abc">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-200">
                  +92 349-7009214
                </p>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-200 font-abc">
              <i>Contact Me</i>
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              Feel free to Contact
            </p>
            <form
              action="https://formspree.io/f/mdoqwpze"
              method="POST">

              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-100 font-abc">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-400 rounded border border-gray-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-abc"
                  required />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-100 font-abc"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-gray-400 rounded border border-gray-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-abc"
                  required />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-100 font-abc"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-400 rounded border border-gray-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-abc"
                  required />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-100 font-abc"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-400 rounded border border-gray-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-abc"
                  defaultValue={""}
                  required />
              </div>

              <button className="text-gray-100 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg font-abc hover:text-black duration-300">
                Submit
              </button>
              
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;      