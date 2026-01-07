import React from 'react'
import Nav from "./components/Nav"
import Sidebar from './components/Sidebar'
import Main from './components/Main'
const App = () => {
  return (
    
    <div className="bg-gray-200 h-[100vh]">
   <Nav  />
   <div className="Hero flex p-10 m-10  bg-white">
    <Sidebar />
    
    <Main />
   </div>
    </div>
  )
}

export default App