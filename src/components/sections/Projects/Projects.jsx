import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionContainer, SectionHeader } from '../SectionContainer/SectionContainer';
import { ProjectCard } from './ProjectCard';
import { Button } from '../../common/Button/Button';

// Mock data - replace with actual data
const PROJECTS = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration',
    img: '/assets/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    type: 'Web Application'
  },
  // Add more projects...
];

const PROJECT_FILTERS = ['All', 'Web Application', 'Mobile App', 'API'];

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <SectionContainer id="projects" background="secondary">
      <SectionHeader
        title="My Projects"
        subtitle="What I've been working on"
        description="A collection of my recent work and side projects"
      />

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {PROJECT_FILTERS.map((filterOption) => (
          <Button
            key={filterOption}
            variant={filter === filterOption ? 'primary' : 'outline'}
            size="sm"
            onClick={() => {
              setFilter(filterOption);
              setVisibleCount(6);
            }}
          >
            {filterOption}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedProjects.map((project, index) => (
          <div 
            key={project.id} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Load More / View All */}
      <div className="text-center">
        {hasMore ? (
          <Button
            variant="secondary"
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            Load More Projects
          </Button>
        ) : filteredProjects.length > 6 && (
          <Link to="/projects">
            <Button variant="primary">
              View All Projects
            </Button>
          </Link>
        )}
      </div>
    </SectionContainer>
  );
};