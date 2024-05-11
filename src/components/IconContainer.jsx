import { motion } from "framer-motion";

const IconContainer = () => {
  const icons = ["hello", "world", "&#9728;", "&#9730;"];
  return (
    <div className="icon-container flex">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="icon"
          animate={{
            x: ["0%", "100%", "0%"], 
          }}
          transition={{
            duration: 5, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop", 
            delay: index * 0.5, 
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default IconContainer;
