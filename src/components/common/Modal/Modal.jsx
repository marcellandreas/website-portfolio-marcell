import { useEffect } from 'react';

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = "md" 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    full: "max-w-7xl"
  };

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className={`
          bg-primary-600 rounded-2xl shadow-2xl 
          border border-white/10 w-full ${sizes[size]}
          max-h-[90vh] overflow-y-auto
          animate-slideUp
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Heading level={3} className="text-white">
            {title}
          </Heading>
          <button
            onClick={onClose}
            className="text-white hover:text-primary-100 transition-colors"
            aria-label="Close modal"
          >
            <ion-icon name="close-outline" size="large"></ion-icon>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};