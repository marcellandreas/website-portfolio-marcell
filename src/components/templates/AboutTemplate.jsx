import { Title } from "../../routers";
import { ButtonDownloadResume } from "../atoms/Button";

export const AboutTemplate = () => {
  return (
    <div className="flex flex-col w-full ">
      <Title level={2} className="text-primary-100 mb-2">
        Hello
      </Title>
      <p className="text-lg md:text-xl font-semibold mb-4 text-white">
        Here's who I am & what I do
      </p>
      <div>
        <ButtonDownloadResume
          href="/assets/FE-CV-Marcell-ENG.pdf"
          icon="cloud-download-outline"
        >
          Resume
        </ButtonDownloadResume>
      </div>
      <p className="text-primary-400 text-sm md:text-base mb-6 pt-5">
        I am a frontend web developer with a strong interest in technological
        advancements. My focus is on fullstack web development using JavaScript,
        particularly on the frontend side. I have good time management skills, a
        passion for continuous learning, and a structured approach to work.
        Currently, I am actively developing my skills as a Front End Developer
        and committed to growing into a competent Software Engineer who can
        contribute effectively to various cross-disciplinary projects.
      </p>
    </div>
  );
};
