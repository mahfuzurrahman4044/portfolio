import React, { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="bg-gray-900 text-white min-h-screen lg:flex flex-col items-center lg:py-16 py-10 lg:ps-0 ps-10"
      id="education"
    >
      <SectionTitle title={"Education & Courses"}></SectionTitle>

      <div className="relative w-1 bg-teal-400 h-full">
        {/* -----------------------Graduation Hat Icon---------------------- */}

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-teal-400 rounded-full h-12 w-12 flex items-center justify-center">
          <svg
            className="h-6 w-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1L1 6l11 5 11-5-11-5zm0 7.695l9-4.091V9c0 1.455-3 3.273-9 5.5-6-2.227-9-4.045-9-5.5V4.604l9 4.091zm-9 6.272c3 1.092 5.25 2.182 9 3.409 3.75-1.227 6-2.318 9-3.409v3.409c0 .455-1.5 1.227-4.5 2.318-1.5.545-3 1-4.5 1s-3-.455-4.5-1c-3-1.091-4.5-1.864-4.5-2.318v-3.409z" />
          </svg>
        </div>

        {/* -----------------------------First Degree--------------------------- */}

        <div
          className="flex flex-col items-start mt-16 ml-10"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <div className="lg:mt-4 mt-16 font-serif text-2xl">
            <h3 className="text-gradient  font-bold ">
              Bachelor of Social Science
            </h3>
            <p className="text-gray-400">
              Political Science | National University of Bangladesh
            </p>
          </div>
        </div>

        {/* -----------------------Second Degree---------------------------- */}
        <div
          className="flex flex-col items-start lg:items-end mr-10"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <div className="mt-4 lg:text-right mr-10 text-2xl font-serif ps-10 lg:ps-0">
            <h3 className="text-gradient font-bold">
              Complete Web Development with Jhankar Mahbub
            </h3>
            <p className="text-gray-400">Programming Hero</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
