import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center   p-4">
      <div className="flex items-center">
        <Link to="#home">
          <p className="text-gray-600 text-sm font-medium mt-3">DashBoard</p>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 text-sm bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-grey-300"
          />
        </form>

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