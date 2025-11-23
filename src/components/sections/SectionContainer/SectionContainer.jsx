import { Divider } from "../../common/Divider/Divider";
import { Heading, Text } from "../../common/Typography/Typography";

export const SectionContainer = ({ 
  id, 
  children, 
  className = "",
  background = "primary" 
}) => {
  const backgrounds = {
    primary: "bg-primary-200",
    secondary: "bg-primary-600",
    gradient: "bg-gradient-to-b from-primary-600 to-primary-700"
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <Heading level={2} className="text-white mb-2">
        {title}
      </Heading>
      {subtitle && (
        <Text size="lg" color="primary" className="mb-4">
          {subtitle}
        </Text>
      )}
      {description && (
        <Text className="text-gray-300">
          {description}
        </Text>
      )}
      <div className="mt-6">
        <Divider />
      </div>
    </div>
  );
};