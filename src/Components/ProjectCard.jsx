import React, { useState } from "react";

function ProjectCard({ imageSrc, title, description, projectNumber, team }) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white rounded-lg bg-white shadow-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full   object-cover" />
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500 bg-white">Project #{projectNumber}</p>
        <h3 className="font-bold text-lg bg-white">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 bg-white">{description}</p>
        <div className="flex items-center mt-4 bg-white">
          <button className="text-white outline text-xs bg-blue-500 p-2   rounded-lg font-semibold">
            VIEW PROJECT
          </button>
          <div className="flex ml-4 space-x-2  bg-white">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative group  bg-white"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="inline-block h-8 w-8   rounded-full ring-2 ring-white "
                />
                {isHovered === index && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full px-2 py-1 bg-black text-white text-xs rounded z-10">
                    {member.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;