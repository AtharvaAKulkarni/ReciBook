import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export const Profile = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [profile, setProfile] = useState(null);
    const [recipes, setRecipes] = useState(null);
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

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.post('http://localhost:3000/get-recipes', { condition: "user", id: profile.username });
                setRecipes(response.data.recipe);
            }
            catch (error) {
                console.log(error);
            }
        }

        getRecipes();
    }, [profile])
    console.log(recipes);

    return (
        <div>
            {profile ? (
                <div>
                    <h1 className='text-center text-2xl font-bold mt-4'>Welcome {profile.name}</h1>
                    <img className='h-50 w-50 rounded-full mx-auto' src={profile.profilePicture} />
                    <button className='border-2 p-3 rounded-2xl bg-blue-400'>Update Profile Picture</button>
                    <p className='text-center flex gap-2 justify-center'>About:<span className='text-center'>{profile.bio}</span></p>
                    <button className='border-2 p-3 rounded-2xl bg-blue-400'>Update Bio</button>
                </div>
            ) : (
                <div className='mx-auto my-auto'><p className='text-center text-2xl font-bold'>Loading Your Profile..</p></div>
            )}

            <div className='recipesByUser w-full h-full bg-gray-300' >
                <p className='ml-3 text-2xl font-bold font-[Poppins] text-center p-3'>Recipes You have upload...</p>
                <div className='flex flex-col gap-3 ml-10 mt-8 mb-15'>
                    {
                        recipes ? (
                            recipes.map((recipe, index) => (
                                <Link to={`/recipe/${recipe._id}`}>
                                    <div className=' w-[80%] p-3 flex gap-4 hover:bg-white group transition-[10s] ease-in-out rounded-2xl'>
                                        <img className='w-40 h-40 ml-10 group-hover:scale-110 rounded-2xl' src={`http://localhost:3000${recipe?.imageUrl}`} />
                                        <div className='flex w-full h-full justify-around'>
                                            <h1 className='text-3xl font-[Sour_Gummy] group-hover:bg-amber-100 p-2'>{recipe.name}</h1>
                                            <p>Likes: {recipe.likes}</p>
                                        </div>
                                    </div>
                                    <hr className='w-[80%] text-gray-400 mt-2 text-center'/>
                                </Link>
                            ))
                        ) : (
                            <p>You havent Uploaded any Recipe! Share us whaat you've got!</p>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
