import React from "react";

const Cards = ({ title, value, percentage, icon, trend, text }) => {
  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="bg-white flex items-center justify-between ">
        <div className="bg-white">
          <p className="text-grey-600 text-sm bg-white">{title}</p>
          <h3 className="text-2xl bg-white font-bold">{value}</h3>
        </div>
        <div className="text-4xl bg-white text-grey-300">
          <i className={`fa-solid ${icon} bg-white`}></i>
        </div>
        <div>
    </div>
        
      </div>
      <hr />
        <p className="bg-white">
          {" "}
          <span
            className={`bg-white text-sm ${
              trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentage}
            {trend === "up" ? "↑" : "↓"}
          </span>
          {text}
        </p>
    </div>
      
    </>
  );
};

export default Cards;
