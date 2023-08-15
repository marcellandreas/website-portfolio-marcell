import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      // level: "Advance",
      // count: 86,
    },
    {
      logo: "logo-css3",
      // level: "Expect",
      // count: 90,
    },
    {
      logo: "logo-javascript",
      // level: "Intermediate",
      // count: 70,
    },
    {
      logo: "logo-react",
      // level: "Intermediate",
      // count: 80,
    },
    {
      logo: "logo-vue",
      // level: "Beginer",
      // count: 30,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-primary-300 relative">
      <div className="mt-8 text-gray-100 text-center">
        <div data-aos="fade-up">
          <h3 className="text-4xl font-semibold">
            My <span className="text-primary-100">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        </div>
        <div
          data-aos="fade-down"
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
        >
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-primary-100 relative min-w-[10rem] max-w-[16rem] bg-primary-200 p-10 rounded-xl"
            >
              <div
                // style={{
                //   background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                // }}
                className="w-32 h-32 flex items-center justify-center rounded-full border border-white"
              >
                <div className="text-6xl w-28 h-28 bg-primary-200 rounded-full flex items-center justify-center group-hover:text-primary-100">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
