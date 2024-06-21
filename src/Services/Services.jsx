import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Services.css";

import img1 from "../assets/Carousel/Front End Development.png";
import img2 from "../assets/Carousel/Back End Development.png";
import img3 from "../assets/Carousel/Full-stack-web-developer.png";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:py-16 py-10 bg-gray-900" id="services">
      <div className="lg:px-48 lg:mt-10">
        <SectionTitle title={"Services"}></SectionTitle>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Carousel className="lg:mx-16 lg:px-48 px-5 text-white font-serif">
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">
              Front End Development
            </p>
            <img className="rounded-md" src={img1} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">
              Back End Development
            </p>
            <img className="rounded-md" src={img2} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">
              Full Stack Development
            </p>
            <img className="rounded-md" src={img3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
