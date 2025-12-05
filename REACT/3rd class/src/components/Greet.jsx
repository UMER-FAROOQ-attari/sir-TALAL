import React from 'react'
import userData from '../api/userData.json'
const Greet = () => {
  return (
<>
<div className="flex  flex-wrap items-center justify-center">
  {userData.map((item) => {
    return (
      <li className="list-none  m-6" key={item.id}>
        <div
          className="
            w-80 
            bg-gradient-to-br from-white to-gray-50
            rounded-2xl 
            p-[2px] 
            shadow-xl 
            transition-all 
            duration-500 
            hover:scale-[1.05] 
            hover:-translate-y-2 
            hover:shadow-blue-300/50
            hover:border-blue-400
            border-transparent
            border 
             /* Gradient Border */
            bg-clip-padding
          "
        >
          <div className="bg-amber-100 rounded-2xl p-5">
            
            <h5 className="text-gray-500 text-sm font-medium">
              Product ID: <span className="font-semibold text-gray-700">{item.id}</span>
            </h5>

            <h2 className="text-xl font-bold mt-2 text-gray-900">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4">
              <img
                src={item.image}
                alt=""
                className="
                  w-full 
                  h-52 
                  object-cover 
                  rounded-xl 
                  shadow-md
                  hover:shadow-xl 
                  transition-all 
                  duration-500
                "
              />

              <h4 className="text-xl font-semibold text-gray-800 mt-3">
                Price: <span className="text-green-600 font-bold">${item.price}</span>
              </h4>

              <h3 className="text-md font-semibold text-blue-600 mt-1">
                Category: {item.category}
              </h3>
            </div>

          </div>
        </div>
      </li>
    );
  })}
</div>
</>
  )
}

export default Greet