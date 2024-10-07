export const MenuToggle = ({ menuOpen, toggleMenu }) => (
  <button className="text-white relative z-50" onClick={toggleMenu}>
    <svg
      className={`h-8 w-8 transition-transform duration-300 transform ${
        menuOpen ? "rotate-90" : "rotate-0"
      }`}
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
);
