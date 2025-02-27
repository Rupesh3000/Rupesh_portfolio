import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import headerImg from '../assets/header-img.svg'


const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-black"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 text-center md:text-left space-y-4"
      >
        <p className="text-lg text-zinc-200">Welcome to my portfolio</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi! I'm 
        </h1>
        <p className="text-zinc-300 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition-colors"
        >
          Contact
        </motion.a>
      </motion.div>

      {/* Right Section: Animated Image */}
      {/* <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
      >
        <motion.img
          src={header-img}
          alt="Hero"
          className="w-80 h-auto rounded-full animate-bounce"
        //   whileHover={{ scale: 1.1, rotate: 2 }}
        //   transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div> */}
    </section>
  );
};

export default HeroSection;