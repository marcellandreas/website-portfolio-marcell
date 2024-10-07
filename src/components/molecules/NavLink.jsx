import { MENU_NAVBAR } from "../../assets/data";

export const NavLinks = ({ isMobile, onClick }) => (
  <nav
    className={`flex ${
      isMobile ? "flex-col" : "flex-row"
    } gap-6 text-base md:text-lg  font-semibold text-white items-center uppercase transition-transform duration-300`}
  >
    {MENU_NAVBAR.map((data, index) => (
      <a
        key={index}
        href={`#${data.name}`}
        className="p-2 hover:text-primary-100 hover:border-b-2 hover:border-primary-100 w-full text-center rounded-xl transition-transform duration-300 transform hover:scale-105"
        onClick={onClick}
      >
        {data.name}
      </a>
    ))}
  </nav>
);
