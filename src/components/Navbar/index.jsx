import { useState, useEffect } from "react";
import { MENU_NAVBAR } from "../../assets/data";

const NavLinks = ({ isMobile, onClick }) => (
  <nav
    className={`flex ${
      isMobile ? "flex-col" : "flex-row"
    } gap-6 text-lg font-semibold text-white items-center uppercase`}
  >
    {MENU_NAVBAR.map((data, index) => (
      <a
        key={index}
        href={`#${data.name}`}
        className="p-2 hover:text-primary-100 hover:border hover:border-primary-100 w-full text-center rounded-xl"
        onClick={onClick}
      >
        {data.name}
      </a>
    ))}
  </nav>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`z-50 w-full fixed py-4 px-4 md:px-16 flex items-center ${
        nav ? "bg-primary-700" : "bg-primary-800 md:bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="flex flex-grow-0 items-center">
        <img src="./icon.png" alt="Logo" className="w-10 h-10" />
      </div>

      <div className="hidden md:flex pl-0 md:pl-40 flex-grow justify-center">
        <NavLinks />
      </div>

      <button className="text-white md:hidden ml-auto" onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute md:hidden bg-primary-800 p-5 top-16 right-0 w-full left-0">
          <NavLinks isMobile onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
