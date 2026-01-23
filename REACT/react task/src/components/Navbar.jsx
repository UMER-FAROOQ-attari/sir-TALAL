import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="nav flex justify-around bg-sky-300 p-0.5 text-blue-900 hover:bg-blue-900 hover:text-sky-300">
  <div className="logo text-3xl font-bold hover:text-blue-900 hover:bg-sky-300 p-2 rounded-md">TASK</div>
  <div className="list text-xl flex gap-3 items-center">
    <Link className='hover:text-blue-900 hover:bg-sky-300 p-1 hover:rounded-lg' to="/">Home</Link>
    <Link className='hover:text-blue-900 hover:bg-sky-300 p-1 hover:rounded-lg' to="/about">About</Link>
    <Link className='hover:text-blue-900 hover:bg-sky-300 p-1 hover:rounded-lg' to="/signUP">Signup</Link>
    <Link className='hover:text-blue-900 hover:bg-sky-300 p-1 hover:rounded-lg' to="/Login">Login</Link>
  </div>
</div>
</>
  )
}

export default Navbar