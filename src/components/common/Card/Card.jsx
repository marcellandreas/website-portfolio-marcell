export const Card = ({ 
  children, 
  className = "",
  hover = true 
}) => {
  return (
    <div
      className={`
        rounded-2xl bg-white/10 backdrop-blur-md 
        border border-white/20 shadow-lg
        ${hover ? 'transition-transform duration-300 hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`p-6 border-b border-white/10 ${className}`}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className = "" }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`p-6 border-t border-white/10 ${className}`}>
      {children}
    </div>
  );
};
