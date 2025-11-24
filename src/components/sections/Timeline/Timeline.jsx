import { useState } from 'react';
import { SectionContainer, SectionHeader } from '../SectionContainer/SectionContainer';
import { Card, CardBody } from '../../common/Card/Card';
import { Heading, Text, Badge } from '../../common/Typography/Typography';
import { Modal } from '../../common/Modal/Modal';
import { ExperienceData } from '../../../assets/data/Experience.mock';
import { EducationData, EducationNonFormalData } from '../../../assets/data/Education.mock';

const TIMELINE_DATA = {
  experience: ExperienceData,
  education: EducationData,
  educationNonFormal: EducationNonFormalData
};

const TimelineItem = ({ item, onClick }) => (
  <Card className="relative">
    <CardBody>
      <div className="flex items-start gap-4">
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
          ${item.type === 'work' ? 'bg-primary-100 text-black' : 'bg-primary-300 text-white'}
        `}>
          <ion-icon 
            name={item.type === 'work' ? 'briefcase' : 'school'} 
            size="small"
          ></ion-icon>
        </div>
        
        <div className="flex-1">
          <Heading level={5} className="text-white mb-1">
            {item.position || item.degree}
          </Heading>
          <Text size="sm" color="primary" className="mb-2">
            {item.company || item.institution}
          </Text>
          <Text size="sm" className="mb-3">
            {item.date}
          </Text>
          <button
            onClick={() => onClick(item)}
            className="text-primary-100 text-sm hover:underline"
          >
            View Details →
          </button>
        </div>
      </div>
    </CardBody>
  </Card>
);

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedItem, setSelectedItem] = useState(null);

  const data = TIMELINE_DATA[activeTab];

  return (
    <SectionContainer id="timeline" background="primary">
      <SectionHeader
        title="My Journey"
        subtitle="Experience & Education"
        description="My professional experience and educational background"
      />

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-primary-600 p-1">
          <button
            onClick={() => setActiveTab('experience')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${activeTab === 'experience' 
                ? 'bg-primary-100 text-black' 
                : 'text-white hover:text-primary-100'
              }
            `}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${activeTab === 'education' 
                ? 'bg-primary-100 text-black' 
                : 'text-white hover:text-primary-100'
              }
            `}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('educationNonFormal')}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-300
              ${activeTab === 'educationNonFormal' 
                ? 'bg-primary-100 text-black' 
                : 'text-white hover:text-primary-100'
              }
            `}
          >
            Education Non Formal
          </button>
        </div>
      </div>

      {/* Timeline Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <TimelineItem 
              item={item} 
              onClick={setSelectedItem}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title="Details"
      >
        {selectedItem && (
          <div className="text-white">
            <Heading level={4} className="mb-4">
              {selectedItem.position || selectedItem.degree}
            </Heading>
            <ul className="space-y-2">
              {selectedItem.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary-100 mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </SectionContainer>
  );
};