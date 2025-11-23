export const Button = ({ 
  onClick, 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-primary-100 text-black hover:bg-white",
    secondary: "bg-primary-300 text-white hover:bg-primary-500",
    outline: "border-2 border-primary-100 text-primary-100 hover:bg-primary-100 hover:text-black"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ 
  icon, 
  label, 
  href, 
  className = '' 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 border-2 border-primary-100 text-white font-semibold rounded-3xl hover:bg-primary-100 hover:text-black transition-all duration-300 ${className}`}
      aria-label={label}
    >
      <ion-icon name={icon}></ion-icon>
      {label}
    </a>
  );
};