import React from 'react';
import search from '../assets/icons8-search.svg';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const token=localStorage.getItem('token');

    return (
        <div className="navbar h-[10vh] w-full shadow flex items-center justify-between px-4 py-2 bg-white">
            <div className="logo text-lg font-bold">RecipeBook</div>

            {/* Navigation links */}
            <ul className="hidden md:flex space-x-8 text-[20px]">
                <Link to="/"><li className='hover:text-orange-400 active:text-orange-600'>Home</li></Link>
                <Link to="/recipes/all"><li className='hover:text-orange-400 active:text-orange-600'>Recipes</li></Link>
                <Link to="/about-us"><li className='hover:text-orange-400 active:text-orange-600'>About Us</li></Link>
                {token ? (
                    <Link to="/my-account"><li className='hover:text-orange-400 active:text-orange-600'>My Account</li></Link>
                ) : ( <Link to="/login"><li className='hover:text-orange-400 active:text-orange-600'>My Account</li></Link>)}
            </ul>

            {/* Search and login area */}
            <div className="flex gap-2 items-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
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
