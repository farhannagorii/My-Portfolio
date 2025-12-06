import React from "react";
// import { Briefcase, GraduationCap } from "lucide-react"; // optional icons

export default function AcademicJourney() {
  const education = [
    {
      year: "2023 - 2026",
      title: "Bachelor of Computer Applications",
      place: "jai narain vyas university Jodhpur.",
    },
    {
      year: "2022 - 2023",
      title: "Higher Secondary (12th)",
      place: "lucky bal niketan senior secondary school jodhpur.",
    },
    {
      year: "2020 - 2021",
      title: "Secondary School (10th)",
      place: "lucky bal niketan senior secondary school jodhpur.",
    },
  ];

  const experience = [
    {
      year: "2024 - Present",
      title: "Full-Stack Developer Intern",
      place: "fresher",
    },
   
   
  ];

  return (
    <section className="py-20  bg-[#E8FFFA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Education & Work
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            My <span className="text-[#F7A400]">Academic</span> and Professional Journey
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Education Card */}
          <div className="bg-gray-50 p-8 hover:shadow-xl rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F7A400]/20 flex items-center justify-center">
                {/* <GraduationCap className="text-[#F7A400] w-6 h-6" /> */}
              </div>
              <h2 className="text-xl font-bold text-gray-800">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.place}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F7A400]/20 flex items-center justify-center">
                {/* <Briefcase className="text-[#F7A400] w-6 h-6" /> */}
              </div>
              <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.place}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}