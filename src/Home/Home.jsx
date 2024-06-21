import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-gradient-to-r from-green-400 to-cyan-300 lg:pt-20 sm:pt-0"
      id="home"
    >
      <div className="lg:py-36 py-24 lg:ps-16 ps-0 font-serif home-background text-center lg:text-left">
        <h2 className="text-5xl text-white">Hello, I'm</h2>
        <h2 className="text-7xl text-white my-4">Mahfuzur Rahman</h2>
        <p className="text-white text-2xl">A passionate MERN Stack Developer</p>
      </div>

      <div>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
