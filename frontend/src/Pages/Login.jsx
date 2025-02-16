import React, { useState } from 'react'
import loginImg from '../assets/login-img.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Login = () => {
  const navigate=useNavigate();

  const handleSignUp=()=>{
    navigate('/signup');
  }

  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const handleLogin=async()=>{
    try{
      const response=await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`, {username, password});
      alert("Login Success");
      localStorage.setItem('token', response.data.token);
      console.log("Token set in local storage!");
      localStorage.setItem('user',JSON.stringify(response.data.user));
      navigate('/');
    }
    catch(error){
      alert(error.response.data.message);
    }
  }
  console.log(loginImg);
  return (
    <div className='login flex'>
      <div className="loginleft w-[55vw] h-[92vh]">
        {/* Background Image */}
        <img src={loginImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="login-right flex flex-col mx-auto my-20">
        <div className='heading mx-auto my-3.5'>Login</div>
        <div className='flex flex-col space-y-2.5 mx-auto gap-3'>
          <input type='text' placeholder='Username' className='border-2 rounded-[8px] h-12 w-85 p-2' onChange={(e)=>setUsername(e.target.value)}/>
          <input type='password' placeholder='Password' className='border-2 rounded-[8px] h-12 w-85 p-2' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
          <button className='border-[1px] rounded-2xl h-11 w-50 mx-auto mt-4 bg-amber-400 active:bg-amber-600' onClick={handleLogin}>Login</button>
          <p className='mx-auto my-7'>Dont have an account? <span className='text-blue-600 cursor-pointer' onClick={handleSignUp}>Sign Up</span> yourself!</p>
      </div>
    </div>
  )
}
