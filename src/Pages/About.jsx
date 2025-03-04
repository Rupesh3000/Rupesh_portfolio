import React from "react";
import headerImg from "../assets/header-img.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">About Me</h1>
        <p className="text-lg mt-1 flex gap-3 justify-center">
          <i className="ri-flower-line text-indigo-600"></i>Transforming ideas
          into digital experiences
          <i className="ri-flower-line text-indigo-600"></i>
        </p>
      </div>

      <div className=" flex flex-col-reverse md:flex-row items-center justify-between mt-9">
        {/* Left div */}
        <motion.div
          // initial={{ opacity: 0, x: -50 }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2  md:text-left space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hello, I'm <br />{" "}
            <span className="text-[#673385]">Rupesh Mali</span>
          </h1>
          <p className="text-zinc-300 mt-4 text-center md:text-start ">
            Enthusiastic and motivated full stack developer with solid
            foundations in web technologies and programming languages.
            Proficient in React, JavaScript, HTML, CSS, GSAP, framer for
            building dynamic, scalable web apps. Skilled in front-end HTML, CSS
            . Familiar with Linux environments...
          </p>

          <div>
            <button className=" bg-black text-white py-2 px-4 rounded-md shadow-indigo-900 shadow-[0_0_15px_5px] hover:shadow-indigo-500/50 hover:shadow-[0_0_20px_10px] mt-3">
              Download CV
            </button>
            {/* <button className=" bg-black text-white py-2 px-4 rounded-md shadow-indigo-900 shadow-[0_0_15px_5px] hover:shadow-indigo-500/50 hover:shadow-[0_0_20px_10px] mt-3 ml-5">
              Contact
            </button> */}
          </div>
        </motion.div>

        {/* Right side img  */}
        <motion.div
          // initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-8 md:mt-0 flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-zinc-700"></div>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 justify-center mt-14 ">
        {/* Box 1 */}
        <div className="bg-gray-800 w-full md:w-2/5 h-44 rounded-lg flex flex-col justify-between p-4 ">
          <div className="flex justify-between ">
            <i className="ri-code-line py-2 bg-zinc-500 rounded-full px-2.5 text-2xl md:text-3xl"></i>
            <h3 className="font-semibold text-3xl md:text-4xl">6</h3>
          </div>
          <div>
            <h3 className="text-xl ">TOTAL PROJECTS</h3>
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-gray-800 w-full md:w-2/5 h-44 rounded-lg flex flex-col justify-between p-4 ">
          <div className="flex justify-between ">
            <i className="ri-code-line py-2 bg-zinc-500 rounded-full px-2.5 text-2xl md:text-3xl"></i>
            <h3 className="font-semibold text-3xl md:text-4xl">6</h3>
          </div>
          <div>
            <h3 className="text-xl ">CERTIFICATES</h3>
            <p>Lorem ipsum dolor, sit amet consectetur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
