import React from "react";
import ProjectCard from "../Components/ProjectCard";
import TechStack from "../Components/TechStack";
import { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [selected, setSelected] = useState("Project");
  const projects = [
    {
      image: "/project1.jpg",
      name: "Project 1",
      description: "A cool space-themed project with animations.",
      codeLink: "https://github.com",
      detailsLink: "/details/1",
    },
    {
      image: "/project2.jpg",
      name: "Project 2",
      description: "Another responsive portfolio piece.",
      codeLink: "https://github.com",
      detailsLink: "/details/2",
    },
    // Add more projects here
  ];
  return (
    <section id="portfolio" className="min-h-screen">
      <div class="text-center pb-10">
        <h2 class="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          {/* <span style="color: rgb(99, 102, 241); background-image: linear-gradient(45deg, rgb(99, 102, 241) 10%, rgb(168, 85, 247) 93%); background-clip: text; -webkit-text-fill-color: transparent;">
          </span> */}
          Portfolio Showcase
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <div className="w-full flex justify-between items-center px-8 py-3  border rounded-xl  text-white relative p-2.5">
        {["Project", "Tech Stack"].map((item) => (
          <div
            key={item}
            className="relative cursor-pointer text-xl font-semibold px-24 py-8"
            onClick={() => setSelected(item)}
          >
            {selected === item && (
              <motion.div
                layoutId="active"
                className="absolute inset-0 bg-[#1f2b5d] rounded-xl"
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            )}
            <span className="relative z-10 ">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 p-5">
        {selected === "Project" ? (
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  codeLink={project.codeLink}
                  detailsLink={project.detailsLink}
                />
              ))}
            </div>
          </div>
        ) : (
          <TechStack />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
