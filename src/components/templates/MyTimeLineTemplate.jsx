import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { EducationData } from "../../assets/data/Education.mock.jsx";
import { ExperienceData } from "../../assets/data/Experience.mock.jsx";
import { Heading } from "../atoms/Typography.jsx";
import { DividerAtom } from "../atoms/DividerAtom.jsx";

const tabs = [
  { label: "Experience", icon: <FaBriefcase /> },
  { label: "Education", icon: <FaGraduationCap /> },
];

const TimelineCardItem = ({
  icon,
  title,
  subtitle,
  date,
  description,
  onView,
}) => (
  <div className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:scale-[1.015] transition-all">
    <div className="text-primary-100 text-3xl">{icon}</div>
    <div className="flex-1">
      <h4 className="text-white font-semibold text-lg">{title}</h4>
      <p className="text-primary-400 text-sm">{subtitle}</p>
      <p className="text-primary-300 text-xs mb-3">{date}</p>
      <button
        onClick={() => onView(description)}
        className="text-sm text-primary-100 underline hover:text-white transition"
      >
        View Details
      </button>
    </div>
  </div>
);

export const MyTimeLineTemplate = ({ openModal }) => {
  const [activeTab, setActiveTab] = useState("Experience");

  const renderContent = () => {
    const data = activeTab === "Experience" ? ExperienceData : EducationData;

    return data.map((item, i) => (
      <TimelineCardItem
        key={i}
        icon={
          activeTab === "Experience" ? <FaBriefcase /> : <FaGraduationCap />
        }
        title={activeTab === "Experience" ? item.position : item.degree}
        subtitle={activeTab === "Experience" ? item.company : item.institution}
        date={item.date}
        description={item.description}
        onView={openModal}
      />
    ));
  };

  return (
    <section className="flex flex-col gap-8 w-full px-4 py-10">
      {/* Title & Intro */}
      <div className="text-center">
        <Heading text="Education and" highlight="Experience" />
        <DividerAtom />
        <p className="text-primary-400 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          My education in Information Systems has provided me with a solid
          foundation in software development. Through internships and various
          projects, I’ve gained practical experience in building user-focused
          applications and collaborating within agile teams.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 border-b border-white/10 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full transition-colors 
              ${
                activeTab === tab.label
                  ? "bg-primary-100 text-black shadow"
                  : "text-primary-300 hover:text-white hover:bg-white/10"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline Items */}
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </section>
  );
};
