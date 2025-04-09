import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          data-aos="fade-left"
          spaceBetween={20}
          modules={[Pagination]}
          className="rounded-2xl max-w-3xl w-full drop-shadow-primary self-center" 
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className="bg-white rounded-3xl p-10 border-b-8 border-[#FAF9FD] h-fit min-h-[400px] flex flex-col justify-between"
            >
              <img
                src={content.image}
                alt="Project Screenshot"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-3 mt-4">
                <h5 className="font-bold font-Poppins text-lg">{content.title}</h5>
                <button className="font-bold text-primary self-end hover:underline">
                  <a href={content.liveLink} target="_blank" rel="noopener noreferrer">
                    Explore Project
                  </a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
