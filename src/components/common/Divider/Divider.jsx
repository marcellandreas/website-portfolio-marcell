export const Divider = ({ className = "" }) => {
  return (
    <div className={`relative h-1 w-20 mx-auto ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100 to-transparent"></div>
    </div>
  );
};

export const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
      <div className="w-2 h-2 rounded-full bg-primary-100"></div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
    </div>
  );
};