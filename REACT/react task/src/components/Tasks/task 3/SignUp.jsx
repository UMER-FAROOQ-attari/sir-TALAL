import { Link } from 'react-router-dom';
import Login from './Login';
import React, { useState } from 'react'
    const SignUp = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [msg,setMsg] = useState("")
        const [form , setForm] = useState({
        name:"",
        email:"",
        password:"",
        confirm:""
    })
function submit(e){
    const name = e.target.name
    const value = e.target.value
    setForm((per)=>{
        
        return{...per,[name]:value}

    })
}
    let smallabc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let bigABC =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let specialCharacter  = ['@','#','$','%','&','!']

    function      signUP(e){
    e.preventDefault()
    let chr = form.password.split("");
    let smalletter = false;
    let bigletter = false;
    let specialletter = false
    chr.forEach( (char) => {
    if(smallabc.includes(char)){
        smalletter = true
    }  
    if(bigABC.includes(char)){
        bigletter = true
    }
    if(specialCharacter.includes(char)){
        specialletter = true
    }   
    }); 
    if(form.password.length < 8){
    setMsg("Password must be at least 8 characters")  
    return;
    }
    if(!smalletter){
        setMsg("Pleas add Small Chracter")  
    return;
    }
    if(!bigletter){
        setMsg("Pleas add Big Chracter")  
    return;
    }
    if(!specialletter){
        setMsg("Pleas add Special Chracter")  
    return;
    }
    if(form.confirm != form.password){
    setMsg("Confirm Passwords do not match! ")
    return;
    }
    localStorage.setItem(form.email,form.password)
    setMsg("Signup Successfully Done!")
    
    }
    return (
    <>
    <div className="bg-sky-100">
    <div className="bg-black max-w-fit p-3 m-2 flex flex-col items-center place-self-center rounded-2xl">
        <h2  className='text-4xl font-bold font-mono text-sky-300'>Sign Up</h2>
        <p className="text-red-500">{msg}</p>
        <form onSubmit={signUP} className='' >
    <div className="flex flex-col p-2 mt-3 gap-0.5 px-10">
    <label htmlFor="fullName"  className='text-2xl font-bold text-sky-400'>Full Name</label>
    <input name='name' value={form.name} onChange={submit} type="text"  className='border-2 p-2 rounded-2xl text-sky-200 bg-black' id='fullName'  placeholder='Pleas Enter Your Name' required />
    <label htmlFor="userEmail" className='text-2xl font-bold text-sky-400'>Email</label>
    <input name='email' value={form.email} onChange={submit} type="email" className='border-2 p-2 rounded-2xl  text-sky-200  bg-black' id='userEmail' placeholder='Pleas Enter Your Email' required/>
    <label htmlFor="password" className='text-2xl font-bold text-sky-400'>Password</label>
    <input name='password' value={form.password} onChange={submit} type={showPassword ? "text" : "password"}  className='border-2 p-2 rounded-2xl  text-sky-200  bg-black' id="password"  placeholder='Pleas Creat Your Password' required/>
    <label className="text-sky-200 text-sm mt-1 flex items-center">
  <input type="checkbox"onChange={(e) => setShowPassword(e.target.checked)} className="mr-2"/>
  Show Password
</label>
    <label htmlFor="cnfrmpassword" className='text-2xl font-bold text-sky-400'>Confirm Password</label>
    <input name='confirm' type="password" value={form.confirm} onChange={submit} className='border-2 p-2 rounded-2xl  text-sky-200  bg-black' id="cnfrmpassword"  placeholder='Again Enter Password'   required/>
    <div className="submit text-center m-3">
    <input type="submit"  className="btn border-2 w-fit bg-black text-sky-200 p-2 rounded-2xl font-medium cursor-pointer" />
  
    </div>
    </div>
    <p className='text-sky-50'>{`Hy ${form.name} Your email is ${form.email}`}</p>
<p className='text-sky-50'>if You have a acount already pleas <Link className='text-blue-400' to="/task3/login">login</Link></p>
        </form>
    </div>



</div>
    </>      
    )
    }

export default SignUp
