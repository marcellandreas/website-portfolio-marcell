import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { experience_projects } from "../../assets/data";
import "../../assets/style/Project.css";

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

  const displayedProjects = experience_projects.slice(0, visibleProjects);

  return (
    <main id="projects" className="projects-container p-6 bg-primary-200">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
        {displayedProjects.map((project) => (
          <article
            key={project.id}
            className="project-card relative bg-primary-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-y-15"
          >
            <Link
              to={`/projects/${project.id}`}
              aria-label={`View project ${project.name}`}
            >
              <div className="project-inner">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                  <p className="text-white">Click to details</p>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-semibold text-primary-100">
                    {project.name}
                  </h2>
                  <p className="text-gray-400">{project.role}</p>
                  <p className="text-sm text-gray-500">{project.type}</p>
                </div>
              </div>
            </Link>
          </article>
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
