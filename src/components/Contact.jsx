import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1v9c7w8",        // Your EmailJS service ID
        "template_lpm4m2u",       // Your EmailJS template ID
        form.current,
        "q4XQufRR2jpP0dgxH"       // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Clear form fields
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              required
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
              className="border border-slate-600 p-3 rounded bg-transparent text-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-white text-dark_primary font-semibold shadow-md hover:bg-gray-200 transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Social Links */}
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank" rel="noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
