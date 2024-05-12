import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NumberCount = ({ count, ref, inView }) => {
  
  const countValue = useMotionValue(0);
  const rounded = useTransform(countValue, Math.round);

  useEffect(() => {
    if (inView) {
      const animation = animate(countValue, count, {
        duration: 1,
      });
    }
  }, [inView, count]);

  return (
   
      <motion.div  animate={{ scale: inView ? 1 : 0 }}>
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          {rounded.get()} <span className="h-10 w-10 text-white">+</span>
        </h1>
      </motion.div>
      
    
  );
};

export default NumberCount;
