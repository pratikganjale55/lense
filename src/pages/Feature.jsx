import React from "react";
import Card from "../components/Card";

import { featurecardsData, featureData } from "../assets/featureData";

const Feature = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="max-w-2xl w-full px-4">
          <div className="mb-10">
            <h2 className="text-center text-xl font-bold mb-5">
              Why Choose Lens
            </h2>
            <p className="text-center text-5xl font-medium mb-5">
              AI-driven solutions backed by science
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl text-center font-light text-gray-500 mb-5">
              Every piece of AI technology shipped from LENS is thoroughly
              benchmarked via rigorous evaluations. With a global network of
              experts and academicians, we guarantee the most accurate and
              robust solutions in the market.
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center mb-10">
            <ul className="list-disc">
              {featureData.slice(0, 4).map((item) => (
                <li className="flex items-center" key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 2a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.414l-7.293 7.293a1 1 0 0 1-1.414 0L4 10.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0L6 9.586l6.293-6.293H11a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="list-disc">
              {featureData.slice(4).map((item) => (
                <li className="flex items-center" key={item}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 2a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.414l-7.293 7.293a1 1 0 0 1-1.414 0L4 10.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0L6 9.586l6.293-6.293H11a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 p-2 justify-center">
        {featurecardsData.map((card, index) => (
          <Card
            key={index}
            index={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default Feature;
