import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-1 fixed top-4 flex justify-center w-full z-50">
      <nav className="mb-4 bg-[#7091E6] p-3 rounded-2xl w-3/5">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
                ></path>
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex justify-between w-full md:space-x-0 md:gap-0 mt-4 md:mt-0`}
          >
            <li className="flex-1 text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-yellow-200' : 'text-white'
                  } font-Poppins text-2xl`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-yellow-200' : 'text-white'
                  } font-Poppins text-2xl`
                }
              >
                About
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-yellow-200' : 'text-white'
                  } font-Poppins text-2xl`
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-yellow-200' : 'text-white'
                  } font-Poppins text-2xl`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-yellow-200' : 'text-white'
                  } font-Poppins text-2xl`
                }
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
