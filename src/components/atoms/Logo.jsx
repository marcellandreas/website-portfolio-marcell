export const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src="./icon.png"
        alt="Logo"
        className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 transform hover:scale-105"
      />
      <span className=" text-white text-lg font-bold">
        Marcell
        <span className=" text-primary-100">Andreas</span>
      </span>
    </div>
  );
};
