import React from "react";
import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPython,
  SiGit,
  SiCplusplus,
} from "react-icons/si";
import "./Skills.scss";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiGit />, name: "Git" },
  { icon: <FaDatabase />, name: "Databases" },
  { icon: <SiCplusplus />, name: "C++" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>What skills do I have ?</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
