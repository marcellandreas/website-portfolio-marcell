import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { contactData } from "../../assets/data/ContactData.mock";
import img from "../../assets/images/marcell.png";
import { ButtonDownloadResume } from "../atoms/Button";
import { Title } from "../atoms/Typography";
import { Card, CardContent } from "../molecules/Card/Card";
import { MyTimeLineTemplate } from "./MyTimeLineTemplate";
import { SkillTemplate } from "./SkillTemplate";

export const BannerTemplate = () => {
  const [activeTab, setActiveTab] = useState("about");
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

  const tabList = [
    { id: "about", label: "Who I Am" },
    { id: "timeline", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "skill", label: "Skills" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="flex flex-col w-full p-10">
            <Title level={2} className="text-primary-100 mb-2">
              Hello
            </Title>
            <p className="text-lg md:text-xl font-semibold mb-4 text-white">
              Here's who I am & what I do
            </p>
            <div>
              <ButtonDownloadResume
                href="/assets/FE-CV-Marcell-ENG.pdf"
                icon="cloud-download-outline"
              >
                Resume
              </ButtonDownloadResume>
            </div>
            <p className="text-primary-400 text-sm md:text-base mb-6 pt-5">
              I am a frontend web developer with a strong interest in
              technological advancements. My focus is on fullstack web
              development using JavaScript, particularly on the frontend side. I
              have good time management skills, a passion for continuous
              learning, and a structured approach to work. Currently, I am
              actively developing my skills as a Front End Developer and
              committed to growing into a competent Software Engineer who can
              contribute effectively to various cross-disciplinary projects.
            </p>
          </div>
        );
      case "timeline":
        return <MyTimeLineTemplate openModal={openModal} />;
      case "projects":
        return (
          <div className="flex flex-col items-center text-white gap-4 p-10">
            <p className="text-lg">💼 Explore my project showcase</p>
            <Link
              to="/projects"
              className="px-5 py-3 bg-primary-100 text-black font-semibold rounded-lg hover:bg-white transition"
            >
              View All Projects
            </Link>
          </div>
        );
      case "skill":
        return <SkillTemplate />;
      default:
        return null;
    }
  };

  return (
    <div id="home" className="relative">
      <section className="relative w-full min-h-screen max-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500  px-4 md:px-10">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <Sparkles
                count={100}
                scale={[10, 10, 10]}
                size={2}
                speed={0.5}
                color="#00FFF7"
                opacity={0.3}
              />
              <FloatingLines />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.6}
              enablePan={false}
            />
          </Canvas>
        </div>

        <div className="absolute lg:h-full h-[10%]  md:w-1/3 w-full left-0 top-0 bg-primary-600 ">
          <Canvas
            camera={{ position: [2, 2, 2], fov: 60 }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 3, 3]} />
              <Sparkles count={20} size={2} speed={0.4} color="#13ff00" />
              <FloatingSphere />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl py-12 flex flex-col lg:flex-row items-start gap-10">
          {/* Left - Profile Image */}
          <div className="w-full lg:w-[400px]">
            <Card>
              <CardContent className="p-0">
                <div className="w-full sm:w-64 md:w-[360px] md:h-[480px] rounded-2xl overflow-hidden ring-4 ring-primary-200 flex flex-col items-center mx-auto">
                  <div className="md:h-60 h-[180px] w-[180px] p-10 md:w-60 flex items-center justify-center">
                    <img
                      src={img}
                      alt="profile"
                      className="w-full h-full object-cover border rounded-full bg-primary-200"
                      loading="lazy"
                    />
                  </div>
                  <Title
                    level={4}
                    className="text-primary-100 mb-2 text-center"
                  >
                    Marcell Andreas Samadhani Duha
                  </Title>
                  <hr className="w-4/5" />
                  <p className="text-lg md:text-xl font-semibold mb-4 text-white mt-10">
                    Front-End Web Developer
                  </p>
                  <div className="w-full bg-primary-500 h-14 items-center justify-center gap-5 flex mt-auto">
                    {contactData.map((data, i) => (
                      <a
                        key={i}
                        href={data.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-300 hover:bg-primary-100 hover:text-primary-700 transition duration-300"
                      >
                        <div className="bg-white text-black rounded-full p-2 shadow-md">
                          {data.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Tabs & Content */}
          <div className="flex-1 w-full overflow-hidden">
            {/* Tabs */}
            {/* Desktop Tabs */}
            <div className="hidden sm:flex gap-0.5 overflow-x-auto ">
              {tabList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-t-xl font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-primary-300 text-primary-700"
                      : "bg-primary-200 text-white hover:bg-primary-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            {/* Bottom Navigation Tabs for Mobile */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-primary-200 text-white shadow-md flex  justify-around items-center h-14 z-50">
              {tabList.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center text-xs ${
                    activeTab === tab.id
                      ? "text-white font-semibold"
                      : "text-white/70"
                  }`}
                >
                  {/* Optional: You can add icons here */}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-e-xl rounded-b-xl shadow-2xl max-h-[480px] h-[480px]  overflow-y-auto scrollbar-thin scrollbar-thumb-primary-300 p-4 mb-10 md:-mb-0">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>

      {modalIsOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <div className="bg-neutral-900 w-full max-w-2xl rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto border border-white/10">
            <h3 className="text-xl font-bold text-primary-100 mb-4">Details</h3>
            <ul className="list-disc pl-5 text-sm text-primary-400 space-y-2">
              {selectedDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-primary-100 text-black hover:bg-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function FloatingLines() {
  return (
    <mesh rotation={[0.3, 0.5, 0]}>
      <ringGeometry args={[2.5, 2.52, 64]} />
      <meshBasicMaterial color="#00fff7" transparent opacity={0.3} />
    </mesh>
  );
}

const FloatingSphere = () => (
  <mesh>
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshStandardMaterial
      color="#ffffff"
      transparent
      opacity={0.1}
      roughness={0.3}
      metalness={0.8}
    />
  </mesh>
);
