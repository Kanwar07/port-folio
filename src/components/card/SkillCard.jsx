import React from "react";

function SkillCard({ skill, description, color, textcolor }) {
  return (
    <div className="group">
      <div className="flex justify-center border border-[2px] border-[#000000] bg-[#ed6955] text-[#000000] px-6 py-4 rounded-lg cursor-pointer transition ease-in-out duration-[400ms] hover:scale-105">
        {skill}
      </div>
      <div
        className="absolute hidden rounded-lg group-hover:block bg-[#808080] px-6 py-4"
        style={{ backgroundColor: color, color: textcolor }}
      >
        {description}
      </div>
    </div>
  );
}

export default SkillCard;
