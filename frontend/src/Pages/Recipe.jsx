import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import star from "../assets/star.png";
import loginImg from "../assets/login-img.png";
import like from "../assets/like.png";

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch recipe based on ID
  useEffect(() => {
    const getRecipeInfo = async () => {
      try {
        const res = await axios.post("http://localhost:3000/get-recipes", {
          condition: "id",
          id,
        });
        console.log("API Response:", res.data); // Debugging log
        setRecipe(res.data.recipe); // Ensure correct data format
      } catch (err) {
        console.error("Error fetching recipe:", err);
        alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getRecipeInfo();
  }, [id]);

  // Loading & Error Handling
  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found</p>;
  console.log(`recipe-book-api-nu.vercel.app${recipe?.imageUrl}`);
  return (
    <div className="flex flex-col h-full w-full bg-green-950">
      <div className="w-fit mx-auto h-fit mt-4 text-black">
        <p className="text-center font-[Sour_Gummy] text-3xl bg-amber-50 p-2">
          {recipe?.name}
        </p>
        <div className="mx-auto flex justify-center items-center gap-2 mt-3">
          <img src={star} className="h-4 w-4" />
          <p className="font-[Poppins] text-white">{recipe?.rating ?? "N/A"}</p>
        </div>
      </div>

      <a className="mx-auto" href="#recipe">
        <button className="p-4 bg-gray-50 opacity-90 w-fit mx-auto mt-4 cursor-pointer font-bold hover:opacity-100 hover:text-red-400">
          Jump Directly to Instructions
        </button>
      </a>

      {/* Recipe Image */}
      <hr className="w-[40vw] mt-8 mx-auto text-gray-400" />

      {/* Description */}
      <div className="flex flex-col gap-3 items-center mt-4">
        <p className="font-bold text-3xl font-[Sour_gummy] text-white underline">
          Description
        </p>
        <p className="bg-gray-100 w-[80vw] mx-auto mt-2 p-3 rounded-2xl text-center">
          {recipe?.description ?? "No description available"}
        </p>
      </div>
      <div className="flex gap-2 w-fit h-fit mx-auto">
        {/* First image - Always visible */}
        <img
          src={`http://localhost:3000${recipe?.imageUrl}`}
          alt="Recipe"
          className="w-[90vw] h-[50vh] mx-auto mt-8 md:w-[70vw] md:h-[80vh]"
        />
      </div>


      {/* Recipe Instructions & Ingredients */}
      <section className="bg-amber-50 mt-8" id="recipe">
        <div className="bg-purple-400 flex flex-col mt-13 w-[50vw] mx-auto mb-8 p-1 pb-3">
          <img src={`http://localhost:3000${recipe?.imageUrl}`} className="h-25 w-25 rounded-full mx-auto -translate-y-8" />
          <p className="mx-auto text-2xl font-bold text-white font-[Poppins]">
            {recipe?.name}
          </p>
          <hr className="mx-auto w-[40%] text-gray-100 my-4" />
          <div className="mx-auto flex flex-col items-center w-[80%] gap-2">
            <p className="text-white font-serif text-[18px] font-semibold">
              {recipe?.rating ?? "No rating"}
            </p>
            <div className="flex gap-4">
              <p className="text-gray-300 font-serif text-[16px] font-semibold">
                Total Time: <span className="text-white">{recipe?.time ?? "N/A"}</span>
              </p>
              <p className="text-gray-300 font-serif text-[16px] font-semibold">
                Yield: <span className="text-white">{recipe?.yield ?? "N/A"}</span>
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white w-[98%] mx-auto mt-5 p-4">
            <p className="p-4 font-bold">Ingredients</p>
            {recipe?.ingridients?.length > 0 ? (
              recipe.ingridients.map((ingredient, index) => (
                <label key={index} className="flex gap-2 ml-10 text-[18px] items-center">
                  <input type="checkbox" className="size-4" />
                  {ingredient}
                </label>
              ))
            ) : (
              <p className="ml-7">No ingredients available</p>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-white w-[98%] mx-auto mt-2 p-4">
            <p className="p-4 font-bold">Instructions</p>
            <p className="ml-7">{recipe?.instructions ?? "No instructions available"}</p>
          </div>

          {/* Notes */}
          <div className="bg-white w-[98%] mx-auto mt-2 p-4">
            <p className="p-4 font-bold">Notes</p>
            <p className="ml-7">{recipe?.notes ?? "No notes available"}</p>
          </div>

          {/* Like Button */}
          <div className="flex items-center gap-2">
            <p className="mt-4 ml-4">
              Liked this recipe? Hit that like button and show some love!
            </p>
            <img src={like} className="h-10 w-10 mt-4 cursor-pointer text-pink-50" />
          </div>
        </div>
      </section>

      {/* User info */}
      <div className="flex gap-3 ml-20 h-fit p-4 w-[70vw] bg-white mt-8 items-center rounded-2xl">
        <div className="flex flex-col items-start">
          <p>
            Uploaded By: {recipe?.uploadedBy}
          </p>
          <p>
            {recipe?.uploadedByBio}
          </p>
        </div>
      </div>
    </div>
  );
};
