import React, { useState } from 'react'
import notebook from '../assets/notebook.png'
import loginImg from '../assets/login-img.png'
import star from '../assets/star.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
export const RecipeList = () => {
  const { category } = useParams();
  const [allRecipes, setAllRecipes]=useState([])
  useEffect(()=>{
    const getRecipes=async ()=>{
        try{
            const Recipes=await axios.post('https://recipe-book-api-nu.vercel.app/get-recipes', {condition:"all"});
            setAllRecipes(Recipes.data.recipes);
        }
        catch(err){
            alert(err);
        }
        
    }
    getRecipes();
},[])
  return (
    
    <div className='recipe-list-main mb-10 '>
      <div className='flex gap-2 items-center justify-center mt-10'><img src={notebook} alt="notebook" className='h-10 w-10' /><p className='font-[Sour_Gummy] text-2xl text-center'>All Recipes</p></div>

      {/* All recipes Container */}
      <div className='recipe-container flex flex-wrap w-[90vw] justify-center grow-0 shrink-0 gap-8 mx-auto'>
        {allRecipes.map((recipe, index)=>(
          <Link to={`/recipe/${recipe._id}`} key={index}>
            <div className="recipe-tile w-65 h-90 bg-amber-50 mt-8 hover:scale-105 transition-[2.5s] ease-in-out hover:shadow-2xl cursor-pointer">
              <img src={`recipe-book-api-nu.vercel.app${recipe?.imageUrl}`} className='h-[75%] w-full' />
              <div className='h-[30%] w-full bg-cyan-50 flex flex-col justify-evenly'>
                <p className='text-center flex justify-center items-center gap-2'><img src={star} className='h-4 w-4' />{recipe.rating}</p>
                <p className='text-center w-full max-w-[100] text-[18px] font-semibold font-[Poppins]'>{recipe.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      

    </div>
  )
}
