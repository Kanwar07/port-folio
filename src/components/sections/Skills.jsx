import React from "react";
import skill from "../../data/Skills.json";
import SkillCard from "../card/SkillCard";
import { motion } from "framer-motion";

function Skills() {
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
    <>
      <div className="flex flex-col justify-center items-center w-screen h-full pl-[15%] pr-[15%] mt-10 mb-10">
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
          className="flex justify-start w-full mb-16 mt-32 text-[36px] max-[400px]:mt-[80%] max-lg:mt-48"
        >
          <div className="mr-2">My</div>
          <div className="relative inline-block">
            <div className="relative z-10">Skills</div>
            <div className="absolute left-2 right-0 bottom-0 h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mb-24 grid grid-cols-4 gap-2 w-full pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3"
        >
          {skill.map((skills, index) => {
            const { skill, description, color, textcolor } = skills;
            return (
              <motion.div variants={itemVariants} key={index}>
                <SkillCard {...{ skill, description, color, textcolor }} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
