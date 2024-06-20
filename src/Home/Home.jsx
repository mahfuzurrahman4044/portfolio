import "./Home.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Education from "../Education/Education";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div
      className="bg-gradient-to-r from-green-400 to-cyan-300 pt-20 sm:pt-0"
      id="home"
    >
      <div className="py-48 ps-16 font-serif">
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
