// import img from "../../assets/Photo/Photo.jpg";
import img from "../../assets/Photo/Photo1.jpg";
import "./Home.css";
import Services from "../Services/Services";
import Skills from "../../Skills/Skills";
import Projects from "../../Projects/Projects";
import About from "../../About/About";
import Contact from "../../Contact/Contact";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const resumeLink =
    "https://drive.google.com/file/d/1x0vU8StT-qR5SKh3SMuQjP_KgZS-B3CO/view?usp=drive_link";

  const handleDownload = () => {
    window.open(resumeLink);
  };
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 pt-20 sm:pt-0" id="home">
      <div className="lg:flex justify-around items-center py-32 position" data-aos="zoom-in" data-aos-duration="3000">
        <div className="lg:text-4xl font-semibold w-1/2">
          <h2 className="">
            <span className="hi">Hi, I am</span> <br />
            <div className="py-6">
              <span className="font-bold text-purple-800 lg:text-6xl text-2xl">
                Mahfuzur Rahman
              </span>
              <br />
              <span>MERN Stack Developer</span>
            </div>
          </h2>
          <h3 className="lg:text-2xl font-normal my-5 banner-text">
            Passionate and motivated in the field of web design and development,
            I am dedicated to creating visually appealing and user-friendly
            websites. With a strong focus on delivering high-quality solutions,
            I combine my technical skills with creativity to bring ideas to
            life. I am committed to providing excellent service, ensuring client
            satisfaction, and delivering projects that make a lasting impact.
          </h3>
          <div className="">
            <button
              className="lg:font-bold font-normal btn btn-primary"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="home-img">
          <img className="rounded-lg" src={img} alt="" />
        </div>
      </div>
      <div>
        <Skills></Skills>
        <Services></Services>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
