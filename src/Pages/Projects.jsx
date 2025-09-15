import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      image: "https://res.cloudinary.com/dbfsqbsoc/image/upload/v1757955395/boooks_g2pa6d.jpg",
      title: "Book Manager",
      type: "Frontend",
      description:
        "A simple and intuitive app to manage books, display author information, and view detailed descriptions. Users can browse through a collection of books, check author profiles, and explore book details in a clean and responsive interface.",
      techStack: ["Flutter"],
      // link: "https://todo-aj.netlify.app",
      gitLink: "https://github.com/FarhaN400/Book_Manager",
    },
    {
      image: "https://res.cloudinary.com/dbfsqbsoc/image/upload/v1757955395/Daily_Exercise_uhiane.jpg",
      title: "Daily Exercise",
      type: "Frontend",
      description:
        "ts design focuses on making health and wellness feel accessible and encouraging, with clear sections for different activities like Yoga, Meditation, and Diet Recommendations. It’s a great example of a modern, user-friendly mobile application interface.",
      techStack: ["Flutter"],
      // link: "https://todo-aj.netlify.app",
      gitLink: "https://github.com/FarhaN400/Exersice_App",
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
