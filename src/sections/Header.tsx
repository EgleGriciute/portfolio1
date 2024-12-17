export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href=""
          className="nav-item  hover:bg-white/10 hover:text-white transition duration-300"
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-item hover:bg-white/10 hover:text-white transition duration-300"
        >
          Projects
        </a>
        <a
          href="#certificates"
          className="nav-item hover:bg-white/10 hover:text-white transition duration-300"
        >
          Certificates
        </a>
        <a
          href="#about"
          className="nav-item  hover:bg-white/10 hover:text-white transition duration-300"
        >
          About
        </a>
        <a
          href="#contact"
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 transition duration-300"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
