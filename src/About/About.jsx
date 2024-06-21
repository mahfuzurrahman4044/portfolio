import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import image from "../assets/Photo/Photo.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1tYquE-fLFOJ_Ikrxvntpqd3cSwsb5-mq/view?usp=sharing"
    );
  };
  return (
    <div className="lg:py-16 py-10 bg-gray-950" id="about">
      <SectionTitle title={"About"}></SectionTitle>

      <div className="lg:flex justify-around items-center">
        <div className="about-img text-center lg:text-left" data-aos="fade-right" data-aos-duration="1500">
          <img src={image} alt="" />
          <div className="pt-6 lg:ps-10">
            <button className="btn text-gradient" onClick={handleDownload}>
              <FaCloudDownloadAlt className="text-white" /> Download Resume
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 text-white font-serif text-center lg:text-left mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1500">
          <p>
            Motivated Web Developer with expertise in MERN Stack Development.
            Dedicated to delivering exceptional user experiences and eager to
            contribute to a dynamic company's success by utilising my skills,
            organisation, and passion for continuous learning.
          </p>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">NAME:</span>{" "}
            Mahfuzur Rahman
          </h2>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">
              DATE OF BIRTH:
            </span>{" "}
            June-4, 2001
          </h2>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">
              Nationality
            </span>{" "}
            Bangladeshi
          </h2>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">Address:</span>{" "}
            Rajshahi, Bangladesh
          </h2>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">Phone:</span>{" "}
            +880 1315589668
          </h2>
          <h2 className="pt-4 text-xl">
            <span className="uppercase text-gradient font-bold">Email:</span>{" "}
            mahfuzurrahman4044@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
