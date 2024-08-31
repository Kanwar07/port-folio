import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import github from "../../assets/github.png";
import netlify from "../../assets/netlify.png";
import dot from "../../assets/dot.svg";
import vercel from "../../assets/vercel.svg";
import arrowback from "../../assets/arrowback.png";
import { motion } from "framer-motion";

function ProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <motion.nav
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="fixed flex flex-row z-20 justify-center items-center w-full px-[15%] py-8 bg-[#121e27] text-[#ffffff]"
      >
        <div className="text-[22px] border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          <a href="/" key="about">
            Anmol Singh Kanwar
          </a>
        </div>
      </motion.nav>
      <div className="flex flex-col justify-between items-start w-screen pl-[15%] pr-[15%] pt-36 max-lg:pt-52 mb-12 max-lg:flex-col max-lg:mb-32">
        <NavLink to="/">
          <div className="flex flex-row items-center mb-10">
            <img
              src={arrowback}
              alt="arrowback"
              className="mr-10 size-6 cursor-pointer"
            />
            <div className="font-quicksand text-[#000000] text-[25px] max-sm:text-[20px] font-bold">
              Back to Projects
            </div>
          </div>
        </NavLink>
        <div className="flex flex-row items-center max-lg:flex-col">
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
            <div className="flex flex-row items-center mt-6 mb-6">
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
              <a href={projectLink}>
                <div className="ml-2 mr-2 cursor-pointer size-6">
                  <img src={vercel} alt="vercel" />
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
      </div>
    </>
  );
}

export default ProjectDetails;
