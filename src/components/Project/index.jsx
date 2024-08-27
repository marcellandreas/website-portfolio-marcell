import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project_Data } from "../../assets/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-primary-900 text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase mb-3">
          My <span className="text-primary-100">Projects</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-5">
          Showcasing my awesome works
        </p>
        <hr className="border-primary-100 border-t-2 w-20 mx-auto" />
      </div>

      {/* Project Slider */}
      <div className="flex justify-center max-w-6xl mx-auto relative z-20">
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            pagination={false}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {Project_Data.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="relative p-4 bg-primary-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                    <div className="text-white text-center">
                      {project_info.deskrispi.map((data, index) => (
                        <p key={index} className="mb-2">
                          {data}
                        </p>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl my-4 min-h-[70px] text-name font-semibold">
                    {project_info.name}
                  </h3>
                  {!project_info.private && (
                    <div className="flex flex-wrap gap-3">
                      {project_info.github_link && (
                        <a
                          href={project_info.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-100 text-primary-900 font-semibold border-2 border-primary-100 px-3 py-2 rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          Github
                        </a>
                      )}
                      {project_info.live_link && (
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary-100 text-primary-900 font-semibold border-2 border-primary-100 px-3 py-2 rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[10%] left-[-10%] transform -translate-x-1/2 -translate-y-1/2 h-[70vh] w-[70vh] rounded-full bg-primary-600 z-10 opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] transform translate-x-1/2 translate-y-1/2 h-[70vh] w-[70vh] rounded-full bg-primary-600 z-10 opacity-50"></div>
    </section>
  );
};

export default Project;
