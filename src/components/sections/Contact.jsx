import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="flex flex-col items-center w-full pl-[15%] pr-[15%] mt-20 mb-20">
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-row flex-wrap justify-center text-[60px] text-[#000000] mt-[20%] max-[400px]:mt-[70%] max-lg:mt-48"
      >
        <div className="mr-4">Let's</div>
        <div className="mr-4">have</div>
        <div className="mr-4">a</div>
        <div className="relative inline-block">
          <div className="relative z-10">Chat</div>
          <div className="absolute left-2 right-0 bottom-[-8px] h-1/2 border border-[#ed6955] bg-[#ed6955] z-0"></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        className="mb-8 mt-8 text-[20px]"
      >
        anmolkanwar07@gmail.com
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        className="inline-block mt-8 mb-8 border border-[#000000] rounded-lg mb-8"
      >
        <button className="border px-8 py-4 border-[#ed6955] cursor-pointer rounded-lg bg-[#ed6955] text-[#ffffff] transition ease-in-out duration-[400ms] -translate-y-4 -translate-x-4 hover:translate-y-0 hover:translate-x-0">
          <a href="mailto:anmolkanwar07@gmail.com">Get in touch</a>
        </button>
      </motion.div>
    </div>
  );
}

export default Contact;
