import { useState } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;
  const [showEmail, setShowEmail] = useState(false);

  const handleButtonClick = () => {
    setShowEmail(!showEmail); 
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            {/* Button to toggle email */}
            <button className="btn" onClick={handleButtonClick}>
              {hero.btnText}
            </button>
          </div>

          {/* Show email when button is clicked */}
          {showEmail && (
            <div className="mt-4">
              <a href="mailto:soniareactdeveloper@gmail.com" className="text-dark_primary underline">
                soniareactdeveloper@gmail.com
              </a>
            </div>
          )}

          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* second column */}
        <div className="md:h-[37rem] h-96 mr-[180px]">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
