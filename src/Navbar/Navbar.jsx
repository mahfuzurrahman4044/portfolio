import "./Navbar.css";
// import img from "../assets/Photo/OIP.jpeg"

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="navbar bg-gradient-to-r from-blue-500 to-cyan-500 opacity-90 lg:fixed shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow from-blue-500 to-cyan-500 rounded-box w-52"
          >
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/#skills" className="">
                Skills
              </a>
            </li>
            <li>
              <a href="/#services" className="">
                Services
              </a>
            </li>
            <li>
              <a href="/#projects" className="">
                Projects
              </a>
            </li>
            <li>
              <a href="/#about" className="">
                About Me
              </a>
            </li>
            <li>
              <a href="/#contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <a className="img-logo"><img src={img} alt="" /></a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal pr-1 font-semibold">
          <li>
            <a href="/#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/#skills" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="/#services" className="">
              Services
            </a>
          </li>
          <li>
            <a href="/#projects" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="/#about" className="">
              About Me
            </a>
          </li>
          <li>
            <a href="/#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
