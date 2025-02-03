import React from 'react'
import notebook from '../assets/notebook.png'
import loginImg from '../assets/login-img.png'
import star from '../assets/star.png'
import { Link, useParams } from 'react-router-dom'

export const RecipeList = () => {
  const { category } = useParams();
  return (
    
    <div className='recipe-list-main mb-10'>
      <div className='flex gap-2 items-center justify-center mt-10'><img src={notebook} alt="notebook" className='h-10 w-10' /><p className='font-[Sour_Gummy] text-2xl text-center'>All Recipes</p></div>

      {/* All recipes Container */}
    <Link to='/recipe/id'>
      <div className='recipe-container flex flex-wrap w-[90vw] justify-center grow-0 shrink-0 gap-8 mx-auto'>
        <div className="recipe-tile w-65 h-90 bg-amber-50 mt-8 hover:scale-105 transition-[2.5s] ease-in-out hover:shadow-2xl cursor-pointer">
          <img src={loginImg} className='h-[75%] w-fit' />
          <div className='h-[30%] w-full bg-cyan-50 flex flex-col justify-evenly'>
            <p className='text-center flex justify-center items-center gap-2'><img src={star} className='h-4 w-4' />Reviews</p>
            <p className='text-center w-full max-w-[100] text-[18px] font-semibold font-[Poppins]'>Heading</p>
          </div>
        </div>
      </div>
      </Link>

    </div>
  )
}
