export const TextAreaField = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
}) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="block text-lg font-medium mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-32 bg-primary-800 rounded-lg outline-none pl-3 text-black"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export const InputField = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  required = false,
}) => {
  return (
    <div className="flex-1">
      <label htmlFor={id} className="block text-lg font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-12 bg-primary-800 rounded-lg outline-none pl-3 text-black"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
