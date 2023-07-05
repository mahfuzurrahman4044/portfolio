import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Services.css";

import img1 from "../../assets/Carousel/ui-and-ux-design-for-website-leads.jpg";
import img2 from "../../assets/Carousel/Responsive-Devices-Screen-Mockup-01.jpg";
import img3 from "../../assets/Carousel/Mern.png";
import SectionTitle from "../../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-5 container mb-10" id="services">
      <SectionTitle title={"Services"}></SectionTitle>
      <div data-aos="fade-up">
        <Carousel className="lg:mx-16 p-2 slideRes">
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 text-gray-500 font-semibold">
              UI and UX Design
            </p>
            <img className="rounded-md" src={img1} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 text-gray-500 font-semibold">
              Full Stack Project
            </p>
            <img className="rounded-md" src={img3} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 text-gray-500 font-semibold">
              Responsive Design
            </p>
            <img className="rounded-md" src={img2} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
