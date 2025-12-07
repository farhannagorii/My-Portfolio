import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Intro() {
  useEffect(() => {
    const el = document.querySelector(".typing");
    const elName = document.querySelector(".typing-name");

    const text = "I am ";
    const name = "Farhan Nagori";

    let index = 0;
    let nameIndex = 0;

    function type() {
      if (index < text.length) {
        el.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, 120);
      } else {
        typeName();
      }
    }

    function typeName() {
      if (nameIndex < name.length) {
        elName.textContent = name.slice(0, nameIndex + 1);
        nameIndex++;
        setTimeout(typeName, 120);
      } else {
        setTimeout(() => {
          index = 0;
          nameIndex = 0;
          el.textContent = "";
          elName.textContent = "";
          type();
        }, 1000);
      }
    }

    type();
  }, []);

  return (
<div className="relative w-full max-w-xl mx-auto p-6 sm:p-10 bg-[#E8FFFA] rounded-2xl space-y-3 ml-2 sm:ml-0 lg:ml-30">

      {/* Line 1 */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl font-extrabold text-gray-800"
      >
        <span className="text-[#F7A400]" style={{ animation: "blink" }}>
          Hello!
        </span>
      </motion.h1>

      {/* Line 2 */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-gray-700 flex flex-wrap"
      >
        <span className="typing text-[#1C5440] font-bold"></span>
        <span
          className="typing-name"
          style={{ fontFamily: "cursive", color: "#1C5440", marginLeft: "4px" }}
        ></span>
      </motion.h2>

      {/* Line 3 */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[#1C5440] space-y-4"
      >
        <p className="text-sm sm:text-base font-light leading-relaxed">
          “Building the future of the web — MERN Stack Developer | 3rd-year BCA student.”
        </p>

        <p
          style={{
            fontFamily: "cursive",
            fontSize: "15px",
            paddingTop: "12px",
            color: "#1C5440",
          }}
        >
          “Innovating through code, learning through curiosity, delivering through discipline.”
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          <a href="https://www.facebook.com/farhan.nagori.503/" className="social-box">
            <img src="/facebook.png" alt="facebook" className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>

          <a href="https://www.instagram.com/farhannagorii/" className="social-box">
            <img src="/instagram.jpg" alt="instagram" className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>

          <a href="https://www.linkedin.com/in/farhannagori/" className="social-box">
            <img src="/linkedin-logo-1.png" alt="linkedin" className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>

          <a href="https://leetcode.com/u/Farhannagori/" className="social-box">
            <img src="/leetcode.png" alt="leetcode" className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>

          <a href="https://github.com/farhannagorii" className="social-box">
            <img src="/github.png" alt="github" className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>

        {/* Hire Me Button */}
        <div className="flex justify-center mt-6">
          <NavLink
            to="Hire-me"
            className="hire-btn px-6 py-3 rounded-xl font-semibold text-white text-sm sm:text-base tracking-wide"
          >
            Hire Me
          </NavLink>
        </div>
      </motion.div>

      {/* Custom CSS */}
      <style>
        {`
          @keyframes blink { 
            0%, 50%, 100% { opacity: 1; } 
            25%, 75% { opacity: 0; } 
          }

          .social-box {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(6px);
            padding: 10px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            transition: 0.3s ease;
          }

          .social-box:hover {
            transform: scale(1.15);
            background: rgba(255, 255, 255, 0.9);
          }

          .hire-btn {
            background: linear-gradient(135deg, #0AB6A1, #067567);
            box-shadow: 0 5px 15px rgba(0,0,0,0.15);
            transition: 0.3s ease-in-out;
          }

          .hire-btn:hover {
            transform: scale(1.08);
            background: linear-gradient(135deg, #08a08e, #055d53);
            box-shadow: 0 8px 20px rgba(0,0,0,0.20);
          }
        `}
      </style>
    </div>
  );
}