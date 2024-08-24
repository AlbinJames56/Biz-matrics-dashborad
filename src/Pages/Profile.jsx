import React, { useState } from "react";

function Profile() {
  const [selectedOption, setSelectedOption] = useState("App");

  const options = [
    { name: "App", icon: "fa-house" },
    { name: "Message", icon: "fa-comment-dots" },
    { name: "Settings", icon: "fa-cog" },
  ];

  const handleClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div
        className="bg-black w-full rounded-2xl"
        style={{ backgroundColor: "#000", height: "200px" }}
      ></div>

      <div
        className="relative m-3"
        style={{ top: "-140px", backgroundColor: "transparent" }}
      >
        <div className="bg-white rounded-2xl p-2 flex flex-col lg:flex-row items-center md:justify-between">
          <div className="flex gap-3  items-center bg-white ">
            <div className="bg-white ">
              <img
                src="https://shanibacreative.com/wp-content/uploads/2020/06/membuat-foto-profil-yang-bagus-834x556.jpg"
                className="rounded-full"
                width={100}
                alt="Profile"
              />
            </div>
            <div className="bg-white mt-2">
              <h5 className="font-bold bg-white">Darwin Jobs</h5>
              <p className="text-gray-300 bg-white text-sm">CEO/Co-Founder</p>
            </div>
          </div>
          <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg md:mt-0 flex space-x-4  w-auto">
            {options.map((option) => (
              <button
                key={option.name}
                className={`flex items-center px-4 py-2 space-x-2 rounded-lg transition-all duration-500 ease-linear ${
                  selectedOption === option.name
                    ? "bg-white shadow-lg text-black"
                    : "bg-transparent text-gray-500"
                }`}
                onClick={() => handleClick(option.name)}
              >
                <i className={`fa ${option.icon}`} style={{   backgroundColor: "transparent" }}></i>
                <span style={{   backgroundColor: "transparent" }}>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
