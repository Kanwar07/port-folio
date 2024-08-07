import React from "react";
import dot from "../../assets/dot.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-row justify-between items-center w-screen pl-[15%] pr-[15%] mb-12 max-lg:flex-col max-lg:mb-32">
      <div className="basis-0 flex-grow">
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-4 mb-4 text-[30px] font-bold"
        >
          {projectName}
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-4 mb-4 text-[#808080] text-[24px]"
        >
          {projectArea}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="flex flex-row flex-wrap mt-4 mb-4"
        >
          {skillsArray.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border bg-[#121e27] text-[#ffffff] px-2 py-1 rounded-lg mr-2 mb-4"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-4 mb-4"
        >
          {descriptionArray.map((description, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="mb-4 flex items-center"
            >
              <img src={dot} alt="dot" className="mr-2" />
              <span>{description}</span>
            </motion.div>
          ))}
        </motion.div>
        <NavLink
          to="/projectdetails"
          state={{
            projectName,
            projectArea,
            skills,
            description,
            projectLink,
            githubLink,
            preview,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
              once: true,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="inline-block mt-8 mb-8 border border-2 border-[#000000] rounded-lg max-lg:mb-16"
          >
            <button className="border px-8 py-4 border-[#ed6955] rounded-lg bg-[#ed6955] text-[#ffffff] cursor-pointer transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0">
              View Project
            </button>
          </motion.div>
        </NavLink>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="basis-0 flex-grow pl-10 max-lg:pl-0"
      >
        <a href={projectLink}>
          <img
            src={preview}
            alt="preview"
            className="border border-[#000000] rounded-2xl cursor-pointer hover:scale-110 transition ease-in-out delay-150 hover:-translate-y-4 hover:shadow-[0_65px_60px_-20px_rgba(0,0,0,0.8)] duration-500"
          />
        </a>
      </motion.div>
    </div>
  );
}

export default ProjectCard;
