import React from "react";

import "./Sections.scss";
import WhoAmI from "../WhoAmI/WhoAmI";
import WorkingOn from "../WorkingOn/WorkingOn";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
const Sections = () => {
  return (
    <div className="sections-wrapper">
      <WhoAmI />
      <WorkingOn />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Sections;
