import React from "react";

function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center pl-[15%] pr-[15%] pt-8 pb-8 bg-[#121e27] text-[#ffffff] max-lg:flex-col">
      <div>
        <div className="text-[22px] border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110 max-lg:mb-12">
          Anmol Singh Kanwar
        </div>
      </div>
      <div className="flex flex-row justify-around items-center">
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          About
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          Skills
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          Projects
        </div>
        <div className="ml-4 mr-4 border-b-4 border-[#ed6955] cursor-pointer transition ease-in-out duration-300 hover:scale-110">
          Contact
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
