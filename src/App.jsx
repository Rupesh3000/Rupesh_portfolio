import { motion } from "framer-motion";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Banner from './assets/banner-bg.png'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Content Container */}
      <img src={Banner} alt="" className="" />
      <div className="absolute container mx-auto px-4 sm:px-6 lg:px-8 top-0 left-0 ">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
