import { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import MyTimeline from "../components/MyTimeline";

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
