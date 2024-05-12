import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ByNumber from "../components/ByNumber";
const NumberCount = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center items-center py-8 relative"
      style={{ background: "#272E5C", width: "100%" }}
    >
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4 text-white">
        <ByNumber count={15} ref={ref} inView={inView}/>
        <p className="text-center">Solutions for Global crises</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4 text-white">
        <ByNumber count={10} ref={ref} inView={inView}/>
        <p className="text-center">University Collaborations</p>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4 text-white">
        <ByNumber count={25}  ref={ref} inView={inView}/>
        <p className="text-center">Employees Worldwide</p>
      </div>

      <div className="absolute h-24 top-5 left-1/3 border-r xs:none border-white"></div>
      <div className="absolute h-24 top-5 left-2/3 border-r border-white"></div>
    </div>
  );
};

export default NumberCount;
