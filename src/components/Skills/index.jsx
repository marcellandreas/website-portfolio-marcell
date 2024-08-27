import React from "react";
import { skills_Data } from "../../assets/data";

const Skills = () => {
  return (
    <section
      id="skill"
      className="py-16 px-6 min-h-screen bg-primary-300 relative overflow-hidden"
    >
      <div className="mt-8 text-gray-100 text-center">
        <div data-aos="fade-up" className="flex flex-col items-center m-0 p-0">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            My <span className="text-primary-100">Skills</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg font-medium">My knowledge</p>
          <hr className="border-primary-100 font-bold border-2 h-[5px] w-16 mt-4" />
        </div>
        <div
          data-aos="fade-down"
          className="grid grid-cols-3 px-0 md:px-28 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16"
        >
          {skills_Data?.map((skill, i) => (
            <div
              key={i}
              className="w-full cursor-pointer h-28 border border-primary-100 p-4 relative rounded-xl shadow-lg bg-white bg-opacity-5 transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:bg-opacity-20 hover:shadow-2xl"
            >
              <div className="absolute text-4xl sm:text-5xl -top-8 sm:-top-9 left-1/2 transform -translate-x-1/2 rounded-full w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-primary-300 border-primary-100 border-b-2 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-[360deg]">
                <ion-icon name={skill.logo}></ion-icon>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 font-bold transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px] group-hover:text-primary-100">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* Background animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animate-pulse bg-primary-100 opacity-20 w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-full absolute top-10 left-10"></div>
        <div className="animate-pulse bg-primary-100 opacity-20 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-full absolute bottom-20 right-20"></div>
        <div className="animate-pulse bg-primary-100 opacity-20 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full absolute bottom-10 left-1/3"></div>
      </div>
    </section>
  );
};

export default Skills;
