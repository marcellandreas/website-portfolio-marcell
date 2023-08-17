import React, { useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import todos from "../../assets/images/todos.png";
import streaming from "../../assets/images/streaming.png";
import capstone from "../../assets/images/capstone.jpeg";
import qr from "../../assets/images/qr.jpeg";
import catalog from "../../assets/images/catalog.jpeg";
import firstScaling from "../../assets/images/first-app.png";
import projectTravellian from "../../assets/images/project-travellian.jpeg";
import projectJawara from "../../assets/images/project-jawara.jpeg";
import miniProject from "../../assets/images/mini-project.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: capstone,
      name: "Capstone Project MSIB B3 – Aplikasi Pembayaran Online “My Cuan” ",
      github_link: "https://github.com/capstone-proj-alterra-kel2/PPOB_ReactJS",
      live_link: "https://ppob-react-js.vercel.app/",
      deskrispi: [
        `"Payment Point Online Bank" or abbreviated as PPOB is a real-time online bill payment service available 24/7, enabling faster, accurate, and secure data and fund reconciliation processes.`,
      ],
    },
    {
      img: miniProject,
      name: "Mini Project MSIB B3 - Ticket bioskop",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "http://m-tix.surge.sh/",
      deskrispi: [
        "This is an individual project at Alterra Academy, creating an interactive website for online cinema ticket booking, enabling users to enjoy a more convenient and comfortable movie-watching experience.",
      ],
    },
    {
      img: streaming,
      name: "Self Project - Movies App with TMDB API React JS",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://m-film.surge.sh/",
      deskrispi: [
        "Self Project - Creating a professional website for streaming movies using the `TMDB API`.",
      ],
    },
    {
      img: todos,
      name: "Self Project - To do app",
      github_link: "https://github.com/marcellandreas/todos_app",
      live_link: "http://catatan-todo.surge.sh/",
      deskrispi: [
        "Self Project - Creating a simple website to perform CRUD operations by implementing it as a to-do list website.",
      ],
    },
    {
      img: qr,
      name: "Self Project - QR Generator",
      github_link: "https://github.com/marcellandreas/simple-qr-code",
      live_link: "http://create-qr-code.surge.sh/",
      deskrispi: [
        "Self Project - Creating a simple website to convert links into QR codes.",
      ],
    },
    {
      img: firstScaling,
      name: "Self Project - Slicing Real Estate",
      github_link:
        "https://github.com/marcellandreas/Slicing_page/tree/master/homeland",
      live_link: "",
      deskrispi: [
        "Self Project - Creating a real estate website by implementing Tailwind CSS and ReactJS in its development.",
      ],
    },
    {
      img: projectJawara,
      name: "Mini Bootcamp Progate HTML & CSS – Jawara Movie",
      github_link: "https://github.com/marcellandreas/progate-project-jawara",
      live_link: "https://codesandbox.io/live/60ec9189f73",
      deskrispi: [
        "Creating a cinema ticket booking interface using HTML and basic CSS.",
      ],
    },
    {
      img: catalog,
      name: "Project-Based Virtual Intern : Frontend – Core Initiative x Rakamin Academy - Ecommerce-catalog",
      github_link: "https://github.com/marcellandreas/ecommerce-catalog",
      live_link: "https://ecommerce-catalog-teal.vercel.app/",
      deskrispi: [
        "Project-Based Virtual Intern: Frontend - Core Initiative x Rakamin Academy - Created to fulfill the final assignment in the core initiative's internship, this project utilizes VueJS to develop an E-Commerce website focused on clothing purchases.",
      ],
    },
    {
      img: projectTravellian,
      name: "Landing Page Travellian",
      github_link:
        "https://github.com/marcellandreas/Slicing_page/tree/master/travellian",
      live_link: "",
      deskrispi: ["Landing Page Travellian"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white min-w-full relative overflow-hidden "
    >
      <div data-aos="fade-right" className="text-center z-10 relative">
        <div className=" flex flex-col items-center m-0 p-0">
          <h1 className="text-4xl font-bold uppercase ">
            My <span className="text-primary-100">Projects</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
          <hr className="border-primary-100 fonr-bold border-1 h-[5px] w-16 " />
        </div>
      </div>
      <br />
      <div
        data-aos="fade-left"
        className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative z-20 "
      >
        <div className=" w-full">
          <Swiper
            slidesPerview={0.8}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            pagination={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className=" w-full min-h-[460px] p-4 bg-primary-300 rounded-xl ">
                  <div className="content-card-hover">
                    <img
                      src={project_info.img}
                      alt=""
                      className="rounded-lg w-full h-[300px]"
                    />
                    <div className="content-hover">
                      {project_info.deskrispi.map((data) => {
                        return <p>{data}</p>;
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl my-4 min-h-[70px] text-name font-semibold ">
                    {project_info.name}
                  </h3>
                  <div className="flex gap-3">
                    {project_info.github_link && (
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-white font-semibold border-2 border-primary-100 px-2 py-1 inline-block rounded-lg"
                      >
                        Github
                      </a>
                    )}
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="text-white font-semibold border-2 border-primary-100 px-2 py-1 inline-block rounded-lg"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* uhh */}
      <div className="circle-2 h-[80vh] w-[80vh] rounded-full bg-primary-600 absolute -bottom-40 -left-60 z-10 "></div>
      <div className="circle-2 h-[80vh] w-[80vh] rounded-full bg-primary-600 absolute -top-20 -right-60 z-10"></div>
    </section>
  );
};

export default Project;
