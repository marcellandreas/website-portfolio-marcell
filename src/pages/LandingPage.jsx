import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  AboutTemplate,
  BannerTemplate,
  MyTimeLineTemplate,
  SkillTemplate,
  ProjectTemplate,
  ContactTemplate,
} from "../routers/index";

export const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-primary-200 text-white flex flex-col gap-2">
      <BannerTemplate />
      <AboutTemplate />
      <SkillTemplate />
      <MyTimeLineTemplate />
      <ProjectTemplate />
      <ContactTemplate />
    </section>
  );
};
