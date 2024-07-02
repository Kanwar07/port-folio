import React from "react";
import { useLocation } from "react-router-dom";
import github from "../../assets/github.png";
import netlify from "../../assets/netlify.png";
import dot from "../../assets/dot.svg";

function ProjectDetails() {
  const location = useLocation();
  const {
    projectName,
    projectArea,
    skills,
    description,
    projectLink,
    githubLink,
    preview,
  } = location.state;

  const skillsArray = Object.values(skills);
  const descriptionArray = Object.values(description);

  return (
    <div className="flex flex-row justify-between items-center w-screen pl-[15%] pr-[15%] pt-32 mb-12 max-lg:flex-col max-lg:mb-32">
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
        <div className="mt-4 mb-4">
          {descriptionArray.map((description, index) => (
            <div key={index} className="mb-4 flex items-center">
              <img src={dot} alt="dot" className="mr-2" />
              <span>{description}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row mt-6 mb-6">
          <a href={githubLink}>
            <div className="mr-2 cursor-pointer">
              <img src={github} alt="github" />
            </div>
          </a>
          <a href={projectLink}>
            <div className="ml-2 mr-2 cursor-pointer">
              <img src={netlify} alt="netlify" />
            </div>
          </a>
        </div>
      </div>
      <div className="basis-0 flex-grow pl-10 max-lg:pl-0">
        <a href={projectLink}>
          <img
            src={preview}
            alt="preview"
            className="border border-[#000000] transition ease-in-out delay-150 rounded-2xl cursor-pointer hover:-translate-y-4 hover:shadow-[0_65px_60px_-20px_rgba(0,0,0,0.8)] hover:scale-110 duration-500"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
