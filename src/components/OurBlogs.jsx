import React from "react";
import { useTheme } from "../context/ThemeProvider";

const OurBlogs = () => {
  const {isDarkMode} = useTheme() ;
  return (
    <div className={`bg-gray-100 ${isDarkMode && "bg-slate-700 text-color" } min-h-screen py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-10 text-center">
            Our Blogs
          </h2>
          <div className={`flex flex-col md:flex-row gap-8 mt-5  `}>
            <div className={`bg-orange-100 ${isDarkMode && "bg-slate-900 text-white" } shadow-md rounded-lg overflow-hidden flex-grow hover:bg-orange-300 `}>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 hover:stroke-white">
                  Generative AI
                </h3>
                <p className="text-gray-600 mb-4 hover:stroke-white">
                  In today's data-driven marketing world, keeping up with
                  content creation demands can be a challenge. Read our latest
                  blog to explore the power of Generative AI and its potential
                  to reshape the marketing landscape....
                </p>
                <a
                  href="https://lenscorp.ai/blogs/Generative%20AI"
                  className="text-pink-500 hover:underline"
                  target="blank"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className={`bg-blue-200 ${isDarkMode && "bg-slate-900 text-white" } shadow-md rounded-lg overflow-hidden flex-grow hover:bg-blue-300`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-500">4 April 2022</p>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  The Evolution of AI in Games
                </h3>
                <p className="text-gray-600 mb-4">
                  The integration of artificial intelligence (AI) within the
                  gaming industry has been a remarkable journey, marked by
                  continual innovation. Read our latest blog to dive deep into
                  the fascinating history of AI in games and discover the
                  evolution that continues to shape the future of play!...
                </p>
                <a
                  href="https://lenscorp.ai/blogs/The%20Evolution%20of%20AI%20in%20Games"
                  className="text-pink-500 hover:underline"
                  target="blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 ">
            <p className="text-3xl">
              Unmasking the Misconceptions of Artificial Intelligence in the
              Workplace
            </p>
            <div className={`bg-rose-100 shadow-md ${isDarkMode && "bg-slate-900 text-white" } rounded-lg overflow-hidden flex-grow mt-5 hover:bg-rose-300`}>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Generative AI
                </h3>
                <p className="text-gray-600 mb-4">
                  In today's data-driven marketing world, keeping up with
                  content creation demands can be a challenge. Read our latest
                  blog to explore the power of Generative AI and its potential
                  to reshape the marketing landscape....
                </p>
                <a
                  href="https://lenscorp.ai/blogs/Unmasking%20the%20Misconceptions%20of%20Artificial%20Intelligence%20in%20the%20Workplace"
                  className="text-pink-500 hover:underline"
                  target="blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-80 h-10 mx-auto my-auto border  border-black rounded-lg hover:bg-black hover:text-white ">
        <p className="mr-3">Explore</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default OurBlogs;
