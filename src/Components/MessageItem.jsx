import React from 'react'

function MessageItem({ imgSrc, name, message }) {
  return ( 

   <>
      
        <div className="flex items-center bg-white justify-between py-2">
          <div className="flex items-center  bg-white">
            <img
              src={imgSrc}
              alt={name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="ml-4  bg-white">
              <h6 className="font-bold  bg-white">{name}</h6>
              <p className="text-gray-500 text-sm  bg-white">{message}</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold">REPLY</button>
        </div>
   
   </>
  )
}

export default MessageItem