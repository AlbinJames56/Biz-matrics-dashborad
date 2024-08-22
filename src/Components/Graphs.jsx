import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graphs = () => {
  const BarData = [
    { name: "M", view: 50 },
    { name: "T", view: 15  },
    { name: "W", view: 40  },
    { name: "T", view: 28 },
    { name: "F", view: 35  },
    { name: "S", view: 10  },
  ];
  const linedata = [
    { month: "Jan", sales: 20, tasks: 240 },
    { month: "Feb", sales: 270, tasks: 139 },
    { month: "Mar", sales: 150, tasks: 280 },
    { month: "Apr", sales: 500, tasks: 30 },
    { month: "May", sales: 180, tasks: 480 },
    { month: "Jun", sales: 230, tasks: 380 },
    { month: "Jul", sales: 340, tasks: 430 },
    { month: "Aug", sales: 180, tasks: 480 },
    { month: "Sep", sales: 230, tasks: 380 },
    { month: "Oct", sales: 340, tasks: 430 },
    { month: "Nov", sales: 230, tasks: 380 },
    { month: "Dec", sales: 340, tasks: 430 },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ">
        {/* Bar chart */}
        <div className="bg-white shadow-md rounded-lg p-3">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={BarData} className="bg-white">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="view" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <h5 className="bg-white p-2">
            Website View Last Campaign Performance
          </h5>
          <hr />
          <p className="text-grey-500 bg-white text-xs m-2">
            Campaign sent 2 days Ago
          </p>
        </div>

        {/* Line Chart sales*/}
        <div className="bg-white shadow-md rounded-lg p-3 pt-3  ">
        <div className="overflow-x-auto">
        <div className="min-w-[150%] p-2">
          <ResponsiveContainer width="150%" height={300}>
            <LineChart data={linedata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          </div>
          </div>
          <h5 className="  bg-white p-2 mb-4"> Daily Sales</h5>
          <hr />
          <p className="text-grey-600 bg-white text-xs m-2">
            Updated 4 min Ago
          </p>
           
        </div>

        {/* line Chart completed */}
        {/* Line Chart 2 */}
        <div className="bg-white shadow-md rounded-lg p-3">
        <div className="overflow-x-auto">
        <div className="min-w-[150%] p-2">
          <ResponsiveContainer width="100%" height={300}   >
            <LineChart data={linedata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="tasks" stroke=" #00fb19" />
            </LineChart>
          </ResponsiveContainer>
          </div>
          </div>
          <h5 className="bg-white p-2">
            Completed Tasks Last Campaign Performance
          </h5>
          <hr />
          <p className="text-gray-500 bg-white text-xs m-2">just updated</p>
        </div>
      </div>
    </>
  );
};

export default Graphs;
