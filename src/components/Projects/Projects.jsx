import React from "react";
import "./Projects.scss";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "E-Commerce Microservices application",
    belongsTo: "JobHacker Internship Graduation Project",
    repo: "https://github.com/yourusername/e-commerce-microservices",
    description: [
      "Designed the SQL database for all services.",
      "Implemented the order service and connected it with other services.",
      "Configured a message broker to send order details to the notification service.",
      "Utilized Microservices, Java, Spring Boot, Spring JPA, RabbitMQ, and MySQL.",
    ],
  },
  {
    title: "Scouter Search Engine",
    belongsTo: "Independent Project",
    repo: "https://github.com/yourusername/scouter-search-engine",
    description: [
      "Implemented the crawler part of a search engine that crawls web pages with different depth and breadth techniques to guarantee the variety and accuracy of search results.",
      "Utilized Java and search techniques.",
    ],
  },
  {
    title: "Recommendation System",
    belongsTo: "Graduation Project",
    repo: "https://github.com/yourusername/recommendation-system",
    description: [
      "Used hybrid approaches (Content-based filtering and Collaborative filtering) to generate a list of candidate channels for each user.",
      "Used Cosine and Jaccard similarity metrics to generate the candidates.",
      "Increased the coverage by doing exploration and exploitation using Epsilon-Greedy approach.",
      "Utilized Content-based filtering, Collaborative filtering, and similarity metrics.",
    ],
  },
  {
    title: "Sorting Visualizer",
    belongsTo: "Learning Project",
    repo: "https://github.com/yourusername/sorting-visualizer",
    description: [
      "Developed a C++ application that visualizes common sorting algorithms like merge sort, quick sort, and insertion sort.",
      "Provided interactive visualization of the sorting process, aiding in algorithm understanding and analysis.",
      "Utilized C++, and search algorithms.",
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <h2>Software Projects</h2>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <h3>{project.title}</h3>
          <div className="project-meta">
            <span className="belongs-to">{project.belongsTo}</span>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              <BsGithub /> visit repository
            </a>
          </div>
          <ul className="project-description">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
