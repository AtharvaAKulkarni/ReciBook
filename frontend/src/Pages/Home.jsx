import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Home = () => {
    const [trending, setTrending]=useState([]);
    // Get trending recipes

    useEffect(()=>{
        const getTrending=async ()=>{
            try{
                const trendingRecipes=await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/get-recipes`, {condition:"trending"});
                setTrending(trendingRecipes.data.recipes);
            }
            catch(err){
                alert(err);
            }
            
        }
        getTrending();
    },[])
    console.log(JSON.stringify(trending));
    return (
        <div className=''>
            <div className='mx-auto my-4 w-158 h-12 max-w-screen-lg bg-amber-100'>
                <p className='font-mono text-2xl my-4 font-bold text-center'>
                    Simple recipes made for <span className='font-sans text-amber-700'>real, actual, everyday life.</span>
                </p>
            </div>
                <div>
                    <img src={hero} className='w-[90%] mx-auto'/>
                </div>
                {/* Latest and Trending recipes */}
                <div className='trending-recipes w-full h-fit flex flex-col items-center bg-amber-50 mt-3'>
                    <p className='mt-8 text-2xl font-stretch-95% bg-gray-400 p-3 font-semibold'>Latest and Trending recipes</p>
                    <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                    <div className='tile-container mt-8'>
                        {trending.map((recipe, index)=>(
                        <>
                            <div key={index} className='trending-element flex h-[35vh] max-h-[55vh] w-[70vw] justify-start bg-cyan-5 space-x-8.5'>
                                <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}${recipe?.imageUrl}`} className='w-60 h-60 hover:opacity-75'/>
                                <div className='flex flex-col h-[60%] max-h-[100%] w-full justify-baseline gap-2'>
                                    <p className='text-xl text-gray-800'>{recipe?.uploadedOn.substring(0, 10)}</p>
                                    <Link to={`recipe/${recipe?._id}`}><p className='text-2xl font-bold font-serif hover:underline hover:cursor-pointer'>{recipe.name}</p></Link>
                                    <p className='text-[18px] text-gray-600 font-serif max-w-168'>{recipe.description}</p>
                                    <p>Likes: {recipe.likes}</p>
                                    <p>Rating: {recipe.rating}</p>
                                    <Link to={`recipe/${recipe?._id}`}><a className='text-[18px] font-bold text-orange-600 font-serif hover:text-orange-800 hover:cursor-pointer w-fit'>CONTINUE READING</a></Link>
                                </div>
                            </div>
                        <hr className='my-8 w-[70%] mx-auto text-gray-400'/>
                        </>
                        ))}
                    </div>
                </div>
        </div> 
    )
}
