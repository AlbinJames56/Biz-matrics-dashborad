import React from "react";
import Cards from "../Components/Cards";
import Graphs from "../Components/Graphs";
import OrderOverview from "../Components/OrderOverview";
import ProjectsTable from "../Components/ProjectTable";

const Home = () => {
  const cards = [
    {
      title: "Today's Money",
      value: "$53k",
      percentage: "+5%",
      icon: "fa-wallet",
      trend: "up",
      text: "than last week",
    },
    {
      title: "Today's Users",
      value: "2,300",
      percentage: "+3%",
      icon: "fa-users",
      trend: "up",
      text: "than last month",
    },
    {
      title: "New Clients",
      value: "3,462",
      percentage: "-2%",
      icon: "fa-user-plus",
      trend: "down",
      text: "than yesterday",
    },
    {
      title: "Sales",
      value: "$103,430",
      percentage: "+5%",
      icon: "fa-chart-line",
      trend: "up",
      text: "than yesterday",
    },
  ];
 
  const orders = [
    {
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
       
      icon: "fa-bell",
    },
    {
      title: "New order #1832412",
      date: "21 DEC 11 PM",
       
      icon: "fa-circle-plus",
    },
    {
      title: "Server payments for April",
      date: "21 DEC 9:34 PM",
       
     icon: "fa-cart-shopping",
    },
    {
      title: "New card added for order #4395133",
      date: "20 DEC 2:20 AM",
    
      icon: "fa-wallet",
    },
    {
      title: "Unlock packages for development",
      date: "18 DEC 4:54 AM",
   
      icon: "fa-lock-open",
    },
    {
      title: "New order #9583120",
      date: "17 DEC 6:20 AM",
    
      icon: "fa-inbox",
    },
  ];
  return (
    <>
      <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {cards.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
      <div className="pt-4">
        <Graphs />
      </div>
      <div className="grid xl:grid-cols-10 gap-4 ">
        {/* ProjectTable */}
      <div className="xl:col-span-7 bg-white rounded-lg p-3 pt-4 mt-5   ">
        <div className="bg-white flex justify-between">
          <div className="bg-white ml-3">
            <h5 className="font-bold   bg-white ">Projects</h5>
            <p className="bg-white text-gray-500">
              <span className="font-bold   bg-white  text-gray-500">
                <i class="fa-solid fa-circle-check bg-white  text-gray-500"></i>{" "}
                40 done
              </span>{" "}
              this month
            </p>
          </div>
          <div className="bg-white">
            <i class="fa-solid fa-ellipsis-vertical bg-white me-3 mt-3"></i>
          </div>
        </div>
        <div className="relative overflow-x-auto  ">
          <ProjectsTable   />
        </div>
      </div>

      {/* Order Overview */}
      <div className=" bg-white rounded-lg p-3 mt-5 xl:col-span-3 relative overflow-x-auto">
        <div className="bg-white flex justify-between">
          <div className="bg-white ml-3">
            <h5 className="font-bold   bg-white ">Orders Overview</h5>
            <p className="bg-white text-gray-500">
              <span className="font-bold   bg-white  text-gray-500 mr-2">
                <i
                  class="fa-solid fa-arrow-up bg-white mr-2"
                  style={{ color: " #00ff11" }}
                ></i>
                24%
              </span>
              this month
            </p>
          </div>
        </div>
        <div className="bg-white">
          <OrderOverview orders={orders} />
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Home;
