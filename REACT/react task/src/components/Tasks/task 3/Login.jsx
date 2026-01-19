import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () =>{
    const [lgnemail , setLgnemail] = useState("");
    const [lgnpassword , setLgnpassword] = useState("");
    const [msg,setMsg] = useState("")
function login(e){
    e.preventDefault();
     let email =  localStorage.getItem(lgnemail)
    if(!email){
        
        setMsg("pleas signUp , User is not registered");
        return;
    }
    if(email != lgnpassword){
        setMsg("pleas enter correct Password");
        return;
    }

    setMsg("Yes welcom back ")
}
    return(
<>
<div className="login bg-black max-w-fit p-3 m-2 flex flex-col items-center place-self-center rounded-2xl">
    <h2 className='text-4xl font-bold font-mono text-amber-300'>Login</h2>
    <form onSubmit={login}>
        <div className="flex flex-col p-2 mt-3 gap-0.5 px-10 ">
 <label htmlFor="lgnuserEmail" className='text-2xl font-bold text-amber-400'>Email</label>
    <input value={lgnemail} onChange={(e)=>{setLgnemail(e.target.value)}}  type="email" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id='lgnuserEmail' placeholder='Pleas Enter Your Email' required/>
 <label htmlFor="lgnpassword" className='text-2xl font-bold text-amber-400'>Password</label>
    <input value={lgnpassword} onChange={(e)=>{setLgnpassword(e.target.value)}}  type="password" className='border-2 p-2 rounded-2xl  text-amber-200  bg-black' id="lgnpassword"  placeholder='Pleas Creat Your Password' required/>
        </div>
        <p className="text-red-500 mt-2">{msg}</p>
    <div className="submit text-center m-3">
    <input type="submit"  className="btn border-2 w-fit bg-black text-amber-200 p-2 rounded-2xl font-medium cursor-pointer" />
<p className='text-amber-50'>if You have not a acount already pleas <Link className='text-blue-400' to='/task3'>Sign Up</Link></p>

    </div>

        </form>

</div>

</>
    )
}


export default Login