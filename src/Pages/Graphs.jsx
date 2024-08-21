import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graphs=()=> {
    const data = [
        { name: 'M', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'T', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'W', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'T', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'F', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'S', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'S', uv: 3490, pv: 4300, amt: 2100 },
      ];
  return (
    < >
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ">
        {/* Bar chart */}
        <div className="bg-white shadow-md rounded-lg p-2 pt-3">
           
            <ResponsiveContainer width="100%" height={300} c>
                <BarChart data={data} className='bg-white'>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis className='bg-white'/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill='#82ca9d'/>
                </BarChart>
             </ResponsiveContainer>
              <h5 className='bg-white p-2'>Website View Last Campaign Performance</h5>
              <hr />
             <p className="text-grey-500 bg-white text-xs m-2">Campaign sent 2 days Ago</p>
        </div>

        {/* Line Chart sales*/}
    <div className="bg-white shadow-md rounded-lg p-2 pt-3">
        
        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
            <h5 className='  bg-white p-2 mb-4'> Daily Sales</h5>
            <hr />
            <p className="text-grey-600 bg-white text-xs m-2">Updated 4 min Ago</p>
    </div>

    {/* line Chart completed */}
 {/* Line Chart 2 */}
 <div className="bg-white shadow-md rounded-lg p-2 pt-3">
       
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
         <h5  className="bg-white p-2">Completed Tasks Last Campaign Performance</h5>
         <hr />
        <p className="text-gray-500 bg-white text-xs m-2">just updated</p>
      </div>
    </div>
    </>
  )
}

export default Graphs