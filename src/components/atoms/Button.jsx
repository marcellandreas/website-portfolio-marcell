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

export const ButtonDownloadResume = ({ href, icon, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 border-2 border-primary-100 text-white font-semibold rounded-3xl hover:bg-primary-100 hover:text-primary-700 transition-all duration-300"
    >
      <ion-icon name={icon}></ion-icon>
      {children}
    </a>
  );
};
