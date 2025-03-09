import React from "react";
import react from "../assets/react.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import tailwind from "../assets/tailwind.svg";
import framer_motion from "../assets/motion.png";
import kali from "../assets/kali.png";
import MUI from "../assets/MUI.svg";
import git from "../assets/git.svg";
import Swiper from "../assets/swiper.png";
import bootstrap from "../assets/bootstrap.svg";
import firebase from "../assets/firebase.svg";
import vite from "../assets/vite.svg";
import vercel from "../assets/vercel.svg";
import sweet from "../assets/sweetalrt.svg";
// import gsap from "../assets/gsap.svg";
// import Lenis from "../assets/Lenis.svg";

function TechStack() {
  const techs = [
    { name: "React", image: react },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Kali Linux", image: kali, style: "object-cover" },
    { name: "Material UI", image: MUI },
    { name: "Git", image: git },
    { name: "Bootstrap", image: bootstrap },
    { name: "Motion", image: framer_motion, style: "object-cover" },
    { name: "Firebase", image: firebase },
    { name: "Vercel", image: vercel },
    { name: "Swiper", image: Swiper, style: "object-cover" },
    { name: "Vite", image: vite },
    { name: "SweetAlrt2", image: sweet },
    // { name: "GSAP", image: gsap },
    // { name: "Lenis", image: Lenis },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5">
        {techs.map((tech, index) => (
          <div>
            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <img
                  src={tech.image}
                  alt=""
                  className={`relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 ${tech.style}`}
                />
              </div>
              <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
