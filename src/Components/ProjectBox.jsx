import React from 'react'

const ProjectBox=({projects})=> {
  return (
    <>
    <table>
            <thead>
              <tr>
                <th className='text-gray-400'>COMPANIES</th>
                <th className='text-gray-400'>MEMBERS</th>
                <th className='text-gray-400'>BUDGET</th>
                <th className='text-gray-400'>COMPLETION</th>
              </tr>
            </thead>
            <tbody>
            {projects.map((project, index) => (
              <tr>
                <td ><img src={project.img} alt="" /> <h6 className="font-bold">{project.title}</h6></td>
                <td>{project.map((images )=>(
                  <img src={images.img} alt="" />
                ))}</td>
              </tr>
            ))}
            </tbody>
          </table>
     {/* <div className="p-4">
      <h2 className='font-bold mb-4'>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div> */}
    </>
  )
}

export default ProjectBox