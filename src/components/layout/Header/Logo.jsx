import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 group"
      aria-label="Home"
    >
      <img
        src="/icon.png"
        alt="Logo"
        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
      />
      <span className="text-white text-lg md:text-xl font-bold">
        Marcell
        <span className="text-primary-100">Andreas</span>
      </span>
    </Link>
  );
};