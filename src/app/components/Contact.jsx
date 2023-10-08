import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-gray-600 text-center mb-6">
            I&apos;m always open to new opportunities and collaborations. Feel free to
            get in touch with me!
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="mailto:alvisccy1107@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Email
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://linkedin.com/in/alvis-chong-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/alvisalc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact