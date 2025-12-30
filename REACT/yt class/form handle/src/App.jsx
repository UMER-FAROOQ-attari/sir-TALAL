import { useState } from 'react'
import './App.css'

function App() {
  const [inp, setinp] = useState('')
const changHndl = ()=>{
console.log("fill",inp);
setinp("");
}
  return (
    <>
    <form onSubmit={(e)=>{
      changHndl();
      e.preventDefault()
    }}>
      <input type="text" value={inp} onChange={(e)=>{
        
        setinp(e.target.value)
      }} />
      <br />
      <input type="submit" />
    </form>
     </>
  )
}

export default App
