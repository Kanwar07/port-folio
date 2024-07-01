import React from "react";

function NavBar() {
  return (
    <nav className="fixed flex flex-row z-20 justify-between items-center w-full pl-[15%] pr-[15%] pt-8 pb-8 bg-[#121e27] text-[#ffffff] max-lg:flex-col">
      <div>
        <div className="text-[22px] border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110 max-lg:mb-8">
          <a href="/" key="about">
            Anmol Singh Kanwar
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center">
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          <a href="#about" key="about">
            About
          </a>
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          <a href="#skills" key="skills">
            Skills
          </a>
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          <a href="#projects" key="projects">
            Projects
          </a>
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          <a href="#contact" key="contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
