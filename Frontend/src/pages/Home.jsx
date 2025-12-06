import React from "react";
import Intro from "../components/Intro";
import Myimage from "../components/Myimage";
import Aboutme from "./About";
import Resume from "./Resume";
import Contact from "./Contect-us";
import AcademicJourney from "./Academic";
import ConnectSection from "../components/Connectus";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <div className="pt-[140px] flex bg-[#E8FFFA]">
        {/* Intro always visible */}
        <Intro />

        {/* Myimage visible only on large screens */}
        <div className="hidden lg:block">
          <Myimage />
        </div>
      </div>

      <div >
        <Aboutme />
      </div>

      <div>
        <Resume />
      </div>

      <div>
        <Contact />
      </div>
      <div>
        <AcademicJourney />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <ConnectSection />
      </div>
    </>
  );
}

export default Home;
