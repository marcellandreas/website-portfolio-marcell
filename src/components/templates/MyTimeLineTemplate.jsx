import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education_Data, experience_Data } from "../../assets/data";
import "../../assets/style/MyTimeLine.css";

import Modal from "react-modal";

Modal.setAppElement("#root"); // Set app element untuk aksesibilitas

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState([]);

  const openModal = (description) => {
    setSelectedDescription(description); // Simpan array deskripsi
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDescription([]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-primary-100 mb-4 text-center">
        Experience
      </h3>
      <VerticalTimeline>
        {experience_Data.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={<FaBriefcase />}
            iconStyle={{ background: "#13FF00", color: "#fff" }} // Kustomisasi ikon
            contentStyle={{ background: "#202020", color: "#fff" }} // Kustomisasi konten
            contentArrowStyle={{ borderRight: "7px solid #202020" }} // Kustomisasi panah
            dateClassName="text-primary-400"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <h4 className="text-lg text-primary-400">{exp.company}</h4>
            <button
              onClick={() => openModal(exp.description)} // Kirim array deskripsi ke modal
              className="mt-2 text-primary-500 underline cursor-pointer"
            >
              View Details
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Modal untuk deskripsi pengalaman */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Experience Description"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-xl font-semibold text-primary-100">
          Experience Description
        </h2>
        <ul className="list-disc pl-5 mt-2 text-primary-500">
          {selectedDescription.map((item, index) => (
            <li key={index} className="mt-1">
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-primary-100 text-gray-800 rounded hover:bg-primary-200 transition"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

const Education = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState([]);

  const openModal = (description) => {
    setSelectedDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDescription([]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-primary-100 mb-4 text-center">
        Education
      </h3>
      <VerticalTimeline>
        {education_Data.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={edu.date}
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#13FF00", color: "#fff" }}
            contentStyle={{ background: "#202020", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #202020" }}
            dateClassName="text-primary-400"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <h4 className="text-lg text-primary-400">{edu.institution}</h4>
            <button
              onClick={() => openModal(edu.description)} // Kirim array deskripsi ke modal
              className="mt-2 text-primary-500 underline cursor-pointer"
            >
              View Details
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Modal untuk deskripsi pendidikan */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Education Description"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2 className="text-xl font-semibold text-primary-100">
          Education Description
        </h2>
        <ul className="list-disc pl-5 mt-2 text-primary-500">
          {selectedDescription.map((item, index) => (
            <li key={index} className="mt-1">
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-primary-100 text-gray-800 rounded hover:bg-primary-200 transition"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export const MyTimeLineTemplate = () => {
  return (
    <section
      id="timeline"
      className="py-16 px-6 bg-primary-200 min-h-screen border-t-2 border-primary-300"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
          My <span className="text-primary-100">Timeline</span>
        </h1>

        <Tabs>
          <TabList className="flex justify-center mb-6">
            <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-primary-500 hover:text-white focus:outline-none border-b-2 border-transparent hover:border-white transition">
              Experience
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-primary-500 hover:text-white focus:outline-none border-b-2 border-transparent hover:border-white transition">
              Education
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <Experience />
            </TabPanel>
            <TabPanel>
              <Education />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
