import { motion } from "framer-motion";
import NavBar from "./Components/NavBar";
import HeroSection from "./Pages/HeroSection";
import Banner from "/assets/banner-bg.png";
import AnimatedBackground from "./Components/AnimatedBackground";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <>
      <div className="wrapper w-full bg-black">
        {/* <img
          src={Banner}
          alt="Home Banner"
          className="w-full object-cover min-h-screen  absolute"
          /> */}
        {/* <AnimatedBackground /> */}
        <main className=" w-full ">
          <div className="container max-w-[80rem] text-white mx-auto">
            {/* <NavBar /> */}
            {/* <HeroSection /> */}
            {/* <About /> */}
            <Portfolio />
          </div>

          {/* <div className=" bg-black min-h-screen rounded-tl-[50px] rounded-tr-[50px]">
            <div className="container max-w-[80rem] text-white mx-auto">
              <About />
            </div>
           
          </div> */}
        </main>
      </div>
    </>
  );
}

export default App;
