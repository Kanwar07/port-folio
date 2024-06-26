import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import Crio from "../../assets/Crio.png";

function Footer() {
  return (
    <div className="flex flex-row justify-around items-center pl-[15%] pr-[15%] pt-20 pb-20 bg-[#121e27] max-lg:flex-col">
      <div className="text-[20px] text-[#ffffff] cursor-pointer  max-lg:mb-16">
        Anmol Singh Kanwar
      </div>
      <div className="text-[18px] text-[#ffffff] max-lg:mb-16">
        Links
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          About
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          Skills
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          Projects
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          Contact
        </div>
      </div>
      <div className="text-[18px] text-[#ffffff]">
        Get in touch
        <div className="flex flex-row items-center text-[#ffffff] mt-4 mb-4">
          <div className="mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <img src={github} alt="github" />
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <img
              src={Crio}
              alt="Crio"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#ed6955",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <img src={mail} alt="mail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
