import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionContainer, SectionHeader } from '../../components/sections/SectionContainer/SectionContainer';
import { ProjectCard } from '../../components/sections/Projects/ProjectCard';
import { Input } from '../../components/common/Form/FormFields';
import { Button } from '../../components/common/Button/Button';
import { experience_projects } from '../../assets/data';
import { Heading, Text } from '../../components/common/Typography/Typography';
import { PROJECTS_DATA } from '../../assets/data/PROJECTS.MOCK.JSX';



const PROJECT_CATEGORIES = ['All', 'Web Application', 'Mobile App', 'API', 'UI/UX'];

export const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);

  console.log('Experience Projects:', PROJECTS_DATA);

  useEffect(() => {
    let filtered = PROJECTS_DATA;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.type === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-primary-200 min-h-screen py-20">
      <SectionContainer>
        {/* Header with Search */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-100 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <SectionHeader
                title="All Projects"
                subtitle={`${filteredProjects.length} projects found`}
                description="Explore my portfolio of work"
              />

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-8">
                <Input
                  placeholder="Search projects by name, technology, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon="search-outline"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.id}  >
                <ProjectCard project={project} />
              </div>
            ))}
            
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <Heading level={3} className="text-white mb-2">
              No projects found
            </Heading>
            <Text className="mb-6">
              Try adjusting your search or filters
            </Text>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

