import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeProvider";

const Card = ({ title, imageUrl, description, index }) => {
  const {isDarkMode} = useTheme()
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);
  return (
    <motion.div
      className= {`max-w-md mx-auto bg-white ${isDarkMode && "bg-slate-900"} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
    >
      <div className="p-8">
        <motion.h2
          className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-800" }  mb-4 text-center`}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 1, delay: 1 }}
        >
          {title}
        </motion.h2>
        <div className="flex justify-center mb-4">
          <motion.img
            className="h-48 w-full object-cover md:h-50 md:w-48"
            src={imageUrl}
            alt={title}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <motion.p
          className={`${isDarkMode ? "text-white" : "text-gray-800" }`}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 1, delay: 1 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
