import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/header-img.svg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between"
    >
      {/* Left Section */}
      <motion.div
        // initial={{ opacity: 0, x: -50 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2  md:text-left space-y-4"
      >
        <p className="text-sm text-zinc-200 py-1.5 px-2 border border-white w-fit rounded-lg">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Frontend <br /> <span className="text-[#673385]">Developer</span>
        </h1>
        <p className="text-zinc-300 mt-4 md:pr-24 text-center md:text-start px-3 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. varius enim
          in eros elementum tristique.
        </p>

        <ul className="flex gap-5 ">
          {["React", "JavaScript", "Tailwindcss", "Motion"].map((link) => (
            <motion.li
              key={link}
              className="bg-gray-400/10 py-1.5 px-2.5 rounded-3xl backdrop-blur-xl text-white mt-2 cursor-pointer hover:shadow-indigo-500/50 hover:shadow-[0_0_12px_4px]"
              // whileHover={{ scale: 1.05 }}
              // transition={{ type: "spring", stiffness: 300 }}
            >
              {link}
            </motion.li>
          ))}
        </ul>

        <div>
          <button className=" bg-black text-white py-2 px-4 rounded-md shadow-indigo-900 shadow-[0_0_15px_5px] hover:shadow-indigo-500/50 hover:shadow-[0_0_20px_10px] mt-3">
            Projects
          </button>
          <button className=" bg-black text-white py-2 px-4 rounded-md shadow-indigo-900 shadow-[0_0_15px_5px] hover:shadow-indigo-500/50 hover:shadow-[0_0_20px_10px] mt-3 ml-5">
            Contact
          </button>
        </div>

        <div className="text-xl flex gap-8">
          <a
            href=""
            className="px-2.5 py-1.5 bg-gray-400/10 rounded-2xl backdrop-blur-xl mt-3 hover:shadow-indigo-500/50 hover:shadow-[0_0_12px_5px]"
          >
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a
            href=""
            className="px-2.5 py-1.5 bg-gray-400/10 rounded-2xl backdrop-blur-xl mt-3 hover:shadow-indigo-500/50 hover:shadow-[0_0_12px_5px]"
          >
            <i class="ri-instagram-line"></i>
          </a>
          <a
            href=""
            className="px-2.5 py-1.5 bg-gray-400/10 rounded-2xl backdrop-blur-xl mt-3 hover:shadow-indigo-500/50 hover:shadow-[0_0_12px_5px]"
          >
            <i class="ri-twitter-x-line"></i>
          </a>
        </div>
      </motion.div>

      {/* Right side img  */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-8 md:mt-0 flex justify-center"
      >
        <motion.img
          src={headerImg}
          alt="Hero"
          className="w-96"
          // whileHover={{ scale: 1.1, rotate: 2 }}
          // transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
