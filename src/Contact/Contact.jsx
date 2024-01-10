import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    // console.log({ userName, userEmail, subject, message });

    fetch("https://portfolio-api-green.vercel.app/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, userEmail, subject, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Email has been send to Mahfuzur Rahman");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="pb-8" id="contact">
      <SectionTitle title={"Contact"}></SectionTitle>
      <div data-aos="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left"></div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
              <form className="card-body" onSubmit={handleForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
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
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                    name="subject"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    placeholder="message"
                    className="input input-bordered h-32"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </form>
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
