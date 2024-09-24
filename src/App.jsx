import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import StartCanvas from "./components/canvas/Stars";
import Works from "./components/Works";
import Hobbies from "./components/Hobbies";
import { domAnimation, LazyMotion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Hobbies />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StartCanvas />
          </div>
        </div>
      </LazyMotion>
    </BrowserRouter>
  );
};

export default App;
