import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-sm p-4"
    >
      <nav className="flex justify-between items-center">
        <motion.span whileHover={{ scale: 1.1 }} className="font-bold text-xl">
          Your Name
        </motion.span>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
