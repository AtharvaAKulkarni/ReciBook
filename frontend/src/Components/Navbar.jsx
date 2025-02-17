import { useState, useEffect } from 'react';
import React from 'react';
import search from '../assets/icons8-search.svg';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
      }, [token]);

    return (
        <div className="navbar h-[10vh] w-full shadow flex items-center justify-between px-4 py-2 bg-white">
            <div className="logo text-lg font-bold">RecipeBook</div>

            {/* Navigation links */}
            <ul className="hidden md:flex space-x-8 text-[20px]">
                <Link to="/"><li className='hover:text-orange-400 active:text-orange-600'>Home</li></Link>
                <Link to="/recipes/all"><li className='hover:text-orange-400 active:text-orange-600'>Recipes</li></Link>
                <Link to="/about-us"><li className='hover:text-orange-400 active:text-orange-600'>About Us</li></Link>
                <Link to="/my-account"><li className='hover:text-orange-400 active:text-orange-600'>My Account</li></Link>
                <Link to="/add-recipe"><li className='hover:text-orange-400 active:text-orange-600'>Add Recipe</li></Link>
            </ul>

            {/* Search and login area */}
            <div className="flex gap-2 items-center">
                <input 
                    type="text" 
                    className="border-2 outline-0 px-2 py-1 rounded" 
                    placeholder="Search..." 
                />
                <img src={search} alt="Search" className="h-8" />
            </div>

            {/* Mobile view navigation */}
            <div className="md:hidden flex items-center gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Menu</button>
            </div>
        </div>
    );
};
