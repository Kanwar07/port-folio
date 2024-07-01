import React from "react";
import skill from "../../data/Skills.json";
import SkillCard from "../card/SkillCard";

function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-full pl-[15%] pr-[15%] mt-10 mb-10">
        <div className="flex justify-start w-full mb-16 mt-32 text-[36px] max-[400px]:mt-[80%] max-lg:mt-48">
          <div className="mr-2">My</div>
          <div className="relative inline-block">
            <div className="relative z-10">Skills</div>
            <div className="absolute left-2 right-0 bottom-0 h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
          </div>
        </div>
        <div className="mb-24 grid grid-cols-4 gap-2 w-[100%] pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
          {skill.map((skills, index) => {
            const { skill, description, color, textcolor } = skills;
            return (
              <div key={index}>
                <SkillCard {...{ skill, description, color, textcolor }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
