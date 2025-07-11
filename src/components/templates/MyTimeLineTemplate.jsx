import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { education_Data, experience_Data } from "../../assets/data";
import { Card, CardContent } from "../molecules/Card/Card";

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
  <div className="flex items-start gap-4 p-4 bg-white/10 border border-white/20 rounded-xl shadow-md hover:bg-white/20 transition">
    <div className="text-primary-300 text-2xl">{icon}</div>
    <div className="flex-1">
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-primary-400 text-sm">{subtitle}</p>
      <p className="text-primary-300 text-xs mb-2">{date}</p>
      <button
        onClick={() => onView(description)}
        className="text-sm text-primary-100 underline hover:text-primary-400"
      >
        View Details
      </button>
    </div>
  </div>
);

export const MyTimeLineTemplate = ({ openModal }) => {
  const [activeTab, setActiveTab] = useState("Experience");

  const renderContent = () => {
    if (activeTab === "Experience") {
      return experience_Data.map((exp, i) => (
        <TimelineCardItem
          key={i}
          icon={<FaBriefcase />}
          title={exp.position}
          subtitle={exp.company}
          date={exp.date}
          description={exp.description}
          onView={openModal}
        />
      ));
    } else {
      return education_Data.map((edu, i) => (
        <TimelineCardItem
          key={i}
          icon={<FaGraduationCap />}
          title={edu.degree}
          subtitle={edu.institution}
          date={edu.date}
          description={edu.description}
          onView={openModal}
        />
      ));
    }
  };

  return (
    <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-4 rounded-2xl text-white">
      <CardContent className="p-2">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-white/20 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.label
                  ? "text-primary-100 border-primary-100"
                  : "text-white/60 border-transparent hover:text-primary-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-4">{renderContent()}</div>
      </CardContent>
    </Card>
  );
};
