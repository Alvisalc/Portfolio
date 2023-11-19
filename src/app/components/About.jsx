import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className=" py-16 max-w-7xl mx-auto" id="about">
    <div className="flex flex-col md:flex-row items-center gap-12 px-8">
      <div className="flex-shrink-0 mx-auto md:mx-0 max-w-md max-h-md">
        <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <p className="text-base text-left sm:text-lg lg:text-base text-gray-600">
          Hello there! I&apos;m a dedicated front-end web developer driven by a passion for crafting engaging and user-friendly web experiences. Proficient in a wide range of skills including HTML5, CSS3, JavaScript, TypeScript, React, Angular, Postman, MangoDB, and Git. I&apos;m also a creative thinker and a team player. Let&apos;s work together and create something extraordinary! 🚀
        </p>
      </div>
    </div>
  </section>
  )
}

export default About