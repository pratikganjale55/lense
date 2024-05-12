import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { useTheme } from "../context/ThemeProvider";
const logo = [logo1, logo2, logo3, logo4];
const MovingCards = () => {
    const { isDarkMode } = useTheme();
  return (
    <marquee className="p-2 h-40">
      <div className={`flex`}>
        {logo?.map((item, i) => {
          return <img src={item}  />;
        })}
      </div>
    </marquee>
  );
};

export default MovingCards;
