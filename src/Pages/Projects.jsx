import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      image: "src/assets/boooks.jpg",
      title: "Book Manager",
      type: "Frontend",
      description:
        "A simple and intuitive app to manage books, display author information, and view detailed descriptions. Users can browse through a collection of books, check author profiles, and explore book details in a clean and responsive interface.",
      techStack: ["Flutter"],
      // link: "https://todo-aj.netlify.app",
      gitLink: "https://github.com/FarhaN400/Book_Manager",
    },
  ];
  return (
    <>
      <div id="project" className="bg-slate-800 p-10">
        <div className="container mx-auto px-4 max-w-6xl text-center mb-5">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
            Projects
          </h2>
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            type={project.type}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
