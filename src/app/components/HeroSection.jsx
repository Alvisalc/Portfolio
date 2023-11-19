"use client";
import React from "react";
import TechStackIcons from './TechStackIcons';


const HeroSection = () => {

    const techStackIcons = ['/images/html.png', '/images/css.png', 
    '/images/javascript.png', '/images/typescript.png', 
    '/images/react.png', '/images/angular.png',
    '/images/tailwind.png', '/images/sass.png'];

    return(
       <section className="py-16 lg:max-w-full lg:max-h-full">
           <div className="flex flex-col md:flex-row items-center gap-8 mx-auto max-w-7xl px-8 py-16">
                <div className="text-center md:text-left">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                    Front End <br />Developer
                    </h1>

                    <p className="text-base sm:text-lg mb-6 lg:text-base text-gray-600">
                    A passionate Front-end Developer based in Toronto, Canada.
                    </p>

                    <div className="mb-8">
                    <TechStackIcons stackIcons={techStackIcons} />
                    </div>
                </div>

                <div className="flex-shrink-0 mx-auto max-w-md max-h-md animate-morphAnimation">
                    <img
                    src="/images/hero.png"
                    alt="hero image"
                    style={{ clipPath: 'polygon(30% 0%, 70% 10%, 90% 70%, 0% 90%)' }}
                    className="rounded-full mx-auto w-2/3 lg:w-full"
                    />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;