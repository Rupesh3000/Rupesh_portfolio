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
    <motion.div
      className="z-10 fixed top-0 left-0 w-full bg-zinc-900/10 backdrop-blur-xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="flex items-center justify-between py-4 px-3 gap-3 max-w-[80rem] mx-auto container">
        {/* Center Nav Links */}
        <div className="text-2xl">
          <i className="ri-code-s-slash-line"></i>
          
        </div>
        <ul className="flex gap-5 text-xl">
          {["Home", "About", "Portfolio", "Contact"].map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                className={`[text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-zinc-200 cursor-pointer ${
                  activeSection === link ? "text-white font-semibold" : ""
                }`}
                onClick={() => handleClick(link)}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavBar;
