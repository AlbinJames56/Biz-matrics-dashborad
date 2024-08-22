import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center   pt-2  px-4 sm:pt-0">
      <div className="flex flex-col sm:pt-0  md:flex-row  ">
        <Link to="#home" className="mt-0 md:m-4  lg:ml-4">
          <p className="text-gray-600 text-sm font-medium lg:mt-4 md:pt-5 md:mt-1">
            DashBoard
          </p>
        </Link>

        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-grey-300"
          />
        </form>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/signup"
          className="flex items-center text-gray-700"
          style={{ textDecoration: "none" }}
        >
          <i className="fa-solid fa-circle-user text-lg"></i>
          <p className="text-sm ml-2 mt-3">Sign In</p>
        </Link>

        <Link
          to="/notifications"
          className="flex items-center text-gray-700"
          style={{ textDecoration: "none" }}
        >
          <i className="fa-solid fa-bell text-lg"></i>
        </Link>

        <Link
          to="/settings"
          className="flex items-center text-gray-700"
          style={{ textDecoration: "none" }}
        >
          <i className="fa-solid fa-gear text-lg"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
