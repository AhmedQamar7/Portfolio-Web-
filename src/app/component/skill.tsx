import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skill = () => {
    return (
        <div id="skills" className="bg-black">
            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-5xl font-medium title-font text-gray-200 font-abc">
                            <i>My Skills</i>
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4 -mt-[5rem]">
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 text-lg title-font font-medium font-abc">
                                        HTML
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[95%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">95%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 text-lg title-font font-medium font-abc">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[90%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 text-lg title-font font-medium font-abc">
                                        JavaScript/TypeScript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[75%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">75%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 text-lg title-font font-medium font-abc">
                                        NEXT JS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[80%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">80%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 text-lg title-font font-medium font-abc">
                                        Tailwind CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[90%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">90%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white text-gray-500 flex-shrink-0 font-bold">
                                        <FaCheckCircle className="text-xl font-bold" />
                                    </div>
                                    <h2 className="text-gray-200 font-bold text-lg title-font font-abc">
                                        C/C++
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative h-1 w-full bg-white rounded-xl">
                                        <div className="absolute bg-gray-500 h-1 rounded-xl w-[70%]"></div>
                                    </div>
                                    <p className="font-bold text-gray-200 text-right font-abc">70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;

