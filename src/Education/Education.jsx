import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="py-16 bg-gray-900" id="education">
      <SectionTitle title={"Education & Courses"}></SectionTitle>

      <div className="timeline">
        <div className="timeline-container left">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>BACHELOR DEGREE</h3>
            <h4>DEFODIL UNIVERSITY</h4>
            <span>JAN 2009 - MAY 2010</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
              Vivamus tristique rhoncus enim.
            </p>
          </div>
        </div>

        <div className="timeline-container right">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h3>MASTER DEGREE</h3>
            <h4>AMRDER UNIVERSITY</h4>
            <span>FEB 2011 - MAR 2012</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              laoreet dolor metus, eu ullamcorper turpis ornare tincidunt.
              Vivamus tristique rhoncus enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
