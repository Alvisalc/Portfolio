import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <section className="" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hello there! I&apos;m a dedicated front-end web developer driven by a passion for crafting
                    engaging and user-friendly web experiences. Proficient in a wide range of skills
                    including HTML, CSS, JavaScript, React, Node.js, Express, and Git.
                    I&apos;m also a creative thinker and a team player. 
                    I relish the opportunity to collaborate with others, leveraging our collective skills to bring 
                    amazing applications to life. Let's work together and create something extraordinary! 🚀
                    </p>
            </div>
        </div>
    </section>
  )
}

export default About