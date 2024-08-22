import React, { useState } from 'react';

const ProjectsTable = ({ projects }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="p-4 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6   text-left bg-white text-xs font-medium text-gray-500 uppercase tracking-wider">
              Companies
            </th>
            <th className="px-6   text-left bg-white text-xs font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
            <th className="px-6   text-left bg-white text-xs font-medium text-gray-500 uppercase tracking-wider">
              Budget
            </th>
            <th className="px-6   text-left bg-white text-xs font-medium text-gray-500 uppercase tracking-wider">
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
