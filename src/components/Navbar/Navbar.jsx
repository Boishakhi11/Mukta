import React from "react";
import ThemeToggle from "../Theme/ThemeToggole";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#home" className="hover:text-primary transition-colors">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary transition-colors">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-primary transition-colors">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-primary transition-colors">
          Projects
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar h-20 px-6 bg-base-100/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <a
          href="#home"
          className="text-2xl md:text-3xl orbitron italic font-bold text-primary"
        >
          BOISHAKHI
        </a>
      </div>

      <div className="navbar-end gap-3">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <ThemeToggle />

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 right-0 z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
