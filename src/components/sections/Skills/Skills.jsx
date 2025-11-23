import { useState } from 'react';
import { SectionContainer, SectionHeader } from '../SectionContainer/SectionContainer';
import { Card, CardHeader, CardBody } from '../../common/Card/Card';
import { Heading, Text, Badge } from '../../common/Typography/Typography';

const SKILLS_DATA = {
  technical: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: 'logo-react' },
        { name: 'JavaScript', level: 85, icon: 'logo-javascript' },
        { name: 'TypeScript', level: 75, icon: 'logo-typescript' },
        { name: 'HTML/CSS', level: 95, icon: 'logo-html5' },
        { name: 'Tailwind CSS', level: 90, icon: 'logo-css3' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 70, icon: 'logo-nodejs' },
        { name: 'Express', level: 65, icon: 'server-outline' },
        { name: 'MongoDB', level: 60, icon: 'logo-mongodb' }
      ]
    }
  ],
  tools: [
    {
      category: 'Development Tools',
      list: ['Git', 'VS Code', 'Postman', 'Figma', 'Chrome DevTools']
    },
    {
      category: 'Cloud & Deployment',
      list: ['Vercel', 'Netlify', 'GitHub Pages', 'Firebase']
    }
  ]
};

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <div className="flex items-center gap-2">
        <ion-icon name={skill.icon} class="text-primary-100"></ion-icon>
        <Text size="sm">{skill.name}</Text>
      </div>
      <Text size="sm" color="primary">{skill.level}%</Text>
    </div>
    <div className="h-2 bg-primary-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary-100 to-green-400 transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <SectionContainer id="skills" background="primary">
      <SectionHeader
        title="My Skills"
        subtitle="Technologies I work with"
        description="A comprehensive overview of my technical skills and tools"
      />

      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-primary-600 p-1">
          <button
            onClick={() => setActiveTab('technical')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${activeTab === 'technical' 
                ? 'bg-primary-100 text-black' 
                : 'text-white hover:text-primary-100'
              }
            `}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${activeTab === 'tools' 
                ? 'bg-primary-100 text-black' 
                : 'text-white hover:text-primary-100'
              }
            `}
          >
            Tools & Platforms
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {activeTab === 'technical' ? (
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS_DATA.technical.map((category, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <Heading level={4} className="text-primary-100">
                    {category.category}
                  </Heading>
                </CardHeader>
                <CardBody>
                  {category.skills.map((skill, idx) => (
                    <SkillBar key={idx} skill={skill} />
                  ))}
                </CardBody>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS_DATA.tools.map((category, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <Heading level={4} className="text-primary-100">
                    {category.category}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    {category.list.map((tool, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};