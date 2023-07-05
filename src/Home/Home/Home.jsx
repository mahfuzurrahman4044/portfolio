import img from "../../assets/Photo/Photo1.jpg";
import "./Home.css";
// import bg from "../../assets/Photo/5651980.webp";
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
    "https://drive.google.com/file/d/1DS-7URExF99Ov_HHMuoL5subrIWF7iVq/view?usp=drive_link"; // Replace with the direct link to your resume file

  const handleDownload = () => {
    window.open(resumeLink);
  };
  return (
    <div className="bg-base-100" id="home" data-aos="">
      <div className="lg:flex justify-around items-center py-32 position">
        <div className="lg:text-4xl font-semibold w-1/2">
          <h2 className="">
            <span className="hi">Hi, I am</span> <br />
            <div className="my-6">
              <span className="font-bold text-purple-800 lg:text-6xl">
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
              className="font-bold btn btn-primary"
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
