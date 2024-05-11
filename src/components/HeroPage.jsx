import React from "react";
import backgroundImg from "../assets/heroBackground.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";
import network from "../assets/network.jpg"
const text = "We are at the forefront of AI".split(" ");

const HeroPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      className={`flex justify-center items-center bg-cover `}
      style={{  backgroundImage: `${isDarkMode ? `url(${network})` : `url(${backgroundImg})`}`, height: "100vh" }}
      // initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-full md:max-w-1/2 mr-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are at the forefront of AI
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          From Conserving Wildlife to Automatically Generating Caricatures–{" "}
          <span className="font-bold">We Do It All</span>
        </motion.p>
        <motion.button
          className="px-4 py-2 bg-black text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/company">Learn More</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroPage;
