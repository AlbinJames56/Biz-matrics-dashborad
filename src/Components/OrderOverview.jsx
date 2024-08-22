import React from 'react'

const OrderOverview=({orders}) =>{
  return (
    < >
    <div className="p-4">
      <h2 className='font-bold mb-4'>Orders Overview</h2>
      <ul className="space-y-4">
        {orders.map((order, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-lg flex justify-between">
            <div>
              <p className="font-semibold">{order.title}</p>
              <p className="text-gray-600">{order.date}</p>
            </div>
            <div>
              <p className={`text-${order.trend === "up" ? "green" : "red"}-500 font-semibold`}>
                {order.amount}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default OrderOverview