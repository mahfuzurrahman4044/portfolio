import "./About.css";
import img1 from "../assets/Photo/Photo1.jpg";
import img2 from "../assets/Photo/istockphoto-1356364287-612x612.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="" id="about">
      <SectionTitle title={"About Me"}></SectionTitle>
      <div className="about-img flex justify-center my-10">
        <img className="" src={img1} alt="" />
      </div>
      <div className="lg:flex justify-center items-center">
        <div
          className="about-banner-img"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src={img2} alt="" />
        </div>
        <h2
          className="lg:mx-40 w-1/4 about-text"
          style={{ textAlign: "justify" }}
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          {" "}
          As a passionate MERN Stack Developer, I have a strong foundation in
          web development and a drive to create user-friendly applications.
          Alongside my Political Science studies at the National University of
          Bangladesh, I honed my skills in HTML, CSS, Bootstrap, Tailwind,
          JavaScript, React, Node.js, Express, and MongoDB. I thrive on
          challenges, turning ideas into reality through code. With a meticulous
          problem-solving approach, I deliver high-quality solutions that exceed
          expectations. My attention to detail ensures efficient project
          completion. I am adaptable to new technologies, with a knack for
          collaborative work. I continuously seek growth, staying up-to-date
          with the latest industry trends. Beyond my technical skills, I am
          known for a strong work ethic and punctuality. I believe in open
          communication and enjoy a team environment where innovation thrives.
          My goal is to make a positive impact through my work, enhancing user
          experiences and making a difference in peoples lives. If you need a
          dedicated MERN Stack Developer, I would be thrilled to collaborate and
          bring ideas to life!
        </h2>
      </div>
    </div>
  );
};

export default About;
