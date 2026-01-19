import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="nav flex justify-around bg-sky-300 p-3 text-blue-900">
  <div className="logo text-3xl font-bold">TASK</div>
  <div className="list text-xl flex gap-3">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
</div>
</>
  )
}

export default Navbar