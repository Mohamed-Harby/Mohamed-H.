import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import WhoAmI from "../WhoAmI/WhoAmI";
import WorkingOn from "../WorkingOn/WorkingOn";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Home from "../../pages/Home/Home";
import "./AppRouter.scss";

const AppRouter = () => {
  return (
    <div className="app-router">
      <div className="page-spliter">
        {/* Navigation Tabs */}
        <nav className="tabs">
          <Link to="/">Home</Link>
          {/* <Link to="/who-am-i">About</Link> */}
          {/* <Link to="/working-on">Status</Link> */}
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
        </nav>

        <div className="section-outlet">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/who-am-i" element={<WhoAmI />} /> */}
            {/* <Route path="/working-on" element={<WorkingOn />} /> */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRouter;
