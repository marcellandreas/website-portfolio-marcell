import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import gaya timeline
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // Import ikon dari react-icons
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import gaya tabs

import { experience_Data, education_Data } from "../../assets/data";

const Experience = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary-100 mb-4">
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
            contentArrowStyle={{ borderRight: "7px solid  #202020" }} // Kustomisasi panah
            dateClassName="text-primary-400"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <h4 className="text-lg text-primary-400">{exp.company}</h4>
            {exp.description.map((item) => (
              <li className="mt-2 text-primary-500">{item}</li>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary-100 mb-4">Education</h3>
      <VerticalTimeline>
        {education_Data.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={edu.date}
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#13FF00", color: "#fff" }} // Kustomisasi ikon
            contentStyle={{ background: "#202020", color: "#fff" }} // Kustomisasi konten
            contentArrowStyle={{ borderRight: "7px solid  #202020" }} // Kustomisasi panah
            dateClassName="text-primary-400"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <h4 className="text-lg text-primary-400">{edu.institution}</h4>
            {edu.description.map((item) => (
              <li className="mt-2 text-primary-500">{item}</li>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const MyTimeline = () => {
  return (
    <section
      id="timeline"
      className="py-16 px-6 bg-primary-200 min-h-screen border-t-2 border-primary-300 "
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
          My <span className="text-primary-100">Timeline</span>
        </h1>

        <Tabs>
          <TabList className="flex justify-center mb-6">
            <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-primary-500 hover:text-white focus:outline-none">
              Experience
            </Tab>
            <Tab className="px-4 py-2 cursor-pointer text-lg font-medium text-primary-500 hover:text-white focus:outline-none">
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

export default MyTimeline;
