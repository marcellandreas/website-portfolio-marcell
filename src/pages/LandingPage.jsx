import About from "../components/About";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

const LandingPage = () => {
  return (
    <section className="bg-primary-200 text-white">
      <Banner />
      <About />
      <Skills />
    </section>
  );
};

export default LandingPage;
