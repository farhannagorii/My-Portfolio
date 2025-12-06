import React from "react";
import { NavLink } from "react-router-dom";

export default function Aboutme() {
  return (
    <section className="w-full bg-[#1B4D3E]    pt-31 pb-35   md:px-20">

      {/* This wrapper was missing */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-3 lg:pl-0">

        {/* LEFT — IMAGE DESIGN */}
        <div className="relative flex justify-center">
          
          {/* Yellow Circle Behind */}
          <div className="w-72 h-72 bg-[#0AB6A1] rounded-full absolute top-6 left-6"> 
            <img
            src="github.png"
            alt="Farhan Nagori"
            className="w-72 h-72 object-cover rounded-full relative z-10 shadow-xl"
          />
          </div>

          {/* Main Image */}
          <img
            src="linkedin.avif"
            alt="Farhan Nagori"
            className="w-72 h-72 ml-12 object-cover rounded-full relative z-10 shadow-xl"
          />

          {/* Skills Badges */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ml-3 bg-white py-3 px-4 rounded-full shadow-md flex gap-2 flex-wrap text-xs z-20">
            <span className="bg-[#1B4D3E] text-white px-3 py-1 rounded-full">
              Frontend
            </span>
            <span className="bg-[#1B4D3E] text-white px-3 py-1 rounded-full">
              Backend
            </span>
            <span className="bg-[#1B4D3E] text-white px-3 py-1 rounded-full">
              MEAN Stack
            </span>
          </div>
        </div>

        {/* RIGHT — TEXT SECTION */}
        <div className="text-white">
          <p className="text-sm text-gray-300 mb-2">— About Me</p>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Who is <span className="text-[#F7A400]">Farhan Nagori?</span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
            I am a passionate full-stack developer specializing in the MEAN stack.
            I design and build high-performance, scalable web applications with a
            focus on clean UI, modern architecture, and seamless user experience.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#F7A400]">3+</h2>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#F7A400]">5+</h2>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#F7A400]">0</h2>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>

          {/* CV Button */}
          <button className="bg-white text-[#1B4D3E] px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-gray-100 transition-all">
           <NavLink to="/resume">
            Download CV 
            </NavLink> 
            <span className="text-[#F7A400] text-xl">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}