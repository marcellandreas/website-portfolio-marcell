import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      name: "HTML",
    },
    {
      logo: "logo-css3",
      name: "CSS",
    },
    {
      logo: "logo-javascript",
      name: "JavaScript",
    },
    {
      logo: "logo-react",
      name: "ReactJS",
    },
    {
      logo: "logo-vue",
      name: "VueJS",
    },
  ];
  return (
    <section id="skills" className="py-10 px-4 bg-primary-300 relative">
      <div className="mt-8 text-gray-100 text-center">
        <div data-aos="fade-up" className=" flex flex-col items-center m-0 p-0">
          <h1 className="text-4xl font-semibold">
            My <span className="text-primary-100">Skills</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          <hr className="border-primary-100 fonr-bold border-1 h-[5px] w-16 " />
        </div>
        <div
          data-aos="fade-down"
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
        >
          {skills?.map((skill, i) => (
            // <div
            //   key={i}
            //   className="border-2 group border-primary-100 relative min-w-[10rem] max-w-[16rem] bg-primary-200 p-10 rounded-xl"
            // >
            //   <div
            //     // style={{
            //     //   background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
            //     // }}
            //     className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full border border-white"
            //   >
            //     <div className="text-5xl md:text-6xl w-16 h-16 md:w-28 md:h-28 bg-primary-200 rounded-full flex items-center justify-center group-hover:text-primary-100">
            //       <ion-icon name={skill.logo}></ion-icon>
            //     </div>
            //   </div>
            //   <p className="text-xl mt-3">{skill.level}</p>
            // </div>
            <div
              key={i}
              className="w-36 md:w-44 h-24 border border-primary-100 p-4 relative rounded-xl"
            >
              <div
                className="absolute text-5xl -top-9 left-1/2 rounded-full w-20 h-20 flex items-center justify-center  
          card-skill
           bg-primary-300 border-primary-100 border-b-2
          "
              >
                <ion-icon name={skill.logo}></ion-icon>
              </div>
              <h3 className="text-2xl absolute bottom-0 left-1/2   card-skill p-2 font-bold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        {/* card */}
        {/* <div className="mt-10"></div>
        <div className=" w-44 h-24 border border-primary-100 p-4 relative rounded-xl">
          <div
            className="absolute text-5xl -top-9 left-1/2 rounded-full w-20 h-20 flex items-center justify-center  
          card-skill
           bg-primary-300 border-primary-100 border-b-2
          "
          >
            <ion-icon name="logo-html5"></ion-icon>
          </div>
          <h3 className="text-2xl absolute bottom-0 left-1/2   card-skill p-2 font-bold">
            HTML
          </h3>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
