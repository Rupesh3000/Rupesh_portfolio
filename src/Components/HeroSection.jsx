import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroIMg from "../assets/Hero_img.svg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-row justify-center p-8 items-center sm:flex-col "
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[50%] text-left md:text-left space-y-4"
      >
        <p className="text-lg text-zinc-200">Welcome to my portfolio</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi! I'm Rupesh
        </h1>
        <p className="text-zinc-300 mt-4 pr-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minus
          tenetur amet! Incidunt consequuntur rerum molestias eligendi dolore?
          Asperiores recusandae impedit amet animi illum autem laudantium,
          molestiae quas quae! Iure.
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" flex justify-center items-center"
      >
        <motion.img
          src={HeroIMg}
          alt="Hero"
          className="w-96 h-auto "
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
