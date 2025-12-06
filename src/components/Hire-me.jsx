import React from "react";

export default function HireMe() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#E8FFFA] to-[#CFF7EF] flex items-center justify-center p-4 overflow-hidden">

      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-6 w-full max-w-lg border border-[#0AB6A1]/20">

        <h1 className="text-3xl font-bold text-[#0AB6A1] text-center mb-1">
          Hire Me
        </h1>

        <p className="text-sm text-gray-600 text-center mb-4">
          Let’s collaborate and build something extraordinary.
        </p>

        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#0AB6A1] focus:ring-2 focus:ring-[#0AB6A1]/40 outline-none transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#0AB6A1] focus:ring-2 focus:ring-[#0AB6A1]/40 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Project Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:border-[#0AB6A1] focus:ring-2 focus:ring-[#0AB6A1]/40 outline-none transition"
            >
              <option>Web Development</option>
              <option>Frontend Only</option>
              <option>Backend Only</option>
              <option>Full Stack MERN</option>
              <option>Portfolio Website</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Project Details</label>
            <textarea
              className="w-full px-4 py-2 h-24 border border-gray-300 rounded-xl focus:border-[#0AB6A1] focus:ring-2 focus:ring-[#0AB6A1]/40 outline-none transition resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold tracking-wide bg-[#0AB6A1] hover:bg-[#088f7e] shadow-lg transition-transform transform hover:scale-[1.03]"
          >
            Send Request
          </button>

        </form>
      </div>
    </div>
  );
}