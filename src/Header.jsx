import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.jpg"; // Import your logo

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:text-gray-700 text-lg block py-2">
    {children}
  </Link>
);

const MenuIcon = ({ isMenuOpen }) => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden={!isMenuOpen}
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {isMenuOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-gray-200 px-4 py-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Company logo" className="h-6 md:h-9" />
          <span className="text-xl font-bold ml-2 md:ml-4">Data-driven</span>
        </Link>

        <button
          onClick={handleToggle}
          type="button"
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon isMenuOpen={isMenuOpen} />
        </button>

        <nav className="hidden md:flex space-x-10 mr-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>

        <div
          className={`absolute w-full md:hidden top-16 right-0 bg-white p-6 shadow-md z-50 
            transition ease-in-out duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col space-y-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
