import "./Navbar.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="lg:ps-16 navbar bg-gradient-to-r from-green-400 to-cyan-300 opacity-90 lg:fixed lg:top-0 w-full z-10 shadow-xl">
      <div className="navbar-start flex items-center space-x-4">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
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
            className="menu menu-sm dropdown-content pt-3 z-[1] p-2 shadow from-green-400 to-cyan-300 opacity-90 rounded-box w-52 text-white"
          >
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="">
                About
              </a>
            </li>
            <li>
              <a href="/#education" className="">
                Education
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
              <a href="/#contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://www.facebook.com/mahfuzurrahman2048"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahfuzurrahman4044/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/mahfuzurrahman4044/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FaGithub size={20} />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal pr-1 font-semibold text-white">
          <li>
            <a href="/#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="/#education" className="">
              Education
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
