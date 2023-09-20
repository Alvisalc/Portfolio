import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hi i am alvis.
                    </h1>
                    <p className=" text-lg lg:text-xl">
                        Are you looking for a geniue to
                    </p>
                    
                    {/* link button starts */}
                    <div>
                        {/* Hire me */}
                        <Link
                        href="/contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-300"
                        >
                        Hire Me
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

                <div className="rounded-full bg-[#5C5470] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>    
            </div>
        </section>
    );
};

export default HeroSection;