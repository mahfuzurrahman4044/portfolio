import { Link } from "react-router-dom";
import "./Projects.css";
import img1 from "../assets/Projects/Summer Camp.png";
import img2 from "../assets/Projects/Holizon Education Consultancy.png";
import img3 from "../assets/Projects/Tea House.png";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-20" id="projects">
      <SectionTitle title={"Projects"}></SectionTitle>
      <div className="grid lg:grid-cols-3 lg:ps-7 lg:px-0 px-5">
        <div data-aos="flip-left" data-aos-duration="2000" className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-xl lg:my-0 my-5">
          <figure className="px-10 pt-10 project-img">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Summer Camp</h2>
            <div className="card-actions">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn btn-primary"
                onClick={() => window.my_modal_5.showModal()}
              >
                Details
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box bg-gradient-to-r from-blue-600 to-cyan-400"
                >
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Summer Camp</h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        Admin, Instructor and Student have different dashboards.{" "}
                      </li>
                      <li className="ms-10">
                        Implemented JWT for extra security.{" "}
                      </li>
                      <li className="ms-10">Implemented a payment method.</li>
                    </ul>
                    Technologies: React | Node | Express | MongoDB | JWT |
                    Firebase | Tailwind
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/mahfuzurrahman4044/Summer-Camp">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/mahfuzurrahman4044/Summer-Camp-API">
                            GitHub Server Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://summer-camp-4dcb2.web.app/">
                            Live Site
                          </Link>
                        </button>
                      </div>
                    </div>
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-primary">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-xl lg:my-0 my-5">
          <figure className="px-10 pt-10 project-img">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Holizon Education Consultancy</h2>
            <div className="card-actions">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn btn-primary"
                onClick={() => window.my_modal_6.showModal()}
              >
                Details
              </button>
              <dialog
                id="my_modal_6"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box bg-gradient-to-r from-blue-600 to-cyan-400"
                >
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">
                    Holizon Education Consultancy
                  </h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        Users can add classes and see the classes they have
                        added.{" "}
                      </li>
                      <li className="ms-10">
                        Used a private route for privacy.
                      </li>
                      <li className="ms-10">
                        Used AOS for awesome UI and made the homepage
                        responsive.
                      </li>
                    </ul>
                    Technologies: React | Node | Express | MongoDB | Firebase |
                    Tailwind
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/mahfuzurrahman4044/college">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/mahfuzurrahman4044/college-server">
                            GitHub Server Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://college-bec54.web.app/">
                            Live Site
                          </Link>
                        </button>
                      </div>
                    </div>
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-primary">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-duration="2000" className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-xl lg:my-0 my-5">
          <figure className="px-10 pt-10 project-img">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tea House</h2>
            <div className="card-actions">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn btn-primary"
                onClick={() => window.my_modal_7.showModal()}
              >
                Details
              </button>
              <dialog
                id="my_modal_7"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  method="dialog"
                  className="modal-box bg-gradient-to-r from-blue-600 to-cyan-400"
                >
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img3} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Tea House</h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">Beautiful design.</li>
                      <li className="ms-10">Used Bootstrap.</li>
                      <li className="ms-10">Responsive design.</li>
                    </ul>
                    Technologies: HTML | CSS | Bootstrap
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/mahfuzurrahman4044/Tea-House">
                            GitHub Client Site
                          </Link>
                        </button>
                      </div>
                      {/* <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-mahfuzurrahman4044">
                            GitHub Server Site
                          </Link>
                        </button>
                      </div> */}
                      <div>
                        <button className="btn btn-primary lg:mx-3">
                          <Link to="https://kaleidoscopic-gnome-355bfd.netlify.app/">
                            Live Site
                          </Link>
                        </button>
                      </div>
                    </div>
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-primary">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
