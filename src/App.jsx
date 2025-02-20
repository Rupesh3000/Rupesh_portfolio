import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import bannerIg from "./assets/banner-bg.png";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[linear-gradient(45deg,#090a1a_0%,#1a1a4f_50%,#090a1a_100%)] bg-[size:400%] animate-gradient">
      {/* Content Container */}
      <img src={bannerIg} alt="" className="w-full h-full object-cover z-0" />
      <div className="absolute z-10 container mx-auto px-4 sm:px-6 lg:px-8 top-3">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
