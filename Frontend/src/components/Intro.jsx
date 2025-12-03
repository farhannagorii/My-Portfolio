import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Intro() {

  useEffect(() => {
    const el = document.querySelector('.typing');
    const elName = document.querySelector('.typing-name');

    const text = 'I am ';
    const name = 'Farhan Nagori';

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
        // restart animation
        setTimeout(() => {
          index = 0;
          nameIndex = 0;
          el.textContent = '';
          elName.textContent = '';
          type();
        }, 1000);
      }
    }

    type();
  }, []);

  return (
    <div className="relative max-w-lg mx-auto p-8 mt-10 bg-white rounded-2xl space-y-5">

      {/* Line 1 */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0 }}
        className="text-[36px] font-extrabold text-gray-800"
      >
        <span className="text-[#0AB6A1]" style={{ animation: 'blink 3s infinite' }}>
          Hello!
        </span>
      </motion.h1>

      {/* Line 2 */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[30px] font-bold text-gray-700"
      >
        <span className="typing text-[#1C5440] font-bold"></span>
        <span
          className="typing-name"
          style={{ fontFamily: 'cursive', color: '#1C5440', marginLeft: '4px' }}
        ></span>
      </motion.h2>

      {/* Line 3 */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-gray-600 leading-relaxed text-[13px] text-[#1C5440] font-extralight relative z-10"
      >
        “Building the future of the web — MERN Stack Developer | 3rd-year BCA student.”
        <br />

        <p
          style={{
            fontFamily: 'cursive',
            fontSize: '15px',
            paddingTop: '12px',
            color: '#1C5440'
          }}
        >
          “Innovating through code, learning through curiosity, delivering through discipline.”
        </p>

        {/* ⭐ Social Icons Section (Premium Look) */}
        <div className="flex justify-center items-center gap-5 mt-4">

          <a href="https://www.facebook.com/farhan.nagori.503/"  className="social-box">
            <img src="/facebook.avif" alt="facebook" className="w-8 h-8" />
          </a>

          <a href="https://www.instagram.com/farhannagorii/" className="social-box">
            <img src="/instagram.jpg" alt="instagram" className="w-6 h-6" />
          </a>

          <a href="https://www.linkedin.com/in/farhannagori/" className="social-box">
            <img src="/linkedin.avif" alt="linkedin" className="w-6 h-6" />
          </a>

          <a href="https://leetcode.com/u/Farhannagori/" className="social-box">
            <img src="/leetcode.png" alt="leetcode" className="w-6 h-6" />
          </a>
          <div className="flex justify-center mt-6">
  <NavLink
    to="Hire-me"
    className="hire-btn px-6 py-3  rounded-xl mb-6  font-semibold text-white text-sm tracking-wide"
  >
    Hire Me
  </NavLink>
</div>

<style>
{`
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
      </motion.p>

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
        `}
      </style>
  
  
    </div>

    
  );
}