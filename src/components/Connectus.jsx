import React from "react";
import { NavLink } from "react-router-dom";
export default function ConnectSection() {
    return (
        <>
            {/* Main Section */}
            <section className="bg-[#E8FFFA] py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            Let's <span className="text-[#F7A400]">Connect</span> there
                        </h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-14">

                        {/* Profile Column */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F7A400]/20">
                                    <span className="font-bold text-[#F7A400] text-lg">F</span>
                                </div>
                                <p className="text-lg font-semibold text-gray-800">Farhan Nagori</p>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                A dedicated full-stack developer passionate about creating
                                visually stunning and high-performing digital experiences.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-4 mt-4 justify-start">
                                <a href="https://www.facebook.com/farhan.nagori.503/" className="flex-shrink-0">
                                    <img src="/facebook.avif" alt="facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a href="https://www.instagram.com/farhannagorii/" className="flex-shrink-0">
                                    <img src="/instagram.jpg" alt="instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a href="https://www.linkedin.com/in/farhannagori/" className="flex-shrink-0">
                                    <img src="/linkedin.avif" alt="linkedin" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a href="https://leetcode.com/u/Farhannagori/" className="flex-shrink-0">
                                    <img src="/leetcode.png" alt="leetcode" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>

                                <a href="https://github.com/farhannagorii" className="flex-shrink-0">
                                    <img src="/github.png" alt="github" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-gray-900">
                                Navigation
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li> <NavLink to="contact"> contect </NavLink></li>
                                <li> <NavLink to="about"> About </NavLink></li>
                                <li> <NavLink to="projects"> Projects </NavLink></li>
                                <li> <NavLink to="resume"> Resume </NavLink></li>

                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-gray-900">
                                Contact
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>+91-7425044009</li>
                                <li>er.farhanngori@gmail.com</li>
                                <li>jodhpur,Rajathan, India</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-gray-900">
                                Get the latest information
                            </h3>
                            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
                               
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 bg-transparent outline-none px-3"
                                />
                                <button className="bg-[#F7A400] p-2 rounded-full hover:bg-[#d88f00] transition">
                                  
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <footer className="bg-[#245A3E] text-white py-5 text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6 text-sm">
                    <p>Copyright © 2024 Farhan. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">
                        User Terms & Conditions | Privacy Policy
                    </p>
                </div>
            </footer>
        </>
    );
}