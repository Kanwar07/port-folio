import React from "react";
import github from "../../assets/github.png";
import netlify from "../../assets/netlify.png";

function ProjectCard({
  projectName,
  projectArea,
  skills,
  description,
  projectLink,
  githubLink,
  preview,
}) {
  const skillsArray = Object.values(skills);
  const descriptionArray = Object.values(description);
  return (
    <div className="flex flex-row justify-between items-center w-screen pl-[15%] pr-[15%] mb-12 max-lg:flex-col max-lg:mb-32">
      <div className="basis-0 flex-grow">
        <div className="mt-4 mb-4 text-[#808080] text-[24px]">
          {projectArea}
        </div>
        <div className="mt-4 mb-4 text-[30px] font-bold">{projectName}</div>
        <div className="flex flex-row flex-wrap mt-4 mb-4">
          {skillsArray.map((skill, index) => (
            <div
              key={index}
              className="border bg-[#121e27] text-[#ffffff] px-2 py-1 rounded-lg mr-2 mb-4"
            >
              {skill}
            </div>
          ))}
        </div>
        <ul className="mt-4 mb-4">
          {descriptionArray.map((description, index) => (
            <li key={index} className="mb-2">
              {description}
            </li>
          ))}
        </ul>
        <div className="flex flex-row mt-6 mb-6">
          <div className="mr-2 cursor-pointer">
            <img src={github} alt="github" />
          </div>
          <div className="ml-2 mr-2 cursor-pointer">
            <img src={netlify} alt="netlify" />
          </div>
        </div>
        <div className="inline-block mt-8 mb-8 border border-[#000000] rounded-lg max-lg:mb-16">
          <button className="border px-8 py-4 border-[#ed6955] rounded-lg bg-[#ed6955] text-[#ffffff] cursor-pointer transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0">
            View Project
          </button>
        </div>
      </div>
      <div className="basis-0 flex-grow pl-10">
        <img
          src={preview}
          alt="preview"
          className="border border-[#000000] transition ease-in-out delay-150 rounded-2xl cursor-pointer hover:-translate-y-4 hover:shadow-2xl hover:scale-110 duration-500"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
