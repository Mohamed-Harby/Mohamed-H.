import React from "react";
import "./Experience.scss";

const experiences = [
  {
    title: "Java Developer, Intern",
    company: "JobHacker",
    date: "Apr. 2023 — Oct. 2023",
    location: "Cairo, Egypt",
    description: [
      "Accomplished proficiency in Java, OOP, Databases, Hibernate, and Spring (Boot, Core, MVC, Data, Security).",
      "Achieved competence in utilizing software engineering tools, including UML diagrams and Git.",
      "Gained practical experience in building enterprise-scale Java applications.",
      "Leveraged knowledge in Spring Framework, Databases, Java technologies, and Git.",
    ],
  },
  {
    title: "Software Developer, Intern",
    company: "bld.ai - Openstack team",
    date: "Aug. 2022 — Nov. 2022",
    location: "Remote, USA",
    description: [
      "Reduced new projects creation and configuration time for developers by developing a projects creation tool with plenty of boilerplate code for their use.",
      "Incorporated Git technologies for building various projects with customized configurations effectively.",
      "Developed a web application and a CLI tool to help developers use the creation tool easily.",
      "Leveraged knowledge in JavaScript, Python, Web development, Git, agile methodologies.",
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <h3>{exp.title}</h3>
          <div className="experience-meta">
            <span className="company">{exp.company}</span>
            <span className="date">{exp.date}</span>
            <span className="location">{exp.location}</span>
          </div>
          <ul className="experience-description">
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
