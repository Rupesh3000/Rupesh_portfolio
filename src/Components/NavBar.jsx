import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > scrollY.prev);
    });
  }, [scrollY]);

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase()).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className="z-10 fixed top-0 left-0 w-full flex items-center justify-center px-8 py-4 backdrop-blur-md bg-opacity-70 bg-gradient-to-r from-indigo-900 via-purple-900 to-black shadow-md gap-3"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Center Nav Links */}
      <ul className="flex gap-5 text-xl font-extralight tracking-wide">
        {["Home", "About", "Projects", "Contact"].map((link) => (
          <motion.li
            key={link}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              className={`[text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-zinc-200 cursor-pointer ${
                activeSection === link ? "text-white font-bold" : ""
              }`}
              onClick={() => handleClick(link)}
            >
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Right-Side Social Links */}
      <div className="flex space-x-6">
        {["Instagram", "LinkedIn", "Twitter"].map((social) => (
          <motion.a
            key={social}
            href="#"
            className="text-white text-xl hover:text-indigo-400"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {social}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavBar;
