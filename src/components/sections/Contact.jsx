import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center w-full mt-20 mb-20">
      <div className="flex flex-row flex-wrap text-[60px] text-[#000000] mb-8">
        <div className="mr-4">Let's</div>
        <div className="mr-4">have</div>
        <div className="mr-4">a</div>
        <div className="mr-4">chat</div>
      </div>
      <div className="mb-8 text-[20px]">anmolkanwar07@gmail.com</div>
      <div className="inline-block mt-8 mb-8 border border-[#000000] rounded-lg mb-8">
        <button className="border px-8 py-4 border-[#ed6955] cursor-pointer rounded-lg bg-[#ed6955] text-[#ffffff] transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Contact;
