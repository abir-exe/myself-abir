/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // const form = e.target; 
    // const from_name = form.name.value;
    // const email = form.email.value;
    // const subject = form.subject.value;
    // const message = form.message.value;
    // const realMessage = { from_name, email, subject, message }

    emailjs
      .sendForm(
        "service_mmvs2lo",
        "template_r429xn5",
        form.current,
        "EmkhIdO5posmuQHJP"
      )
      .then(
        (result) => {
          console.log(result.text);
          result.text && toast.success('Message Sent!')
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          error.text && toast.error('Message Not Sent!')
        }
      );
  };

  return (
    <div id="contact" className="overflow-hidden">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">
          Contact Me
        </h2>
      </div>
      <div className="hero overflow-hidden">
        <div className="hero-content flex flex-col md:flex-row items-center  lg:flex-row-reverse">
          <div  data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="w-full md:w-1/2 text-center lg:text-left">
            {/* <div className="divider"></div> */}
            <h1 className="text-2xl font-bold">Get in touch</h1>
            <p className="py-6 text-justify font-semibold">
              Thank you for exploring my portfolio! If you have a project in
              mind, want to discuss collaboration opportunities, or simply have
              a question, I'd love to hear from you. Feel free to reach out via
              the contact form below, or connect with me through the following
              channels: <br />
            </p>
            <div>
              <Link
                to="https://www.linkedin.com/in/web-abirmahmud/"
                className="text-xl  hover:text-lg hover:text-black duration-300"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin></FaLinkedin> <p>Linkedin</p>
                </div>
              </Link>
              <Link
                to="https://www.facebook.com/abir.mahmudXD"
                className="text-xl  hover:text-lg hover:text-black duration-300"
              >
                <div className="flex items-center gap-2">
                  <FaFacebook></FaFacebook> <p>Facebook</p>
                </div>
              </Link>
              <Link
                to="https://www.twitter.com/abirmahmud_"
                className="text-xl  hover:text-lg hover:text-black duration-300"
              >
                <div className="flex items-center gap-2">
                  <FaTwitter></FaTwitter> <p>Twitter</p>
                </div>
              </Link>
              <Link
                to="https://github.com/abir-exe"
                className="text-xl  hover:text-lg hover:text-black duration-300"
              >
                <div className="flex items-center gap-2">
                  <FaGithub></FaGithub> <p>Github</p>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="divider invisible md:visible divider-horizontal"></div> */}
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="card shrink-0 w-full md:w-1/2 overflow-x-hidden">
            <form ref={form} onSubmit={handleSubmit} className="card-body">
              <h1 className="mt-5 text-2xl font-bold">Message Me</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  name="from_subject"
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  name="message"
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Send Message" className="btn btn-outline w-1/2 mx-auto duration-300" />
                 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
