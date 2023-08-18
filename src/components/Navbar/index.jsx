import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(12);
  };

  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`z-50 w-full ${
        nav ? `bg-gray-700` : "bg-transparent"
      }   fixed py-4 px-4 md:px-16 flex justify-between md:justify-normal `}
    >
      <div className="flex justify-center items-center bg-yellow-50 rounded-full">
        {/* <h1>Marcell</h1> */}
        <img src="./icon.png" alt="" className="w-10 h-10" />
      </div>

      <nav className="hidden md:flex gap-6 text-lg font-semibold text-white items-center justify-center cursor-pointer uppercase  m-auto ">
        <li className="list-none hover:text-primary-100">Home</li>
        <li className="list-none hover:text-primary-100">About</li>
        <li className="list-none hover:text-primary-100">Projects</li>
        <li className="list-none hover:text-primary-100">Contacts</li>
      </nav>
      <button
        className="text-white z-[9999px] block md:hidden"
        onClick={toggleMenu}
      >
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

      {menuOpen ? (
        // true
        <div className="absolute bg-slate-800 p-5  top-16  w-full left-0">
          <nav className="block md:flex gap-6 text-lg p-4 font-semibold text-white items-center justify-center cursor-pointer uppercase  m-auto ">
            <li className="list-none hover:text-primary-100">Home</li>
            <li className="list-none hover:text-primary-100">About</li>
            <li className="list-none hover:text-primary-100">Projects</li>
            <li className="list-none hover:text-primary-100">Contacts</li>
          </nav>
        </div>
      ) : (
        <div className="hidden">bbb</div>
      )}
    </header>
  );
};

export default Navbar;
