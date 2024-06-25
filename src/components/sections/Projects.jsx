import React from "react";
import projects from "../../data/Projects.json";
import ProjectCard from "../card/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center w-screen pl-40 pr-40">
      <div className="relative inline-block flex justify-start w-full mb-20 text-[36px]">
        <div className="mr-2">My</div>
        <div className="relative inline-block">
          <div className="relative z-10">Projects</div>
          <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
        </div>
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
