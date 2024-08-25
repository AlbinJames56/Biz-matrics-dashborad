import React from "react";
import AuthorsTable from "../Components/AuthorsTable";
import ProjectsTable from "../Components/ProjectTable";

function Tables() {
  const Authors = [
    {
      imgSrc: "https://images.wsj.net/im-330620/?width=1280&size=1",
      name: "Anusree KS",
      email: "anusree@gmail.com",
      position: "Organization",
      function: "Manager",
      status: "ONLINE",
      empid: "24/461/15",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Bovas Ba ji",
      email: "bovas@gmail.com",
      position: "Developer",
      function: "Programator",
      status: "OFFLINE",
      empid: "34/251/23",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Joshua Mthew",
      email: "joshua@gmail.com",
      position: "Projects",
      function: "Executive",
      status: "ONLINE",
      empid: "94/461/19",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Altaf Ali",
      email: "Altaf@gmail.com",
      position: "Developer",
      function: "Programator",
      status: "ONLINE",
      empid: "64/351/15",
    },
    {
      imgSrc:
        "https://i.pinimg.com/280x280_RS/2a/e6/de/2ae6def652ad0dd6b80d9c0a18f5c664.jpg",
      name: "Mishel Kiz",
      email: "Mishel@gmail.com",
      position: "Manager",
      function: "Executive",
      status: "ONLINE",
      empid: "34/751/121",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Umar Ashraf",
      email: "Umar Ashraf@gmail.com",
      position: "Developer",
      function: " Programator",
      status: "ONLINE",
      empid: "12/411/41",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Uma Shankar",
      email: "Uma Shankaa@gmail.com",
      position: "Projects",
      function: "Executive",
      status: "ONLINE",
      empid: "64/251/55",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Kim John",
      email: "Kim John@gmail.com",
      position: "Projects",
      function: "Executive",
      status: "ONLINE",
      empid: "  3/161/65",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Amir ghan",
      email: "Amir@gmail.com",
      position: "Developer",
      function: "Programator",
      status: "ONLINE",
      empid: "14/451/15",
    },
  ];
  return (
    <>
      <div
        className=" px-3 relative mt-3"
        style={{ zIndex: 1, background: "transparent" }}
      >
        <h5 className="p-4 text-white bg-black rounded-2xl">Authors Table</h5>
      </div>
      <div
        className="bg-white p-4 rounded-2xl relative overflow-x-auto"
        style={{ top: "-50px ", zIndex: 0 }}
      >
        <AuthorsTable authors={Authors} />
      </div>
      <div
        className=" px-3 relative"
        style={{ zIndex: 1, background: "transparent" }}
      >
        <h5 className="p-4 text-white bg-black rounded-2xl">Project Table</h5>
      </div>
      <div
        className="bg-white p-4 rounded-2xl   "
        style={{ top: "-50px ", zIndex: 0 }}
      >
        <ProjectsTable />
      </div>
    </>
  );
}

export default Tables;
