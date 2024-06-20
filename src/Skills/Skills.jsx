import SectionTitle from "../SectionTitle/SectionTitle";
import "./Skills.css";
import skill1 from "../assets/Skills/HTML5_logo_and_wordmark.svg.png";
import skill2 from "../assets/Skills/CSS3_logo_and_wordmark.svg.png";
import skill3 from "../assets/Skills/bootstrap-logo.png";
import skill4 from "../assets/Skills/download.png";
import skill5 from "../assets/Skills/JavaScript-logo (1).png";
import skill6 from "../assets/Skills/Typescript_logo_2020.svg.png";
import skill7 from "../assets/Skills/React-icon.svg.png";
import skill8 from "../assets/Skills/Redux Logo.png";
import skill9 from "../assets/Skills/2560px-Node.js_logo.svg.png";
import skill10 from "../assets/Skills/expressjs_logo_icon_169185.png";
import skill11 from "../assets/Skills/MongoDB-Emblem.jpg";
import skill12 from "../assets/Skills/firebase_logo.webp";
import skill13 from "../assets/Skills/GitHub-Mark.png";
import skill14 from "../assets/Skills/Agile Methodlogy Logo.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gray-950 py-16" id="skills">
      <SectionTitle title={"Skills"}></SectionTitle>
      <div
        className="grid justify-center lg:grid-cols-4 gap-10 my-10 lg:ps-8 font-serif text-white"
        data-aos="fade-up"
      >
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill1} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">HTML</h2>
              <p>Expert</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill2} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">CSS</h2>
              <p>Expert</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill3} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Bootstrap</h2>
              <p>Expert</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill4} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Tailwind</h2>
              <p>Expert</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill5} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">JavaScript</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill6} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">TypeScript</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill7} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">React</h2>
              <p>Expert</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill8} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Redux</h2>
              <p>Basic</p>
            </div>
          </div>
        </div>

        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill9} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Node</h2>
              <p>Basic</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill10} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Express</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill11} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">MongoDB</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill12} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Firebase</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>

        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill13} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">GitHub</h2>
              <p>Intermediate</p>
            </div>
          </div>
        </div>
        <div
          className="card w-60 bg-gradient-to-r from-green-400 to-cyan-300 shadow-lg border border-1 border-gray-400"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="card-img">
              <img src={skill14} alt="" />
            </div>
            <div className="">
              <h2 className="card-title">Agile Methodlogy</h2>
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
