import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition no-underline ${
      isActive ? "text-[#F7A400]" : "text-white"
    } hover:text-[#F7A400]`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 mt-4">
      
      {/* Container with 90% width on large screens */}
      <div className="bg-[#0AB6A1] shadow-md rounded-none 
                      md:rounded-full w-full md:w-[90%] mx-auto">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl md:text-4xl font-bold tracking-wide text-white no-underline"
          >
            Farhan
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg font-medium">
            <li className="font-bold">
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>About</NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={linkClass}>Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:hidden flex-col bg-[#0AB6A1] px-6 py-4 space-y-4 text-lg font-semibold rounded-b-xl`}
        >
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
          <NavLink to="/resume" onClick={() => setOpen(false)} className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)} className={linkClass}>Projects</NavLink>
        </div>

      </div>
    </nav>
  );
}