import { motion } from "framer-motion";
import NavBar from "./Components/NavBar";
import HeroSection from "./Pages/HeroSection";
import Banner from "./assets/banner-bg.png";
import AnimatedBackground from "./Components/AnimatedBackground";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div className="wrapper w-full bg-[#090925]">
        {/* <AnimatedBackground /> */}
        <main className=" w-full">
          <div className="container max-w-[80rem] text-white mx-auto ">
            <NavBar />
            <HeroSection />
            <About />
            <Portfolio />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
