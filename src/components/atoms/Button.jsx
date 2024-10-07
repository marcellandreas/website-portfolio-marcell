export const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-primary-100 text-white px-4 py-2 rounded transition hover:bg-primary-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
