import { Link } from 'react-router-dom';
import { Card, CardBody } from '../../common/Card/Card';
import { Heading, Text, Badge } from '../../common/Typography/Typography';

export const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Link to={`/projects/${project.id}`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Text className="text-white font-semibold">
              View Details →
            </Text>
          </div>
        </div>

        {/* Content */}
        <CardBody>
          <Heading level={4} className="text-white mb-2">
            {project.name}
          </Heading>
          
          <Text size="sm" className="mb-3 line-clamp-2">
            {project.description}
          </Text>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>

          {/* Type */}
          <Text size="sm" color="primary">
            {project.type}
          </Text>
        </CardBody>
      </Link>
    </Card>
  );
};