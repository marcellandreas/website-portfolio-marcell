import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center py-10 px-4 md:px-8 lg:px-16 gap-14 bg-primary-300 text-gray-100 overflow-hidden min-h-screen"
    >
      {/* Title Section */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold uppercase text-primary-100"
          data-aos="fade-down"
        >
          About <span className=" text-white">Me</span>
        </h1>
        <hr className="bg-primary-100 border-none font-bold border-1 h-[4px] md:h-[6px] w-full rounded-xl" />
      </div>

      {/* Content Section */}
      <p
        className="w-full md:w-3/4 lg:w-2/3 text-base text-justify md:text-xl md:text-center first-letter:text-4xl first-letter:font-bold first-letter:pl-4 leading-relaxed"
        data-aos="fade-up"
      >
        Fresh Graduate from Bina Sarana Informatika university with experience
        in HTML, CSS, JavaScript, React JS, and NextJS. Have high interest and
        aspiration in the field of Front End Developer. Thorough, fast in
        learning and have good problem solving skills.
      </p>

      <div className="absolute hidden md:block top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary-100 opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary-200 opacity-30 rounded-full animate-pulse" />
        {/* <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-300 opacity-40 rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2" /> */}
      </div>

      <div className="absolute left-0 bottom-0 transform translate-x-[-20%] translate-y-[10%] lg:translate-x-[-10%] lg:translate-y-[20%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="186"
          viewBox="0 0 170 186"
          fill="none"
        >
          {[...Array(4)].map((_, index) => (
            <ellipse
              key={index}
              cx={index * 51.6364 + 51.6364}
              cy="68.4819"
              rx="15.2182"
              ry="14.3727"
              fill="white"
              fillOpacity={0.09 + index * 0.02}
            />
          ))}
          {[...Array(4)].map((_, index) => (
            <circle
              key={index}
              cx={index * 51.6364 + 51.6364}
              cy="120.055"
              r="15.2182"
              fill="white"
              fillOpacity={0.07 + index * 0.02}
            />
          ))}
          {[...Array(4)].map((_, index) => (
            <circle
              key={index}
              cx={index * 51.6364 + 51.6364}
              cy="15.2182"
              r="15.2182"
              fill="white"
              fillOpacity={0.1 + index * 0.02}
            />
          ))}
          {[...Array(4)].map((_, index) => (
            <circle
              key={index}
              cx={index * 51.6364 + 51.6364}
              cy="170.782"
              r="15.2182"
              fill="white"
              fillOpacity={0.05 + index * 0.02}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default About;
