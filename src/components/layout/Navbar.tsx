import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import metaLogo from '../../assets/metalogo.png'; 

interface NavbarProps {
  navLinks: { name: string; path: string }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700/70 backdrop-blur-md fixed w-full z-20 top-0 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center space-x-4">
          <img src={metaLogo} className="h-10" alt="Logo" />
          <span className="text-3xl font-bold text-white">
            Meta <span className="text-red-500">Logic</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`group relative text-white transition ${
                location.pathname === path ? 'font-extrabold' : 'font-medium'
              }`}
            >
              {name}
              <span
                className={`absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-red-500 transition-transform origin-left duration-300 ${
                  location.pathname === path ? 'scale-x-100' : 'scale-x-0'
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Right: Button + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link to="/contact">
            <button className="hidden md:block text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-semibold rounded-xl text-base px-6 py-2.5 transition">
              Get in Touch
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800/90 px-6 py-4 space-y-4 text-white text-lg font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block ${
                location.pathname === path ? 'font-extrabold' : 'font-medium'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-2 mt-2">
              Get in Touch
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;