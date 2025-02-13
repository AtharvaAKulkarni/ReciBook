import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
    const navigate=useNavigate();
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const handleSignUp=async ()=>{
        if(!name || !email || !username|| !password){
            alert("Please fill out all fields");
            return;
        }
        try{
            const response=await axios.post('http://localhost:3000/sign-up', {name, username, email, password});
            alert(response.data.message);
            if(response.data.success===true){ navigate('/login'); }
        }
        catch(error){
            alert(error.response.data.message);
        }
    }
  return (
    <div className='signup flex'>
        <div className='signup-left bg-amber-50 w-[45vw] h-[100vh] flex'>
            <p className='mx-auto text-7xl my-40 w-90 font-bold'>Welcome to <p className='text-blue-500'>Recipe Book </p></p>
        </div>
        <div className='signup-right bg-amber-200 w-[55vw] h-[100vh]'>
            <h1 className='text-center text-2xl font-bold font-[Poppins] mt-8'>Sign Up!</h1>
            <div className='field-container flex flex-col w-[40%] gap-4 mt-10 mx-auto'>
                <input type='text' placeholder='Your Name' className='p-4 border-1 rounded-2xl font-mono' onChange={(e)=>setName(e.target.value)}/>
                <input type='email' placeholder='Email e.g Johndoe@xyz.com' className='p-4 border-1 rounded-2xl font-mono' onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text' placeholder='Enter a username' className='p-4 border-1 rounded-2xl font-mono' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' placeholder='Password' className='p-4 border-1 rounded-2xl font-mono' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='flex w-95 gap-4 font-mono my-8 mx-auto'><input type='checkbox' /><p>I agree to the <span className='text-blue-400 underline'>Terms and Conditions</span> and acknowledge my responsibilities.</p></div>
            <button className='w-70 h-fit p-5 bg-blue-600 rounded-2xl ml-70 text-xl cursor-pointer hover:bg-blue-500 hover:font-semibold group' onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
  )
}
