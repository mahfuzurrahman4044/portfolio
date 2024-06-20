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
    <div className="py-16 bg-gray-900" id="contact">
      <SectionTitle title={"Contact"}></SectionTitle>
      <div data-aos="">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left"></div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
              <form
                className="card-body bg-gradient-to-r from-green-400 to-cyan-300 rounded-lg font-serif"
                onSubmit={handleForm}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
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
                    <span className="label-text text-white">Email</span>
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
                    <span className="label-text text-white">Subject</span>
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
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    placeholder="message"
                    className="input input-bordered h-32"
                    name="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-gradient">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
