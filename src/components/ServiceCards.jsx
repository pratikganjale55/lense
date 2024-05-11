import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeProvider";


const ServiceCard = ({ item }) => {
  const { isDarkMode } = useTheme();
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const isOdd = item.id % 2 !== 0;
    const direction = isOdd ? "-100%" : "100%";
  
    const variants = {
      hidden: { x: direction, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.div
        ref={ref}
        className={`bg-white ${isDarkMode && "bg-slate-900"} rounded-lg shadow-lg p-6 flex items-center flex-1 hover:bg-${item.color}-100 hover:text-${item.color}-900`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <div>
          <h6 className="font-semibold mb-2">
            <span className={`text-gray-500 text-5xl font-bold mr-1`}>
              {item.id}
            </span>
            <span className={`text-3xl ml-2 text-${item.color}-500 `}>
              {item.title}
            </span>
          </h6>
          <p className="text-gray-500 text-lg mt-3">{item.description}</p>
        </div>
      </motion.div>
    );
  };
  export default ServiceCard;