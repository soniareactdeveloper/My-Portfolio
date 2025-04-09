import { useState } from "react";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  const [showEmail, setShowEmail] = useState(false);

  const handleButtonClick = () => {
    setShowEmail((prev) => !prev); 
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center justify-center md:flex-row flex-col-reverse mb-12">
          <img
            src="https://cdn.dribbble.com/users/891859/screenshots/3472550/hireme.gif"
            alt="Hiring Animation"
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src="https://cdn.dribbble.com/users/891859/screenshots/3472550/hireme.gif"
            data-aos="fade-up"
            alt="Hiring Animation"
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm p-6 py-12 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            {/* Hire Me Button */}
            <button
              className="btn bg-dark_primary text-white hover:bg-dark_secondary transition-all duration-300 mr-4"
              onClick={handleButtonClick}
              aria-expanded={showEmail ? "true" : "false"} 
              aria-label="Toggle email visibility"
            >
              {Hireme.btnText}
            </button>

            {/* Show Email with Smooth Transition */}
            {showEmail && (
              <div
                className="mt-4 transition-all duration-500 opacity-100"
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                <a
                  href="mailto:soniareactdeveloper@gmail.com"
                  className="text-dark_primary underline"
                  aria-label="Email Sonia"
                >
                  soniareactdeveloper@gmail.com
                </a>
              </div>
            )}

            {/* Download CV Button with Tooltip */}
            <div className="mt-4 inline-block relative">
              <a
                href="/sonia.pdf"
                download
                className="btn bg-dark_primary text-white hover:bg-dark_secondary transition-all duration-300"
                aria-label="Download CV"
              >
                Download CV
              </a>
              <span className="absolute text-xs text-white bg-black p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-10 left-1/2 transform -translate-x-1/2">
                Click to Download CV
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;

