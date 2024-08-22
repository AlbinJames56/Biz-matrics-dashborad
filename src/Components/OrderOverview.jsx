import React from "react";

const OrderOverview = ({ orders }) => {
  return (
    <div className="relative bg-white">
      {orders.map((order ,index) => (
        <div className="flex items-center bg-white   px-4 mb-1">
          <div className="text-2xl bg-white text-gray-400 mr-4 mb-4 relative">
            <i className={`fa-solid ${order.icon} bg-white`}></i>
            {index < orders.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-6 bg-gray-300"></div>
            )}
          </div>
          <div className="bg-white">
            <h3 className="text-lg bg-white mt-3">{order.title}</h3>
            <p className="text-gray-600 text-sm bg-white">{order.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderOverview;
