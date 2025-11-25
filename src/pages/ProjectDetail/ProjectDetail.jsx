import { useParams, useNavigate } from "react-router-dom";
import { SectionContainer } from "../../components/sections/SectionContainer/SectionContainer";
import { Card, CardBody } from "../../components/common/Card/Card";
import {
  Heading,
  Text,
  Badge,
} from "../../components/common/Typography/Typography";
import { Button, IconButton } from "../../components/common/Button/Button";
import { PROJECTS_DATA } from "../../assets/data/projects.mock.jsx";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const gridLayout = [
    "col-span-2 row-span-4",
    "col-span-2 row-span-2 col-start-3",
    "col-span-2 row-span-2 col-start-3 row-start-3",
    "col-span-2 row-span-2 col-start-5",
    "col-span-2 row-span-2 col-start-5 row-start-3",
  ];

  const project = PROJECTS_DATA.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-200">
        <div className="text-center">
          <Heading level={2} className="text-white mb-4">
            Project Not Found
          </Heading>
          <Button onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-200 min-h-screen py-20">
      <SectionContainer>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-primary-100 transition-colors mb-8"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Back</span>
        </button>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Heading level={1} gradient className="mb-4">
              {project.name}
            </Heading>
            <Text size="lg" className="mb-4">
              {project.description}
            </Text>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="primary">{project.type}</Badge>
              <Badge variant="secondary">{project.role}</Badge>
            </div>
            <div className="flex gap-4">
              {project.github && (
                <IconButton
                  icon="logo-github"
                  label="View Code"
                  href={project.github}
                />
              )}
              {project.live && (
                <IconButton
                  icon="open-outline"
                  label="Live Demo"
                  href={project.live}
                />
              )}
            </div>
          </div>

          {project.screenshots.length === 0 ? (
            <div className="mb-8">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          ) : (
            <div className="grid grid-cols-6 grid-rows-4 gap-4 mb-8">
              {project.screenshots.map((screenshot, idx) => (
                <div key={idx} className={gridLayout[idx]}>
                  <img
                    src={screenshot}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="md:col-span-2 space-y-8">
              {/* Technologies */}
              <Card data-aos="fade-up">
                <CardBody>
                  <Heading level={4} className="text-primary-100 mb-4">
                    Technologies Used
                  </Heading>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Features */}
              <Card data-aos="fade-up" data-aos-delay="100">
                <CardBody>
                  <Heading level={4} className="text-primary-100 mb-4">
                    Key Features
                  </Heading>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-100 mt-1">✓</span>
                        <Text>{feature}</Text>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Challenges */}
              <Card data-aos="fade-up" data-aos-delay="200">
                <CardBody>
                  <Heading level={4} className="text-primary-100 mb-4">
                    Challenges & Solutions
                  </Heading>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-100 mt-1">•</span>
                        <Text>{challenge}</Text>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>

            {/* Right Column - Project Info */}
            <div className="space-y-6">
              <Card data-aos="fade-left">
                <CardBody>
                  <Heading level={5} className="text-white mb-4">
                    Project Info
                  </Heading>
                  <div className="space-y-3">
                    <div>
                      <Text size="sm" color="primary">
                        Duration
                      </Text>
                      <Text size="sm">{project.duration}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="primary">
                        Team Size
                      </Text>
                      <Text size="sm">{project.team}</Text>
                    </div>
                    <div>
                      <Text size="sm" color="primary">
                        Role
                      </Text>
                      <Text size="sm">{project.role}</Text>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Share */}
              <Card data-aos="fade-left" data-aos-delay="100">
                <CardBody>
                  <Heading level={5} className="text-white mb-4">
                    Share Project
                  </Heading>
                  <div className="flex gap-2">
                    {["logo-twitter", "logo-linkedin", "logo-facebook"].map(
                      (icon, idx) => (
                        <button
                          key={idx}
                          className="
                          w-10 h-10 rounded-full bg-white/10
                          flex items-center justify-center text-white
                          hover:bg-primary-100 hover:text-black
                          transition-all duration-300
                        "
                        >
                          <ion-icon name={icon}></ion-icon>
                        </button>
                      )
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
