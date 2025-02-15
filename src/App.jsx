import Header from "./Components/Header";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="h-screen bg-black">
      {/* Main Container */}
      <main className="container h-full">
        <Header />
        <section className="h-full bg-zinc-700"></section>
        <section className="h-full bg-zinc-500"></section>
      </main>
    </div>
  );
};

export default App;
