import React from "react";
import { useParams } from "react-router-dom"; // Jika menggunakan React Router
import { experience_projects } from "../../assets/data"; // Pastikan path ini sesuai
import { NotFound } from "../errors/404";

// Fungsi untuk format tanggal
const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

export const ProjectDetails = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const project = experience_projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <NotFound />;
  }

  return (
    <section className="project-detail-container py-20 bg-primary-200 px-6 md:px-12 lg:px-24 text-white">
      {/* Project Header */}
      <header className="mb-12 text-center relative">
        <div className="bg-gradient-to-r from-primary-400 to-primary-300 rounded-xl shadow-xl p-8 relative overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {project.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
            {project.role} - {project.type}
          </h2>
          <p className="text-gray-300 text-lg">{project.source}</p>

          {/* Decorative elements (optional) */}
          <div className="absolute inset-0 rounded-xl border-2 border-white opacity-25 pointer-events-none"></div>
          <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-white opacity-10 rounded-full animate-pulse"></div>
        </div>
      </header>

      {/* Project Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Project Image */}
        <div className="project-image">
          <img
            loading="lazy"
            src={project.img}
            alt={project.name}
            className="w-full h-auto    md:min-w-[500px] rounded-lg shadow-lg object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Project Timeline & Status moved below the image */}
          <div className="flex flex-col md:flex-row md:space-x-12 mb-4 mt-5">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-primary-100">
                Project Timeline
              </h3>
              <div className="bg-primary-300 text-white p-4 rounded-lg shadow-md">
                <p className="text-lg">
                  {formatDate(project.startDate)} -{" "}
                  {formatDate(project.endDate)}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary-100">
                Project Status
              </h3>
              <div
                className={`bg-${
                  project.status === "Completed" ? "primary-100" : "primary-500"
                } text-primary-300 font-bold p-4 rounded-lg shadow-md flex justify-center items-center`}
              >
                <p className="text-lg">{project.status}</p>
              </div>
            </div>
          </div>

          {/* GitHub & Live Demo as Buttons */}
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-300 transform hover:scale-105">
                  View GitHub Repo
                </button>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-all duration-300 transform hover:scale-105">
                  View Live Project
                </button>
              </a>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="project-details flex flex-col justify-start">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary-100">
              Project Overview
            </h3>
            <p className="text-gray-300 text-lg">{project.description}</p>
          </div>

          {/* Technologies Used - Displayed as Button-Like Cards */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary-100">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-primary-300 text-white py-1 px-3 rounded-lg shadow-md font-medium text-sm md:text-base transition-transform duration-300 hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary-100">
              Responsibilities
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {project.responsibilities.map((resp, index) => (
                <li key={index} className="text-gray-300 text-lg">
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary-100">
              Team Size & Roles
            </h3>
            <p className="text-gray-300 text-lg mb-2">
              {project.team.size} Members
            </p>
            <div className="flex flex-wrap gap-2">
              {project.team.roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-primary-300 text-white py-1 px-3 rounded-lg shadow-md font-medium text-sm md:text-base transition-transform duration-300 hover:scale-105"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
