import React from "react";
import { serviceData } from "../assets/serviceData";
import ServiceCard from "../components/ServiceCards";
import { useTheme } from "../context/ThemeProvider";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { isDarkMode } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-slate-700 text-white text-center"
          : "bg-gradient-to-br from-blue-50 to-blue-200 text-center"
      } py-12 px-4`}
    >
      {" "}
      <h4 className="text-2xl font-semibold mt-3 mb-4">SERVICES</h4>
      <p className="text-3xl mt-3 mb-8">
        We provide Artificial Intelligence Services
      </p>
      <div ref={ref} className="w-3/5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {serviceData?.map((item) => (
            <ServiceCard key={item.id} item={item} inView={inView} ref={ref} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
