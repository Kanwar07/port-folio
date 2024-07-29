import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import Crio from "../../assets/Crio.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="flex flex-row justify-around items-center pl-[15%] pr-[15%] pt-20 pb-20 bg-[#121e27] max-lg:flex-col">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[20px] text-[#ffffff] cursor-pointer  max-lg:mb-16"
      >
        <a href="#about" key="about">
          Anmol Singh Kanwar
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[18px] text-[#ffffff] max-lg:mb-16"
      >
        Links
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          <a href="#about" key="about">
            About
          </a>
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          <a href="#skills" key="skills">
            Skills
          </a>
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          <a href="#projects" key="projects">
            Projects
          </a>
        </div>
        <div className="text-[16px] text-[#ed6955] mt-2 mb-2 cursor-pointer">
          <a href="#contact" key="contact">
            Contact
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="text-[18px] text-[#ffffff]"
      >
        Get in touch
        <div className="flex flex-row items-center text-[#ffffff] mt-4 mb-4">
          <div className="mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <a href="https://github.com/Kanwar07">
              <img src={github} alt="github" />
            </a>
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <a href="https://www.linkedin.com/in/anmol-singh-kanwar-3752a717b/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <a href="https://www.crio.do/learn/portfolio/anmolkanwar07/">
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
            </a>
          </div>
          <div className="ml-4 mr-4 transition ease-in-out duration-300 cursor-pointer hover:scale-110">
            <a href="mailto:anmolkanwar07@gmail.com">
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
