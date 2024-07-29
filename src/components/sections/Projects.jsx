import React, { useState } from "react";
import projects from "../../data/Projects.json";
import ProjectCard from "../card/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const [visibleprojects, setvisibleprojects] = useState(4);

  const handleprojects = () => {
    setvisibleprojects(visibleprojects + 4);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen pl-[15%] pr-[15%]">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="relative inline-block flex justify-start w-full mt-32 mb-20 text-[36px] max-[400px]:mt-[80%] max-lg:mt-48"
      >
        <div className="mr-2">My</div>
        <div className="relative inline-block">
          <div className="relative z-10">Projects</div>
          <div className="absolute left-2 right-0 bottom-0 h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
        </div>
      </motion.div>
      <div className="flex flex-col justify-start">
        {projects.slice(0, visibleprojects).map((project) => {
          const {
            id,
            projectName,
            projectArea,
            skills,
            description,
            moredata,
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
                  moredata,
                  projectLink,
                  githubLink,
                  preview,
                }}
              />
            </div>
          );
        })}
      </div>
      {visibleprojects < projects.length ? (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="inline-block mt-8 mb-8 border border-2 border-[#000000] rounded-lg max-lg:mb-16"
        >
          <button
            onClick={handleprojects}
            className="border px-8 py-4 border-[#ed6955] rounded-lg bg-[#ed6955] text-[#ffffff] cursor-pointer transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0"
          >
            Read more
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="inline-block mt-8 mb-8 border border-2 border-[#000000] rounded-lg max-lg:mb-16"
        >
          <button className="border px-8 py-4 border-[#ed6955] rounded-lg bg-[#ed6955] text-[#ffffff] cursor-pointer transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0">
            More Coming soon
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Projects;
