import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const options = [
    { name: "Dashboard", icon: "fa-house" },
    { name: "Profile", icon: "fa-user" },
    { name: "Tables", icon: "fa-table" },
    { name: "Notifications", icon: "fa-bell" },
    { name: "Sign In", icon: "fa-sign-in-alt" },
    { name: "Sign Up", icon: "fa-user-plus" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-4"
        onClick={toggleSidebar}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>

      {/* Sidebar */}
      <nav
        className={`p-3 m-2  fixed flex flex-col justify-between bg-white rounded-xl border-3 border-gray-300 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex lg:relative lg:w-72  h-full min-h-screen`}
        style={{ width: "300px", zIndex: 50 }}
      >
        <div className="flex-1 bg-white">
          <h4 className="text-center bg-white m-4">Biz Matrics App</h4>
          <div className="space-y-2 bg-white">
            {options.slice(0, 4).map((option) => (
              <div
                key={option.name}
                className={`flex items-center p-2 text-gray-600 rounded-lg shadow-sm cursor-pointer ${
                  selectedOption === option.name
                    ? "bg-black text-white"
                    : "bg-white hover:bg-black"
                }`}
                onClick={() => handleOptionClick(option.name)}
              >
                <span
                  className={`mr-2 p-1 rounded ${
                    selectedOption === option.name
                      ? "bg-black text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  <i
                    className={`fa-solid ${option.icon} ${
                      selectedOption === option.name
                        ? "bg-black text-white"
                        : "bg-white text-gray-600"
                    }`}
                  ></i>
                </span>
                <span
                  className={`${
                    selectedOption === option.name
                      ? "bg-black text-white"
                      : "bg-white text-gray-600"
                  } p-1 rounded`}
                >
                  {option.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-white space-y-2">
            <h5 className="text-gray-700 bg-white">AUTH PAGES</h5>
            {options.slice(4).map((option) => (
              <div
                key={option.name}
                className={`flex items-center p-2 text-gray-600 rounded-lg shadow-sm cursor-pointer ${
                  selectedOption === option.name
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => handleOptionClick(option.name)}
              >
                <span
                  className={`mr-2 p-1 rounded ${
                    selectedOption === option.name
                      ? "bg-black text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  <i
                    className={`fa-solid ${option.icon} ${
                      selectedOption === option.name
                        ? "bg-black text-white"
                        : "bg-white text-gray-600"
                    }`}
                  ></i>
                </span>
                <span
                  className={`${
                    selectedOption === option.name
                      ? "bg-black text-white"
                      : "bg-white text-gray-600"
                  } p-1 rounded`}
                >
                  {option.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
