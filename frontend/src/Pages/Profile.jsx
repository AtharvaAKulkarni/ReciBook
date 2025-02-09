import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        
        if (!token) {
            navigate('/login');
            return;
        }
        const getProfile = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const response = await axios.post('http://localhost:3000/get-profile', { userId: user.id },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                setProfile(response.data.user);
            }
            catch (err) {
                alert("Session expired, please log in again.");
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
            }
        }

        getProfile();
    }, [token, navigate])


    return (
        <div>
            {profile ? (
                <div>
                    <h1 className='text-center'>Welcome {profile.name}</h1>
                    <img className='h-50 w-50 rounded-full mx-auto' src={profile.profilePicture} />
                    <p className='text-center flex gap-2 justify-center'>About:<p className='text-center'>{profile.bio}</p></p>
                </div>
            ) : (
                <div className='mx-auto my-auto'><p className='text-center text-2xl font-bold'>Loading Your Profile..</p></div>
            )}
        </div>
    )
}
