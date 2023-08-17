import { useEffect } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-primary-200 text-white">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Project />
      <Contact />
    </section>
  );
};

export default LandingPage;
