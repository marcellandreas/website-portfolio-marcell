import { useState } from "react";
import { skillsData } from "../../assets/data";

export const SkillTemplate = () => {
  const [activeTabs, setActiveTabs] = useState(false);

  const isToolsTab = activeTabs;

  // Filter berdasarkan kategori tab yang aktif
  const filteredCategories = skillsData.skills.filter((category) => {
    const toolsCategory = ["Tools", "Cloud"];
    return isToolsTab
      ? toolsCategory.includes(category.category)
      : !toolsCategory.includes(category.category);
  });

  return (
    <section className="w-full flex flex-col gap-8 text-white px-4 relative p-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="md:text-2xl text-lg font-bold">
          What My Programming Skills Included?
        </h2>
        <p className="text-primary-400 mb-2 text-sm md:text-base">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center items-center">
        <div className="relative bg-primary-300 p-2 rounded-xl flex justify-center items-center w-44">
          <div
            className={`absolute top-2 left-2 w-20 h-10 rounded-xl bg-primary-100 transition-all duration-300`}
            style={{
              transform: activeTabs ? "translateX(88px)" : "translateX(0)",
            }}
          />
          <div
            className="relative z-10 font-bold w-20 text-center py-2 cursor-pointer"
            onClick={() => setActiveTabs(false)}
          >
            Skills
          </div>
          <div
            className="relative z-10 font-bold w-20 text-center py-2 cursor-pointer"
            onClick={() => setActiveTabs(true)}
          >
            Tools
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredCategories.map((category, index) => (
          <fieldset
            key={index}
            className="border border-primary-300 rounded-xl p-4"
          >
            <legend className="text-primary-500 font-semibold px-2 text-lg">
              {category.category}
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {category.list.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow hover:scale-105 hover:shadow-xl transition-all"
                >
                  {skill.logo && (
                    <ion-icon
                      name={skill.logo}
                      size="large"
                      className="text-primary-100 mb-2"
                    ></ion-icon>
                  )}
                  <p className="text-sm text-primary-300 text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </section>
  );
};
