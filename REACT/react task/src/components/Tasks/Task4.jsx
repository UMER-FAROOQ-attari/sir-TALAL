import { Key } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Task4 = () => {
  const [work, setWork] = useState("")
    const [list, setlist] = useState([])
  function adWork(){
    if(work == "") return;
    setlist([...list,work])
    setWork("")

    
  }
  function dellist(idx) {
  setlist(list.filter((_, i) => i !== idx));
}

  return (
<>
<div className="flex justify-center p-3 m-2 items-center border-2 w-fit shadow-md rounded-2xl shadow-blue-400/100">
<div className="flex-col">
<input type="text" value={work}  onChange={(e) => setWork(e.target.value)} className='outline-none shadow-md shadow-gray-400/80 p-3 rounded-2xl m-3'placeholder='Pleas enter work'/>
<Button variant="contained" onClick={adWork}>+</Button>
<div className="">
    <ul>{list.map((li , idx)=>(
     <li className='m-3 shadow-2xl p-2 flex justify-between' key={idx}>{li}  <Button variant="contained" onClick={() => dellist(idx)}>X</Button></li>
))}</ul>
</div>
</div></div></>
)
}

export default Task4