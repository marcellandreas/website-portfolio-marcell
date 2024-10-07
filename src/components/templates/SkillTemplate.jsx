import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { skillsData } from "../../assets/data";
import "../../assets/style/Project.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
export const SkillTemplate = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false, // Menampilkan titik navigasi
    infinite: true, // Mengizinkan looping
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Menampilkan satu kategori per slide
    slidesToScroll: 1, // Menggulung satu kategori per klik
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Menggunakan referensi untuk pindah ke slide berikutnya
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Menggunakan referensi untuk pindah ke slide sebelumnya
  };

  return (
    <div className="skills-container p-6 flex flex-col md:flex-row justify-center items-center">
      {/* Left Column for Header and Content */}
      <div className="left-column md:w-1/2 mb-6 md:mb-0">
        <div className="header text-center md:text-left mb-6">
          <h1 className="text-4xl font-bold mb-4 text-primary-100">
            My Skills
          </h1>
          <p className="text-lg text-primary-400 mb-4">
            Here are the skills I have acquired throughout my journey in
            software development.
          </p>
          <p className="text-md text-primary-300">
            I am constantly learning and improving my skills to keep up with the
            latest technologies and best practices.
          </p>
        </div>
      </div>

      {/* Right Column for Slider */}
      <div className="right-column md:w-1/2 w-full">
        <Slider ref={sliderRef} {...settings}>
          {skillsData.skills.map((skillCategory, index) => (
            <div key={index} className="skill-category p-4">
              <h3 className="text-2xl font-bold mb-4 text-primary-100">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap justify-center">
                {skillCategory.list.map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-item flex flex-col items-center p-4 bg-primary-200 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl m-2 w-24 md:w-32 lg:w-40"
                  >
                    {skill.logo && <ion-icon name={skill.logo}></ion-icon>}
                    <span className="text-sm md:text-lg font-medium text-primary-400 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Below the Slider */}
        <div className="navigation flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-primary-300 text-white rounded-l-lg shadow hover:bg-primary-400 transition mr-2"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-primary-300 text-white rounded-r-lg shadow hover:bg-primary-400 transition"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
