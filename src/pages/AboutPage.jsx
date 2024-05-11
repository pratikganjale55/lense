import React from "react";
import About from "../components/About";
import { serviceData } from "../assets/serviceData";
import ServiceCard from "../components/ServiceCards";
import teamMembers from "../assets/teamMember";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeProvider";

const AboutPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className={`${isDarkMode ? "bg-slate-900" :"bg-gradient-to-br from-blue-50 to-blue-200"}  text-center py-12 px-4`}>
        <About />

        <div className="w-3/5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceData?.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
            {teamMembers?.map((item, i) => {
              return (
                <div
                  class="relative w-full overflow-hidden flex items-end justify-start text-left h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                  <div class="absolute bottom-0 right-0  mx-5 mt-2 flex justify-between items-center">
                    <p class="text-xs bg-indigo-600 text-white px-5 py-1 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">
                      {item.name}
                    </p>
                  </div>
                  <main class="p-5 z-10">
                    <p class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                      {item.role}
                    </p>
                  </main>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
