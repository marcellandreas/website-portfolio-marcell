import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  About,
  Banner,
  Contact,
  MyTimeline,
  Navbar,
  Project,
  Skills,
} from "../components";

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-primary-200 text-white flex flex-col gap-2">
      <Navbar />
      <Banner />
      <About />
      <MyTimeline />
      <Skills />
      <Project />
      <Contact />
    </section>
  );
};

export default LandingPage;
