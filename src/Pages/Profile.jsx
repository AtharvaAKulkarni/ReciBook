import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
export const Profile = () => {
    const token=localStorage.getItem('token');
    const [profile, setProfile]=useState(null);
    useEffect(()=>{
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            const getProfile=async()=>{
                try{
                    const response=await axios.post('http://localhost:3000/get-profile', {userId: user.id})
                    setProfile(response.data.user);
                }
                catch(err){
                    alert(err);
                }
            }

            getProfile();
        }

    }, [token])
   
    if(!token){
        return <div>Login karo bkl</div>
    }

    return(
        <div>
            {profile ? (
                <div className='w-full h-full'>
                    <h1 className='mx-auto'>Welcome {profile.name}</h1>
                    <img className='h-50 w-50 rounded-full mx-auto' src={profile.profilePicture} />
                </div>
            ):(
                <div>Piroblem ho gaya hai</div>
            )}
        </div>
    )
}
