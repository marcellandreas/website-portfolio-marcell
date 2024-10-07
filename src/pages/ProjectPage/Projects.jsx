import React, { useState } from "react";
import { Link } from "react-router-dom";
import { experience_projects } from "../../assets/data";

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query
  const filteredProjects = experience_projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main id="all-projects" className="py-20 p-6 bg-primary-200">
      <header className="mb-8">
        <div className="relative bg-gradient-to-r from-primary-500 to-primary-200 rounded-lg shadow-lg overflow-hidden p-4 md:p-6 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-md">
            All Projects
          </h1>
          <p className="text-gray-100 mt-2 mb-16 md:mb-4 text-lg">
            Explore all your amazing projects in one place!
          </p>
          <div className="absolute inset-0 bg-white opacity-20 blur-md"></div>

          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute right-4 bottom-4 md:right-6 md:bottom-6 bg-white text-black rounded px-4 py-2 shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
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
          ))
        ) : (
          <div className="col-span-1  overflow-hidden md:col-span-2 lg:col-span-3 text-center py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-80 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold text-primary-100 mb-4 animate-pulse">
                Oops! No Projects Found
              </h2>
              <p className="text-lg text-primary-300 mb-8">
                Try searching with different keywords or remove the search
                filter.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-400 rounded-full opacity-50 animate-pulse"></div>
          </div>
        )}
      </section>
    </main>
  );
}
