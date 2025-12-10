import { useState, useEffect } from 'react'
import './App.css'
function App({msg}) {
let [showBadge, setShowBadge] = useState(false)
useEffect(()=>{
  console.log("efacteded .....")
},[showBadge])
const  handle = ()=>{
setShowBadge(true)
let myTime = setTimeout(() => {
  setShowBadge(false)
}, 900);
}
  return (
    <>
  <div>
<button className='border-2 p-2 rounded-full text-red-900 text-center  bg-pink-300 font-bold'   onClick={handle}>Login</button>
 {showBadge &&  <h1 className="text-5xl bg-green-300 font-bold rounded-3xl shadow-lg shadow-gray-500/75 m-5 text-blue-500 p-10 text-center leading-tight">
  {msg}
   

</h1>  }
</div>  </>
  )
}

export default App
