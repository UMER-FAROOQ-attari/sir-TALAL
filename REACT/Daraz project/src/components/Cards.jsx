import React from 'react'

const Cards = (props) => {
  return (
     
        <div className="card border p-2 rounded-lg h-fit ">
         <div className="h-48 flex justify-center items-center mb-4 overflow-hidden">
                <img 
                  src={props.img} 
                  alt={props.title} 
                  className="h-full object-contain"
                />
              </div>

          <h2 className="text-2xl">{props.title}</h2>
          <h3 className="text-xl text-gray-600">${props.price}</h3>
          <h3 className="text-xl bg-gray-300 w-fit p-1 rounded-3xl">
            category
          </h3>
          <h3 className="text-xl text-gray-600">rating</h3>
        </div>
  )
}

export default Cards