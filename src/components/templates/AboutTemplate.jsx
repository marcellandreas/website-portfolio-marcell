import { useEffect } from "react";
import Aos from "aos";

import { PointNine } from "../../routers";
import { SectionTitle } from "../molecules/SectionTitle";
import { SectionContent } from "../molecules/SectionContent";

export const AboutTemplate = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center py-16 px-4 md:px-8 lg:px-16 gap-14 bg-primary-300 text-gray-100 overflow-hidden min-h-screen"
    >
      {/* Section Title */}
      <SectionTitle
        headingText="About"
        highlightText="Us"
        paragraphText="Learn more about our journey, values, and mission."
      />

      {/* Section Content */}
      <SectionContent>
        I am a fresh graduate with a degree in Information Systems from Bina
        Sarana Informatika University, with a career interest in Front-end
        development. My technical skills include React.js, Next.js, and Vue.js.
        I have participated in the Kodebisat program from Codepolitan, focusing
        on Full Stack MEVN, and I have completed several web application
        projects utilizing MEVN. Additionally, I pursued self-education at
        Altera Academy, concentrating on Front-end Development and contributing
        to various collaborative projects. My internship experience as a
        software developer at Bantex Indonesia has helped me hone my
        problem-solving and communication skills. I am committed to continuously
        developing my web development skills and aspire to apply them with
        creativity and professionalism in the workplace.
      </SectionContent>

      {/* Background Effects */}
      <div className="absolute hidden md:block top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary-100 opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-primary-200 opacity-30 rounded-full animate-pulse" />
      </div>

      {/* Decorative Element */}
      <div className="absolute left-0 bottom-0 transform -translate-x-[20%] translate-y-[10%] lg:-translate-x-[10%] lg:translate-y-[20%]">
        <PointNine />
      </div>
    </section>
  );
};
