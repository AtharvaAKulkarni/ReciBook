import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import star from '../assets/star.png'
import loginImg from '../assets/login-img.png'
import axios from 'axios'
import { useState } from 'react'
export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe]=useState({});
  //Fetch recipe based in id
  useEffect(()=>{
    const getRecipeInfo=async ()=>{
      try{
        const recipeArray=await axios.post('http://localhost:3000/get-recipes', {condition:"id", id});
        setRecipe(recipeArray.data.recipe[0]);
      }
      catch(err){
        alert("Something went wrong");
      }
    } 

    getRecipeInfo();
  }, [])
  return (
    <div className='flex flex-col h-full w-full bg-green-950'>
      <div className='w-fit mx-auto h-fit  mt-4 text-black'>
        <p className='text-center font-[Sour_Gummy] text-3xl bg-amber-50 p-2'>{recipe.name}</p>
        <div className='mx-auto flex justify-center items-center gap-2 mt-3'><img src={star} className='h-4 w-4' /><p className='font-[Poppins] text-white'>{recipe.rating}</p></div>
      </div>
      <a className='mx-auto' href='#recipe'><button className='p-4 bg-gray-50 opacity-90 w-fit mx-auto mt-4 cursor-pointer font-bold hover:opacity-100 hover:text-red-400'>Jump Directly to Instructions</button></a>
      {/* Carousel */}
      <hr className='w-[40vw] mt-8 mx-auto text-gray-400' />
      <img src={loginImg} className='w-[100vw] h-[100vh] mx-auto mt-8' />
      <div className='flex flex-col gap-3 items-center mt-4 '><p className='font-bold text-3xl font-[Sour_gummy] text-white underline '>Description</p><p className='bg-gray-100 w-[80vw] mx-auto mt-2 p-3 rounded-2xl'>{recipe.description}</p>
      </div>
      <hr className='w-[30vw] text-gray-200 mt-4 mx-auto' />

      {/* Recipe Instrcutions and ingredients */}

      <section className='bg-amber-50' id="recipe">
        <div className='bg-purple-400 flex flex-col mt-13 w-[50vw] mx-auto mb-8 p-1 pb-3'>
          <img src={loginImg} className='h-25 w-25 rounded-full mx-auto -translate-y-8' />
          <p className='mx-auto text-2xl font-bold text-white font-[Poppins]'>{recipe.name}</p>
          <hr className='mx-auto w-[40%] text-gray-100 my-4' />
          <div className='mx-auto flex flex-col items-center w-[80%] gap-2'>
            <p className='text-white font-serif text-[18px] font-semibold'>{recipe.rating}</p>
            <div className='flex gap-4'>
            <p className='text-gray-300 font-serif text-[16px] font-semibold'>Total Time: <span className='text-white'>{recipe.time}</span></p>
            <p className='text-gray-300 font-serif text-[16px] font-semibold'>Yield: <span className='text-white'>{recipe.yield}</span></p>
            </div>
          </div>
          <div className='bg-white w-[98%] mx-auto mt-5 p-4'>
            <p className='p-4 font-bold'>Ingredients</p>
            {recipe.ingridients?.map((ingridient, index)=>(
                <label  key={index} className='flex gap-2 ml-10 text-[18px] items-center'><input type='checkbox' className='size-4' />{ingridient}</label>
            ))}
          </div>
          <div className='bg-white w-[98%] mx-auto mt-2 p-4'>
            <p className='p-4 font-bold'>Instructions</p>
              <p className='ml-7'>{recipe.instructions}</p>
          </div>
          <div className='bg-white w-[98%] mx-auto mt-2 p-4'>
            <p className='p-4 font-bold'>Notes</p>
              <p className='ml-7'>{recipe.notes}</p>
          </div>
        </div>
      </section>

      {/* User info */}
      <div className='flex gap-3 ml-20 h-fit p-4 w-[70vw] bg-white mt-8 items-center rounded-2xl'>
        <img src={loginImg} className='h-40 w-40 rounded-full'/>
        <div>
          <p>Hey there! I am Atharva Kulkarni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad recusandae similique reiciendis molestias optio cupiditate pariatur sapiente possimus culpa omnis voluptatem, laudantium excepturi ab quasi non minus, nulla cum earum!
          Earum ea dolores ullam et error, beatae, impedit natus odio ipsum sed qui quidem sit officiis aspernatur suscipit modi neque. Consequuntur similique aspernatur veniam numquam accusantium vero aliquid soluta ipsam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolore facere, tenetur quas deserunt excepturi beatae nesciunt, enim unde nulla tempora debitis nisi et numquam hic, sed a? Aperiam, dolor!
          Illum ducimus commodi vel fugiat laboriosam incidunt optio laudantium, voluptatem quisquam corporis molestias, labore vitae, consectetur magnam. Incidunt maxime repellat quia laboriosam veniam nemo dolorum cum delectus iste tempora. Facere?</p>
        </div>
      </div>
      <p>Comments</p>
    </div>
  )
}
