"use client";
import React, { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    name: 'Car Rental',
    description: 'A car rental website allowing users to search, compare, and reserve cars for personal or business use.',
    techStack: ['React', 'SCSS'],
    previewImage: '/images/projects/1.png',
    githubLink: 'https://github.com/alvisalc',
    liveDemoLink: 'https://car-rental-demo.com',
  },
  {
    id: 2,
    name: 'Car Rental',
    description: 'A car rental website allowing users to search, compare, and reserve cars for personal or business use.',
    techStack: ['React', 'SCSS'], 
    previewImage: '/images/projects/2.png',
    githubLink: 'https://github.com/alvisalc',
    liveDemoLink: 'https://car-rental-demo.com',
  },
  {
    id: 3,
    name: 'Car Rental',
    description: 'A car rental website allowing users to search, compare, and reserve cars for personal or business use.',
    techStack: ['React', 'SCSS'],
    previewImage: '/images/projects/3.png',
    githubLink: 'https://github.com/alvisalc',
    liveDemoLink: 'https://car-rental-demo.com',
  }
];

const ProjectSection = () => {
  return (
    <section className="py-16" id="project">
      <div className="container mx-aut px-8">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={project.previewImage} alt={project.name} className="w-full h-40 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub
                  </a>
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
