import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-white  py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 mt-5  md:grid-cols-2 gap-12">

        {/* LEFT SECTION */}
        <div className="pt-17" >
          <p className="text-sm text-gray-500 mb-2">— Contact Us</p>

          <h1 className="text-4xl font-bold leading-snug mb-4">
            Let’s Talk for <span className="text-[#F7A400]">Your Next Projects</span>
          </h1>

          <p className="text-gray-600 text-sm mb-8">
            Feel free to reach out for collaborations or just a friendly hello.  
            I’m open to new opportunities and exciting projects.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <div className="bg-[#0AB6A1] w-10 h-10 flex justify-center items-center rounded-full text-white text-lg">
                📞
              </div>
              <p className="text-gray-700">+91 7425044009</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0AB6A1] w-10 h-10 flex justify-center items-center rounded-full text-white text-lg">
                📧
              </div>
              <p className="text-gray-700">er.farhannagori@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0AB6A1] w-10 h-10 flex justify-center items-center rounded-full text-white text-lg">
                💼
              </div>
              <p className="text-gray-700">github.com/farhannagorii</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0AB6A1] w-10 h-10 flex justify-center items-center rounded-full text-white text-lg">
                📍
              </div>
              <p className="text-gray-700">Jodhpur, Rajasthan, India</p>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION – FORM */}
        <form className="space-y-4 pt-17" >

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email *"
              className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone *"
              className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none"
            />

            <select className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none">
              <option>I'm Interested In *</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Full Stack Development</option>
              <option>MEAN Stack</option>
            </select>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none">
              <option>Budget Range (USD)</option>
              <option>$100 - $300</option>
              <option>$300 - $500</option>
              <option>$500 - $1000</option>
            </select>

            <select className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message *"
            className="px-4 py-3 rounded-lg bg-gray-100 w-full outline-none resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-[#0AB6A1] text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-3 hover:bg-[#163f33] transition-all"
          >
            Submit
            <span className="bg-[#F7A400] text-white w-8 h-8 flex justify-center items-center rounded-full">
              →
            </span>
          </button>

        </form>

      </div>
    </section>
  );
}