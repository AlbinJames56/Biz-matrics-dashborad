import React from "react";

function Notifications() {
  return (
    <>
      <div class="p-4 bg-white rounded-lg shadow-lg m-2 mt-4">
        <h2 class="font-bold text-xl bg-white mb-4">Alerts</h2>

        <div class="bg-gray-800 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-gray-800">
            A simple gray alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-green-500 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-green-500">
            A simple green alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-orange-500 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-orange-500">
            A simple orange alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-red-500 text-white p-3 flex justify-between items-center rounded">
          <span className="bg-red-500">
            A simple red alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>
      </div>
      {/* alert with  icon */}
      <div class="p-4 bg-white rounded-lg shadow-lg m-2 my-5">
         
        <h2 class="font-bold text-xl bg-white mb-4">Alerts Icon</h2>

        <div class="bg-gray-800 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-gray-800"><i class="fa-solid fa-circle-info mr-2" style={{background:"transparent"}}></i>
             A simple gray alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-green-500 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-green-500">
           <i class="fa-solid fa-circle-info mr-2" style={{background:"transparent"}}></i>
            A simple green alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-orange-500 text-white p-3 mb-2 flex justify-between items-center rounded">
          <span className="bg-orange-500">
          <i class="fa-solid fa-circle-info mr-2" style={{background:"transparent"}}></i>
            A simple orange alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>

        <div class="bg-red-500 text-white p-3 flex justify-between items-center rounded">
          <span className="bg-red-500">
          <i class="fa-solid fa-circle-info mr-2" style={{background:"transparent"}}></i>
            A simple red alert with an example link. Give it a click if you
            like.
          </span>
          <button class="text-white focus:outline-none">&times;</button>
        </div>
      </div>
    </>
  );
}

export default Notifications;
