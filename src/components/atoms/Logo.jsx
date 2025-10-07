import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center cursor-pointer">
      <img
        src="./icon.png"
        alt="Logo"
        loading="lazy"
        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 transform hover:scale-105"
      />
      <span className=" text-white text-lg font-bold">
        Marcell
        <span className=" text-primary-100">Andreas</span>
      </span>
    </Link>
  );
};
