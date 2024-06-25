import React from "react";
import skill from "../../data/Skills.json";
import SkillCard from "../card/SkillCard";

function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen pl-40 pr-40 mt-10 mb-10">
        <div className="flex flex-row items-start w-full mb-16 mt-16 text-[36px]">
          <div className="mr-2">My</div>
          <div className="ml-2 mr-4">Skills</div>
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
