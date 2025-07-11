import { skillsData } from "../../assets/data";

export const SkillTemplate = () => {
  return (
    <section className="w-full text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary-400 mb-2 text-sm md:text-base">
          These are the technologies and tools I've worked with on my journey.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto px-4">
        {skillsData.skills.flatMap((category) =>
          category.list.map((skill, idx) => (
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
          ))
        )}
      </div>
    </section>
  );
};
