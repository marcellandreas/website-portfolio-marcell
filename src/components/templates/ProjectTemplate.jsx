import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { experience_projects } from "../../assets/data";
import "../../assets/style/Project.css";
import { CardProject } from "../molecules/Card/CardProject";

export const ProjectTemplate = () => {
  const [visibleProjects, setVisibleProjects] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleProjects(3);
      } else {
        setVisibleProjects(5);
      }
    };

    // Debounce Resize
    let resizeTimeout;
    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debounceResize);
    handleResize();

    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  // Mengurutkan projects berdasarkan endDate dari yang terbaru
  const sortedProjects = [...experience_projects].sort((a, b) => {
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateB.getTime() - dateA.getTime(); // Urutan descending, terbaru di atas
  });

  const displayedProjects = sortedProjects.slice(0, visibleProjects);

  return (
    <main id="projects" className="projects-container p-6 bg-primary-200">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
        {displayedProjects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            name={project.name}
            img={project.img}
            technologies={project.technologies}
            type={project.type}
          />
        ))}
      </section>
      {experience_projects.length > visibleProjects && (
        <footer className="text-center mt-6">
          <Link
            to="/projects"
            className="bg-primary-100 text-black py-2 px-4 rounded hover:bg-primary-400 transition duration-300"
          >
            View More
          </Link>
        </footer>
      )}
    </main>
  );
};
