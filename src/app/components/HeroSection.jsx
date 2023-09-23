"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">

                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span>
                        Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Alvis",
                                1000,
                                "Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>

                    <p className="text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptatum.
                    </p>
                    
                    {/* link button starts */}
                    <div>
                        {/* Hire me */}
                        <Link
                        href="/contact"
                        className="px-5 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white bg-[#5d5d5d] hover:bg-slate-800"
                        >
                        Let's talk 
                        </Link>
                        {/* Download CV */}
                        <Link
                        href="/"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                        </Link>
                    </div>
                    {/* link button ends */}
                </div>

                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                        src="/images/codeman.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        />
                    </div>    
                </div>
            </div>
        </section>
    );
};

export default HeroSection;