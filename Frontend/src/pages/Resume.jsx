import React from "react";
import cvImage from "/cv_image.png"; // place the image in src/assets
import cvPdf from "../assets/farhan-nagori-cv.pdf"; // your real pdf

export default function Resume() {
  return (
    <section className="w-full min-h-screen bg-[#E8FFFA]  flex flex-col items-center py-10 px-4">
      
      <h1 className="text-4xl font-bold text-[#1B4D3E] mb-6">My Resume</h1>

      {/* CV Image */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6">
        <img src={cvImage} alt="Farhan Nagori CV" className="w-full rounded-lg" />
      </div>

      {/* Download Button */}
      <a
        href={cvPdf}
        download="Farhan-Nagori-CV.pdf"
        className="mt-6 bg-[#1B4D3E] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#164232] transition-all"
      >
        Download CV
      </a>
    </section>
  );
}