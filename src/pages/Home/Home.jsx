import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero } from '../../components/sections/Hero/Hero';
import { About } from '../../components/sections/About/About';
import { Skills } from '../../components/sections/Skills/Skills';
import { Timeline } from '../../components/sections/Timeline/Timeline';
import { Projects } from '../../components/sections/Projects/Projects';
import { Contact } from '../../components/sections/Contact/Contact';

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="bg-primary-200">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};