import { useState, useEffect } from "react";
import { Logo } from "../atoms/Logo";
import { MenuToggle } from "../molecules/MenuToggle";
import { NavLinks } from "../molecules/NavLink";

export const Navbar = () => {
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
      className={`z-50 w-full fixed py-4 px-4 md:px-16 flex items-center justify-between ${
        nav
          ? "bg-primary-700 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <Logo />
      <div className="hidden md:flex flex-grow justify-center">
        <NavLinks />
      </div>
      <div className="md:hidden flex items-center">
        <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      {menuOpen && (
        <div className="absolute md:hidden top-0 left-0 right-0 bg-primary-700 bg-opacity-90 backdrop-blur-lg p-5 h-screen transition-all duration-300">
          <NavLinks isMobile onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
