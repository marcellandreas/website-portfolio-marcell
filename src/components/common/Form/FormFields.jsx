export const Input = ({
  label,
  error,
  icon,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <ion-icon name={icon}></ion-icon>
          </div>
        )}
        <input
          className={`
            w-full h-12 bg-white/10 backdrop-blur-md 
            border border-white/20 rounded-lg
            px-4 ${icon ? 'pl-10' : ''} text-white
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary-100
            transition-all duration-300
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export const TextArea = ({
  label,
  error,
  className = "",
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white font-medium mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`
          w-full bg-white/10 backdrop-blur-md 
          border border-white/20 rounded-lg
          px-4 py-3 text-white
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary-100
          transition-all duration-300
          resize-none
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};