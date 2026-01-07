import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col border-gray-400 border-2 p-3 rounded-md gap-4 h-fit text-center">
      <h1 className="text-3xl font-bold">Categories</h1>

      <div className="check gap-1.5 flex text-xl font-bold">
        <input type="radio" name="category" id="man" />
        <label htmlFor="man">Man</label>
      </div>

      <div className="check gap-1.5 flex text-xl font-bold">
        <input type="radio" name="category" id="females" />
        <label htmlFor="females">Females</label>
      </div>

      <div className="check gap-1.5 flex text-xl font-bold">
        <input type="radio" name="category" id="kids" />
        <label htmlFor="kids">Jewelery</label>
      </div>

      <div className="check gap-1.5 flex text-xl font-bold">
        <input type="radio" name="category" id="electronics" />
        <label htmlFor="electronics">Electronics</label>
      </div>
    </div>

  )
}

export default Sidebar