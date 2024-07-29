import React from "react";
import me from "../../assets/Me.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import Crio from "../../assets/Crio.png";
import { motion } from "framer-motion";

function IntroPage() {
  return (
    <div className="flex items-center pl-[15%] pr-[15%] w-full h-screen pt-40 pb-40 bg-[#121e27] max-[400px]:pt-[25%] max-[400px]:pb-[25%] max-lg:pt-48 max-lg:flex-col max-lg:h-full">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="w-full flex justify-center"
      >
        <img
          src={me}
          alt="me"
          style={{ width: "256px", height: "312px" }}
          className="rounded-xl transition ease-in-out delay-50 duration-500 hover:scale-110 hover:bg-black hover:opacity-60 max-lg:mb-16 max-lg:mt-24"
        />
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{
          once: true,
        }}
        className="w-full"
      >
        <div className="flex flex-row flex-wrap text-[50px] text-[#ffffff]">
          <div className="mr-4">Hi,</div>
          <div className="mr-4">I’m</div>
          <div className="mr-4">Anmol</div>
          <div className="mr-4">Kanwar</div>
          <div className="mr-4">|</div>
          <div className="animate-typing">
            <div className="relative mr-4 inline-block">
              <div className="relative z-10">Frontend</div>
              <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
            </div>
            <span className="hidden max-sm:block">
              <br />
            </span>
            <div className="relative mr-4 inline-block">
              <div className="relative z-10">Developer</div>
              <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center text-[#ffffff] mt-8 mb-4">
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
        <p className="text-[#ffffff]">
          I love exploring and creating 🚀. I'm a lifelong learner 🎓and want to
          grab every opportunity to expand my skill set and stay ahead in the
          ever-evolving world of web development 💻 .Learning new techniques for
          the joy of creating appealing UI, find fulfillment in the continuous
          journey of growth and discovery.
        </p>
      </motion.div>
    </div>
  );
}

export default IntroPage;
