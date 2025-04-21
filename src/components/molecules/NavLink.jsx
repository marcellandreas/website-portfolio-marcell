import { MENU_NAVBAR } from "../../assets/data";
import DarkModeToggle from "./DarkModeToggle";

export const NavLinks = ({ isMobile, onClick }) => (
  <nav
    className={`flex ${
      isMobile ? "flex-col" : "flex-row"
    } gap-6 text-base md:text-lg font-semibold items-center uppercase transition-transform duration-300 text-white dark:text-black`}
  >
    {MENU_NAVBAR.map((data, index) => (
      <a
        key={index}
        href={`#${data.name}`}
        className="p-2 hover:text-primary-100 hover:border-b-2 hover:border-primary-100 w-full text-center rounded-xl transition-transform duration-300 transform hover:scale-105 dark:hover:text-primary-100 dark:hover:border-primary-100"
        onClick={onClick}
      >
        {data.name}
      </a>
    ))}
    {/* <DarkModeToggle /> */}
  </nav>
);
