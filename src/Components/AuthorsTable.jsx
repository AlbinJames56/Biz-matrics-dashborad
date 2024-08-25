import React from "react";

const AuthorsTable = ({ authors }) => {
  return (
    <table className=" w-full mt-5  md:m-5 overflow-x-auto ">
      <thead>
        <tr className="border-b">
          <th className="bg-white"></th>
          <th className="bg-white font-bold text-gray-500 ">AUTHOR</th>
          <th className="bg-white font-bold text-gray-500  ">FUNCTION</th>
          <th className="bg-white font-bold text-gray-500">STATUS</th>
          <th className="bg-white font-bold text-gray-500">EMPLOYED</th>
          <th className="bg-white font-bold text-gray-500"></th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author, index) => (
          <tr key={index} className="border-b">
            <td className="bg-white w-16 ">
               <div className="flex w-16  items-center bg-white  "> <img
                src={author.imgSrc}
                alt={author.name}
                className="w-10 h-10  rounded-full lg:mr-4"
              /> </div>
            </td>
            <td className="bg-white">
             
                <h5 className="text-sm font-bold text-gray-900 bg-white w-fit">
                  {author.name}{" "}
                  <span className="text-xs font-medium text-gray-500 bg-white">
                    {author.email}
                  </span>
                </h5>
             
            </td>
            <td className="   text-sm text-gray-500 bg-white ">
              <div className="font-bold text-gray-900 bg-white ">
                {author.function}
              </div>
              <div className="bg-white">{author.position}</div>
            </td>
            <td className="bg-white ">
              <div
                className={`px-3 py-2 w-20 text-white font-bold rounded-full text-sm ${
                  author.status === "ONLINE" ? "bg-green-500" : "bg-gray-500"
                }`}
              >
                {author.status}
              </div>
            </td>
            <td className="bg-white">{author.empid}</td>
            <td className="bg-white ">
              <div className="bg-white">
                <button className="m-3 bg-gray-500 px-3 py-2 rounded-xl text-white">
                  edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorsTable;
