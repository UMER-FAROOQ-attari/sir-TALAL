import {  useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users ,setUser] = useState([])
   useEffect(()=>{

  async function getData() {
     try{
     let api = await fetch(`https://dummyjson.com/users`)
     let data = await api.json();
     setUser(data.users)
    }
    catch{
    console.log("error")
    }
    
  }
getData()
},[])
  return (
    <>
    
    <div className=' scale flex flex-wrap gap-4 justify-center items-center  bg-green-1 00' > 
     {users.map((user)=>(
      <ul className='text-2xl text-green-200 hover:-scale-z-200 bg-emerald-800 shadow-lg shadow-green-900/85 m-7 hover:text-emerald-800 hover:bg-green-200/95 duration-600 ease-in  hover:green-200/85 text-center p-3 rounded-lg font-bold font-mono flex flex-wrap gap-4 justify-center items-center flex-col  p-2' key={user.id}>
        <li>{user.firstName}</li>
        <li>{user.age}</li>
        <li>{user.gender}</li>
        <li>{user.phone}</li>
        <li><img src={user.image} alt="" /></li>

      </ul>
     ))

     }    
    </div>
   
   
    </>
  )
}

export default App
