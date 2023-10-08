import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4 space-x-4">
          <a
            href="https://linkedin.com/in/alvis-chong-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/alvisalc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <p className="text-sm mb-2">
          Copyright © {new Date().getFullYear()} Alvis Chong. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
