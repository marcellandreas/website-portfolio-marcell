import { SectionContainer, SectionHeader } from '../SectionContainer/SectionContainer';
import { Card, CardBody } from '../../common/Card/Card';
import { Heading, Text } from '../../common/Typography/Typography';
import { IconButton } from '../../common/Button/Button';

const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' }
];

export const About = () => {
  return (
    <SectionContainer id="about" background="secondary">
      <SectionHeader
        title="About Me"
        subtitle="Get to know who I am"
        description="Learn more about my journey, skills, and what drives my passion for web development"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Side */}
        <div className="order-2 md:order-1" data-aos="fade-right">
          <Card>
            <CardBody className="p-0">
              <img
                src="/assets/images/marcell.png"
                alt="About Me"
                className="w-full h-auto rounded-2xl"
              />
            </CardBody>
          </Card>
        </div>

        {/* Content Side */}
        <div className="order-1 md:order-2 space-y-6" data-aos="fade-left">
          <Card>
            <CardBody>
              <Heading level={3} className="text-primary-100 mb-4">
                Hello! 👋
              </Heading>
              
              <Text className="mb-4">
                I'm a passionate <span className="text-primary-100 font-semibold">Front-End Web Developer</span> with 
                a strong interest in technological advancements. My focus is on fullstack web 
                development using JavaScript, particularly on the frontend side.
              </Text>

              <Text className="mb-4">
                I have good time management skills, a passion for continuous learning, 
                and a structured approach to work. Currently, I am actively developing 
                my skills as a Front End Developer and committed to growing into a 
                competent Software Engineer.
              </Text>

              <Text>
                My goal is to contribute effectively to various cross-disciplinary 
                projects and create meaningful digital experiences that make a difference.
              </Text>

              <div className="mt-6">
                <IconButton
                  icon="cloud-download-outline"
                  label="Download My Resume"
                  href="/assets/FE-CV-Marcell-ENG.pdf"
                />
              </div>
            </CardBody>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat, index) => (
              <Card key={index} hover={false}>
                <CardBody className="text-center">
                  <Heading level={3} className="text-primary-100 mb-2">
                    {stat.value}
                  </Heading>
                  <Text size="sm">{stat.label}</Text>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};