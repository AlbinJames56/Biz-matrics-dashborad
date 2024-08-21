import React from 'react'
import Cards from '../Components/Cards'
import Graphs from './Graphs'

const Home=()=> {
  const cards=[
    { title: "Today's Money", value: "$53k", percentage: "+5%", icon: "fa-wallet", trend: "up" ,text:"than last week"},
    { title: "Today's Users", value: "2,300", percentage: "+3%", icon: "fa-users", trend: "up" ,text:"than last month" },
    { title: "New Clients", value: "3,462", percentage: "-2%", icon: "fa-user-plus", trend: "down" ,text:"than yesterday" },
    { title: "Sales", value: "$103,430", percentage: "+5%", icon: "fa-chart-line", trend: "up"  ,text:"than yesterday"},
  ]
  return (
    <> 
      <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {cards.map((card,index)=>(
          <Cards key={index}{...card}/>
        ))}
      </div>
      <div className="pt-4">
        <Graphs/>
      </div>
    </>
  )
}

export default Home