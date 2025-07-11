import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "../atoms/Logo";
import { MenuToggle } from "../molecules/MenuToggle";
import { NavLinks } from "../molecules/NavLink";

export const MENU_NAVBAR = [
  { name: "home", icon: "home-outline", path: "home", isSection: true },
  { name: "about", icon: "person-outline", path: "about", isSection: true },
  {
    name: "projects",
    icon: "code-outline",
    path: "/projects",
    isSection: false,
  },
  { name: "contact", icon: "call-outline", path: "contact", isSection: true },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeBackground = () => {
    setNav(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const handleScrollTo = (item) => {
    const { path, isSection } = item;

    if (!isSection) {
      navigate(path);
      return;
    }

    if (path === "home") {
      navigate("/", { replace: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.scrollBy(0, -60); // offset header height
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`z-50 w-full fixed py-4 px-4 md:px-16 flex items-center justify-between ${
          nav
            ? "bg-primary-700 bg-opacity-90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        } transition-all duration-300 hidden md:flex`}
      >
        <Logo />
        <div className="hidden md:flex flex-grow justify-center ">
          {MENU_NAVBAR.map((data, index) => (
            <button
              key={index}
              onClick={() => handleScrollTo(data)}
              className="p-2 hover:text-primary-100 hover:border-b-2 hover:border-primary-100  text-center rounded-xl  transform hover:scale-105 dark:hover:text-primary-100 dark:hover:border-primary-100 gap-6 text-base md:text-lg font-semibold items-center uppercase transition-transform duration-300 text-white dark:text-black flex-row"
            >
              {data.name}
            </button>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      {/* Mobile menu full screen (hamburger) */}
      {menuOpen && (
        <div className="absolute md:hidden top-0 left-0 right-0 bg-primary-700 bg-opacity-90 backdrop-blur-lg p-5 h-screen transition-all duration-300">
          <NavLinks isMobile onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary-700 bg-opacity-90 backdrop-blur-md shadow-t-md py-2 px-4 flex justify-around items-center md:hidden">
        {MENU_NAVBAR.map((data, index) => (
          <button
            key={index}
            onClick={() => {
              handleScrollTo(data);
              setMenuOpen(false);
            }}
            className="flex flex-col items-center text-white text-xs hover:text-primary-100 transition-colors"
          >
            <ion-icon name={data.icon || "ellipse"} size="small" />
            <span>{data.name}</span>
          </button>
        ))}
      </nav>
    </>
  );
};
