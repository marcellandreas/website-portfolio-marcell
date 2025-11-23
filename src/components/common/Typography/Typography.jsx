export const Heading = ({ 
  level = 1, 
  children, 
  className = "",
  gradient = false 
}) => {
  const Tag = `h${level}`;
  
  const sizes = {
    1: "text-4xl md:text-6xl",
    2: "text-3xl md:text-5xl",
    3: "text-2xl md:text-4xl",
    4: "text-xl md:text-3xl",
    5: "text-lg md:text-2xl",
    6: "text-base md:text-xl"
  };

  const gradientClass = gradient 
    ? "bg-gradient-to-r from-primary-100 to-white bg-clip-text text-transparent" 
    : "";

  return (
    <Tag className={`font-bold ${sizes[level]} ${gradientClass} ${className}`}>
      {children}
    </Tag>
  );
};

export const Text = ({ 
  children, 
  className = "",
  size = "base",
  color = "gray" 
}) => {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  const colors = {
    white: "text-white",
    gray: "text-gray-300",
    primary: "text-primary-100"
  };

  return (
    <p className={`${sizes[size]} ${colors[color]} ${className}`}>
      {children}
    </p>
  );
};

export const Badge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-primary-100 text-black",
    secondary: "bg-primary-300 text-white",
    outline: "border border-primary-100 text-primary-100"
  };

  return (
    <span className={`
      inline-block px-3 py-1 rounded-full text-sm font-medium
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
};