import React from "react";
import me from "../../assets/Me.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import Crio from "../../assets/Crio.png";

function IntroPage() {
  return (
    <section className="flex items-center pl-[15%] pr-[15%] h-full pt-44 pb-44 bg-[#121e27] max-lg:pt-0">
      <div className="flex items-center max-lg:flex-col">
        <div className="w-full flex justify-center">
          <img
            src={me}
            alt="me"
            style={{ width: "256px", height: "312px" }}
            className="rounded-xl transition ease-in-out delay-50 duration-500 hover:scale-110 hover:bg-black hover:opacity-60 max-lg:mb-16 max-lg:mt-24"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row flex-wrap text-[50px] text-[#ffffff]">
            <div className="mr-4">Hi,</div>
            <div className="mr-4">I’m</div>
            <div className="mr-4">Anmol</div>
            <div className="mr-4">Kanwar</div>
            <div className="mr-4">|</div>
            <div className="relative mr-4 inline-block">
              <div className="relative z-10">Frontend</div>
              <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
            </div>
            <div className="relative mr-4 inline-block">
              <div className="relative z-10">Developer</div>
              <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
            </div>
          </div>
          <div className="flex flex-row items-center text-[#ffffff] mt-8 mb-4">
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
          <p className="text-[#ffffff]">
            I love exploring and creating 🚀. I'm a lifelong learner 🎓and want
            to grab every opportunity to expand my skill set and stay ahead in
            the ever-evolving world of web development 💻 .Learning new
            techniques for the joy of creating appealing UI, find fulfillment in
            the continuous journey of growth and discovery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroPage;
