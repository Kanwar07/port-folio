import React from "react";
import me from "../../assets/Me.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import Crio from "../../assets/Crio.png";

function IntroPage() {
  return (
    <section className="flex items-center pl-16 pr-16 h-[calc(100vh_-_6rem)] bg-[#121e27]">
      <div className="flex items-center">
        <div className="w-full flex justify-center">
          <img
            src={me}
            alt="me"
            style={{ width: "256px", height: "312px" }}
            className="rounded-xl transition ease-in-out delay-50 duration-500 hover:scale-110 hover:bg-black hover:opacity-60"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-row flex-wrap text-[50px] text-[#ffffff]">
            <div className="mr-4">Hi,</div>
            <div className="mr-4">I’m</div>
            <div className="mr-4">Anmol</div>
            <div className="mr-4">Kanwar</div>
            <div className="mr-4">|</div>
            <div className="mr-4">Frontend</div>
            <div className="mr-4">Developer</div>
          </div>
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
