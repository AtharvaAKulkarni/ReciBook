import React from 'react'
import loginImg from '../assets/login-img.png'
export const Login = () => {
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
          <input type='text' placeholder='Username' className='border-2 rounded-[8px] h-12 w-85 p-2'/>
          <input type='password' placeholder='Password' className='border-2 rounded-[8px] h-12 w-85 p-2'/>
        </div>
          <div className='flex w-95 gap-4 font-mono my-8'><input type='checkbox' /><p>I agree to the <span className='text-blue-400 underline'>Terms and Conditions</span> and acknowledge my responsibilities.</p></div>
          <button className='border-[1px] rounded-2xl h-11 w-50 mx-auto bg-amber-400 active:bg-amber-600'>Login</button>
          <p className='mx-auto my-7'>Dont have an account? <span className='text-blue-600 cursor-pointer'>Sign Up</span> yourself!</p>
      </div>
    </div>
  )
}
