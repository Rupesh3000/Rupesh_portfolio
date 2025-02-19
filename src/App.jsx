import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import bannerIg from "./assest/banner-bg.png";

function App() {
  // return (
  //   <div className="relative min-h-screen w-full overflow-hidden bg-[linear-gradient(45deg,#090a1a_0%,#1a1a4f_50%,#090a1a_100%)] bg-[size:400%] animate-gradient">
  //     {/* Content Container */}
  //     <img src={bannerIg} alt="" className="w-full min-h-screen object-cover z-0" />
  //     <div className="absolute z-10 container mx-auto top-3">
  //       <NavBar />
  //       <HeroSection />
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="h-screen bg-black">
        <h1 className="text-red-700 sm:text-white">
          this will be reb for sm niche
        </h1>
      </div>
    </>
  );
}

export default App;

// {
//  {
//    /* Animated Cosmic Gradient */
//  }
//  {
//    /* <motion.div
//         className="absolute inset-0"
//         animate={{
//           background: [
//             "linear-gradient(45deg, #090a1a 0%, #1a1a4f 50%, #090a1a 100%)",
//             "linear-gradient(135deg, #090a1a 0%, #3a1a6f 50%, #090a1a 100%)",
//           ],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           repeatType: "mirror",
//           ease: "anticipate",
//         }}
//         style={{
//           backgroundSize: "400% 400%",
//           willChange: "background",
//         }}
//       /> */
//  }

//  {
//    /* Interstellar Particles */
//  }
//  {
//    /* <motion.div
//         className="absolute inset-0 mix-blend-screen"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ delay: 1 }}
//       >
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-0.5 h-0.5 bg-white rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               opacity: [0, 0.8, 0],
//               scale: [0, 1.2, 0],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </motion.div> */
//  }
// }
