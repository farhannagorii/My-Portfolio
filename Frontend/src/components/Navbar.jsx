import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition no-underline ${
      isActive ? "text-[#F7A400]" : "text-white"
    } hover:text-[#F7A400]`;

  return (
    <nav className="w-[90%]  ml-12 fixed top-0 left-0 bg-[#0AB6A1] shadow-md mt-3 z-50 rounded-full mt-5  ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="text-[40px]  font-bold tracking-wide text-white pl-29 pb-1 no-underline"
        >
          Farhan
        </NavLink>

        <ul className="hidden md:flex space-x-8 text-lg  pr-29 font-medium">
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
            <NavLink to="/project" className={linkClass}>Projects</NavLink>
          </li>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          open ? "flex" : "hidden"
        } md:hidden flex-col bg-white shadow-md px-6 py-4 space-y-4 text-lg font-medium`}
      >
        <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
        <NavLink to="/resume" onClick={() => setOpen(false)} className={linkClass}>Resume</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  );
}