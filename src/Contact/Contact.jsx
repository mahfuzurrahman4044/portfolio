import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pb-8" id="contact" >
      <SectionTitle title={"Contact"}></SectionTitle>
      <div data-aos="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              {/* <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="message"
                    className="input input-bordered h-32" // Adjust the height here (e.g., h-40, h-48) for a taller textarea
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="divider">OR</div>
        <button className="btn btn-primary">
          <Link to="https://web.facebook.com/mr4044">Facebook</Link>
        </button>{" "}
        |{" "}
        <button className="btn btn-primary">
          <Link to="https://www.linkedin.com/in/mahfuzurrahman4044/">
            LinkedIn
          </Link>
        </button>{" "}
        |{" "}
        <button className="btn btn-primary">
          <Link to="https://github.com/mahfuzurrahman4044">GitHub</Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
