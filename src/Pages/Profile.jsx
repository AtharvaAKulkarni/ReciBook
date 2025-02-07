import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
    const navigate=useNavigate();
    const token=localStorage.getItem('token');
    const [profile, setProfile]=useState(null);
    useEffect(()=>{
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            const getProfile=async()=>{
                try{
                    const response=await axios.post('http://localhost:3000/get-profile', {userId: user.id},
                        {
                            headers:{
                                Authorization:`Bearer ${token}`,
                            },
                        }
                    )
                    setProfile(response.data.user);
                }
                catch(err){
                    alert(err);
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login')
                }
            }

            getProfile();
        }

    }, [token])
   
    if(!token){
        navigate('/login')
    }

    return(
        <div>
            {profile ? (
                <div>
                    <h1 className='text-center'>Welcome {profile.name}</h1>
                    <img className='h-50 w-50 rounded-full mx-auto' src={profile.profilePicture} />
                    <p className='text-center flex gap-2 justify-center'>About:<p className='text-center'>{profile.bio}</p></p>
                </div>
            ):(
               <div></div>
            )}
        </div>
    )
}
