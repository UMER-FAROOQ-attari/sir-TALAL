import { Button } from '@mui/material'
import React, { useState } from 'react'

const Task2 = () => {
  const [count, setCount] = useState(0)
    return (
    <div className="count flex  justify-center mt-10 ">
   <div className="counter gap-2  flex flex-col items-center text-3xl border-2 w-fit p-2 rounded-2xl">
    <h1>{count}</h1>
    <div className="btn flex gap-3">
    <Button variant="contained" onClick={()=>(setCount(count + 1))}><span className='text-3xl'>+</span></Button>
    <Button variant="contained" onClick={()=>(setCount(0))}><span className='text-3xl'>Reset</span></Button>
    <Button variant="contained" onClick={()=>(count > 0 ? setCount(count - 1) : 0 )}><span className='text-3xl'>-</span></Button>
</div>
   </div>
   </div>
  )
}

export default Task2