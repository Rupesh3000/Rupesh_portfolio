import React from "react";


function TechStack() {
//   const techs = [
//     { name: "React", image: react },
//     { name: "HTML", image: html },
//     { name: "CSS", image: css },
//     { name: "JavaScript", image: javascript },
//     { name: "Tailwind CSS", image: tailwind },
//     { name: "Framer Motion", image: framer_motion },
//     { name: "React", image: react },
//     { name: "Kali", image: kali },
//     { name: "Material UI", image: MUI },
//     { name: "Git", image: git },
//     { name: "Swiper", image: Swiper },
//     { name: "Bootstrap", image: bootstrap },
//     { name: "Firebase", image: firebase },
//     { name: "GSAP", image: gsap },
//     { name: "Lenis", image: Lenis },
//     { name: "Vercel", image: vercel },
//     { name: "Vite", image: vite },
//   ];

  return (
    <section className="tech-stack py-8 bg-[#1A1A2E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* {techs.map((tech, index) => (
            <div>
            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <img
                  src={javascript}
                  alt=""
                  className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300 mix-blend-darken"
                />
              </div>
              <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                JavaScript
              </span>
            </div>
          </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
