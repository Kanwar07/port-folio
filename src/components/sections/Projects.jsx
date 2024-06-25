import React from "react";
import projects from "../../data/Projects.json";
import ProjectCard from "../card/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center w-screen pl-40 pr-40">
      <div className="flex flex-row items-start w-full mb-20 text-[36px]">
        <div className="mr-2">My</div>
        <div className="ml-2 mr-4">Projects</div>
      </div>
      <div className="flex flex-col justify-start">
        {projects.map((project) => {
          const {
            id,
            projectName,
            projectArea,
            skills,
            description,
            projectLink,
            githubLink,
            preview,
          } = project;
          return (
            <div key={id}>
              <ProjectCard
                {...{
                  projectName,
                  projectArea,
                  skills,
                  description,
                  projectLink,
                  githubLink,
                  preview,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
