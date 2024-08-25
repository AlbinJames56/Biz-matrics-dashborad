import React, { useState } from 'react';

const ProjectsTable = ( ) => {
  const projects = [
    {
      icon: "https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-xd.svg",
      title: "Material XD Version",
      budget: 14000,
      member: [
        {
          name: "Alex VU",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs10cupyp3Wf-pZvdPjGQuKne14ngVZbYdDQ&s",
        },
        {
          name: "Iqbal  Sim",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jjesMNo907W41HSwvY8nXkj21bG-LNJS7TsU37hwyNuVtsABWRnl-VDclCNtOw2EWOQ&usqp=CAU",
        },
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
      ],
      completion: 60,
    },
    {
      icon: "https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-atlassian.svg",
      title: "Add Progress Track",
      budget: 3000,
      member: [
        {
          name: "Iqbal  Sim",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jjesMNo907W41HSwvY8nXkj21bG-LNJS7TsU37hwyNuVtsABWRnl-VDclCNtOw2EWOQ&usqp=CAU",
        },
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
        {
          name: "Aldrin jers",
          img: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
        },
      ],
      completion: 10,
    },
    {
      icon: "https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-slack.svg",
      title: "Fix Platform Errors",
      budget: "Not set",
      member: [
        {
          name: "Aishu S",
          img: "https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg",
        },
        {
          name: "Aldrin jers",
          img: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
        },
      ],
      completion: 100,
    },
    {
      icon: "https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-spotify.svg",
      title: "Launch our Mobile App",
      budget: 20500,
      member: [
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
        {
          name: "Aldrin jers",
          img: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
        },
      ],
      completion: 35,
    },
    {
      icon: "https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-jira.svg",
      title: "Add the New Pricing Page",
      budget: 500,
      member: [
        {
          name: "Aldrin jers",
          img: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg",
        },
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
        {
          name: "Anu Steeve ",
          img: "https://images.wsj.net/im-330620/?width=1280&size=1",
        },
        {
          name: "Iqbal  Sim",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jjesMNo907W41HSwvY8nXkj21bG-LNJS7TsU37hwyNuVtsABWRnl-VDclCNtOw2EWOQ&usqp=CAU",
        },
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
      ],
      completion: 100,
    },
    {
      icon: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      title: "Redesign New Online Shop",
      budget: 2000,
      member: [
        {
          name: "Anu Steeve ",
          img: "https://images.wsj.net/im-330620/?width=1280&size=1",
        },
        {
          name: "Afra Aru",
          img: "https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.webp?b=1&s=170667a&w=0&k=20&c=lw6pOopy2hlnDffEUXd3igBtfCZDlYilphHffFLYWYc=",
        },
      ],
      completion: 75,
    },
  ];
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="p-5 bg-white relative overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th className="px-6   text-left bg-white   font-medium text-gray-500 uppercase tracking-wider">
              Companies
            </th>
            <th className="px-6   text-left bg-white   font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
            <th className="px-6   text-left bg-white   font-medium text-gray-500 uppercase tracking-wider">
              Budget
            </th>
            <th className="px-6   text-left bg-white   font-medium text-gray-500 uppercase tracking-wider">
              Completion
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project, index) => (
            <tr  key={index}>
              <td className="  bg-white   whitespace-nowrap">
                <div className="flex bg-white items-center">
                  <img src={project.icon} alt="" className="w-10 h-10 bg-white rounded-full mr-4" />
                  <div className="text-sm bg-white font-medium text-gray-900">{project.title}</div>
                </div>
              </td>
              <td className="px-6   bg-white whitespace-nowrap">
                <div className="flex -space-x-2 bg-white overflow-hidden">
                  {project.member.map((member, memberIndex) => (
                    <div className="relative bg-white group" key={`${index}-${memberIndex}`}
                    // generate a unique key to identify the hovering image, so that it can show only the corresponding name
                    onMouseEnter={()=>setIsHovered(`${index}-${memberIndex}`)}
                    onMouseLeave={()=>setIsHovered(null)}>
                      <img
                        src={member.img}
                        alt={member.name}
                        className="inline-block  h-8 w-8 rounded-full ring-2 ring-white"
                      />
                      {isHovered===`${index}-${memberIndex}`&&(
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full px-2 mx-3 py-1 bg-black text-white text-xs rounded z-10">
                        {member.name}
                      </div>
                      )}
                     
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 bg-white whitespace-nowrap text-sm text-gray-500">{project.budget}</td>
              <td className="px-6 py-4 bg-white whitespace-nowrap">
                <div className="w-full  bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600  h-2.5 rounded-full" style={{ width: `${project.completion}%` }}></div>
                </div>
                <span className="text-sm  bg-white text-gray-500 ml-2">{project.completion}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
