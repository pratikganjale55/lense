import React from "react";
import groupImg from "../assets/groupImg.png";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";
import {motion} from "framer-motion" ;
import { useInView } from "react-intersection-observer";

const About = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView();
  const transition = {typr : "spring", duration : 3}
  return (
    <div className={`flex flex-col mt-6 items-center justify-center m-3 p-3 ${isDarkMode && "text-white"} `}>
      <h2 className="text-3xl md:text-4xl mb-6">About Us</h2>

      <div
        className={`flex flex-col mt-6 sm:flex-row  rounded-lg p-6 w-3/4 ${
          isDarkMode ? "bg-slate-600 text-white" : "bg-blue-200"
        } `}
      >
        <div className="flex-1 mb-3 p-6 md:mb-0 flex flex-col text-center items-center text justify-center">
          <h4 className="text-xl md:text-2xl font-bold mb-3">
            Welcome To LENS
          </h4>
          <p className={`text-base md:text-lg ${isDarkMode ? "text-white"  : "text-gray-600"}  mb-3 `}>
            We put our hearts, souls and sweat into designing and developing{" "}
            <br></br>
            custom AI-powered solutions for your business so you don't have to.
          </p>
          <button className="border border-black rounded-lg px-4 py-2 transition-all duration-300 hover:bg-black hover:text-white flex items-center">
            <Link to="/company"> Learn More</Link>
          </button>
        </div>

        <div ref={ref} className="flex-1 overflow-hidden flex items-center justify-center border-8 border-gray-400">
        <motion.img 
           
           initial = {{opacity : 0, x:-100}}
           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        exit={{ opacity: 0, x: 100 }}
           transition={transition}
           className="w-full h-auto object-cover"
           style={{ maxHeight: "400px" }}
           src={groupImg} 
         alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
