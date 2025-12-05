import React from "react";
// import { Plus } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Own Portfolio Website",
      tags: [],
      img: "img5.png",
    },
    {
      id: 2,
      title: "WS Cube Tech Admin Panel",
      tags: [],
      img: "img2.png",
    },
    {
      id: 3,
      title: "Food Delivery App",
      tags: [],
      img: "img3.png",
    },
    {
      id: 4,
      title: "Real-Time Chet-App",
      tags: [],
      img: "img1.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 pt-30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            My Latest <span className="text-[#F7A400]">Projects</span>
          </h1>

          <button className="mt-4 md:mt-0 flex items-center gap-2 bg-[#0B6B50] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#08533d] transition">
            View All Projects
            <span className="text-xl font-bold">→</span>
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-5 relative hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-[#F7A400] text-white px-4 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="mt-4 text-lg font-bold text-gray-800 leading-snug">
                {project.title}
              </h2>

              {/* Plus Button */}
              <div className="absolute bottom-4 right-4 bg-[#0B6B50] p-2 rounded-full cursor-pointer hover:bg-[#08533d] transition">
                {/* <Plus size={18} className="text-white" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}