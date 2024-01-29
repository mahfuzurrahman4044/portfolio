import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Services.css";

import img1 from "../../assets/Carousel/1_5IYtIe5OwxeoYXi226J-Uw.jpeg";
import img2 from "../../assets/Carousel/1_3-V1OMQoNbbidOaXtzTS6w.png";
import img3 from "../../assets/Carousel/Future-Of-MERN-Stack-Development.png";
import img4 from "../../assets/Carousel/0-responsive-web-design-hero-image.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" container mb-10 " id="services">
      <div className="lg:px-48 lg:mt-10">
        <SectionTitle title={"Services"}></SectionTitle>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Carousel className="lg:mx-16 lg:px-64 px-5 slideRes">
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">Web Design</p>
            <img className="rounded-md" src={img1} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">
              Front End Development
            </p>
            <img className="rounded-md" src={img2} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">
              Full Stack Development
            </p>
            <img className="rounded-md" src={img3} />
          </div>
          <div className="slider-img">
            <p className="lg:text-4xl mb-5 font-semibold">Responsive Design</p>
            <img className="rounded-md" src={img4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
