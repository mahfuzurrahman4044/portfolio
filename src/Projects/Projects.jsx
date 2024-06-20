import { Link } from "react-router-dom";
import "./Projects.css";
import img1 from "../assets/Projects/Bistro Boss Logo.png";
import img2 from "../assets/Projects/Task Master Logo.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="py-16 bg-gray-950" id="projects">
      <SectionTitle title={"Projects"}></SectionTitle>
      <div className="flex justify-around text-white font-serif lg:ps-7 lg:px-0 px-5">
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="card lg:w-96 bg-gradient-to-r from-green-400 to-cyan-300 shadow-xl lg:my-0 my-5"
        >
          <figure className="px-10 pt-10 project-img">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Bistro Boss</h2>
            <div className="card-actions">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn text-gradient"
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
                  className="modal-box bg-gradient-to-r from-green-400 to-cyan-300 text-white"
                >
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Bistro Boss</h3>
                  <p className="py-4 text-left">
                    <span className="underline">Features:</span>
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        Separate dashboards for admin, seller, and buyer.{" "}
                      </li>
                      <li className="ms-10">JWT-protected API endpoints. </li>
                      <li className="ms-10">Stripe payment integration.</li>
                    </ul>
                    <span className="underline">Technologies:</span> React |
                    Node | Express | MongoDB | Firebase | JWT
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn text-gradient">
                          <Link to="https://github.com/mahfuzurrahman4044/bistro-boss">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn text-gradient my-3 lg:mx-3">
                          <Link to="https://github.com/mahfuzurrahman4044/bistro-boss-server">
                            GitHub Server Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn text-gradient">
                          <Link to="https://bistro-boss-mahfuzur-rahman.netlify.app/">
                            Live Site
                          </Link>
                        </button>
                      </div>
                    </div>
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn text-gradient">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="card lg:w-96 bg-gradient-to-r from-green-400 to-cyan-300 shadow-xl lg:my-0 my-5"
        >
          <figure className="px-10 pt-10 project-img">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Task Master</h2>
            <div className="card-actions">
              {/* Open the modal using ID.showModal() method */}
              <button
                className="btn text-gradient"
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
                  className="modal-box bg-gradient-to-r from-green-400 to-cyan-300 text-white"
                >
                  <figure className="px-5 pt-5 modal-img">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h3 className="font-bold text-lg mt-3">Task Master</h3>
                  <p className="py-4 text-left">
                    <span className="underline">Features:</span>
                    <ul className="" style={{ listStyleType: "disc" }}>
                      <li className="ms-10">
                        User account creation and private route protection for
                        the main page.{" "}
                      </li>
                      <li className="ms-10">
                        Task addition and status updates ("In Progress" or
                        "Completed").
                      </li>
                      <li className="ms-10">
                        Task archiving and recovery from the archive.
                      </li>
                    </ul>
                    <span className="underline">Technologies:</span> React |
                    Redux | Node | Express | MongoDB | Firebase
                    <div className="mt-5 lg:flex justify-center items-center">
                      <div>
                        <button className="btn text-gradient">
                          <Link to="https://github.com/mahfuzurrahman4044/task-master">
                            GitHub Client Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn text-gradient my-3 lg:mx-3">
                          <Link to="https://github.com/mahfuzurrahman4044/task-master-server">
                            GitHub Server Site
                          </Link>
                        </button>{" "}
                      </div>
                      <div>
                        <button className="btn text-gradient">
                          <Link to="https://task-master-mahfuzur-rahman.netlify.app/">
                            Live Site
                          </Link>
                        </button>
                      </div>
                    </div>
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn text-gradient">Close</button>
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
