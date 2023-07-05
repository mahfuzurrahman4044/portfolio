import { Link } from "react-router-dom";
import "./Projects.css";
import img1 from "../assets/Projects/Screenshot (15).png";
import img2 from "../assets/Projects/Screenshot (16).png";
import img3 from "../assets/Projects/Screenshot (20).png";
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
      <div className="grid lg:grid-cols-3 lg:ps-24" data-aos="flip-right">
        <div className="card lg:w-96 bg-base-100 shadow-xl">
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
                <form method="dialog" className="modal-box">
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Summer Camp</h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        Admin, Instructor and Student have different dashboards.
                      </li>
                      <li className="ms-10">
                        Implemented JWT for extra security.
                      </li>
                      <li className="ms-10">Implemented a payment method.</li>
                    </ul>
                    Technologies: React | Node | Express | MongoDB | JWT |
                    Firebase | Tailwind
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahfuzurrahman4044">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahfuzurrahman4044">
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

        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 project-img">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kids Zone</h2>
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
                <form method="dialog" className="modal-box">
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Kids Zone</h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        User can add toys and see the toys he added.
                      </li>
                      <li className="ms-10">Used Express to show data.</li>
                      <li className="ms-10">
                        Used AOS for awesome UI and made the Homepage
                        responsive.
                      </li>
                    </ul>
                    Technologies: React | Node | Express | MongoDB | Firebase |
                    Tailwind
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mahfuzurrahman4044">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mahfuzurrahman4044">
                            GitHub Server Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://kids-zone-52dcf.web.app/">
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

        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 project-img">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Food Valley</h2>
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
                <form method="dialog" className="modal-box">
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img3} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Food Valley</h3>
                  <p className="py-4 text-left">
                    Features
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">Dynamically fetched data.</li>
                      <li className="ms-10">Used Express.</li>
                      <li className="ms-10">Responsive Homepage</li>
                    </ul>
                    Technologies: React | Node | Express | MongoDB | JWT |
                    Firebase | Tailwind
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahfuzurrahman4044">
                            GitHub Client Site
                          </Link>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-primary my-3 lg:mx-3">
                          <Link to="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-mahfuzurrahman4044">
                            GitHub Server Site
                          </Link>
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-primary">
                          <Link to="https://food-valley-f5899.web.app/">
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
