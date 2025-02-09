import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">RecipeBook</h2>
          <p className="text-gray-400 mt-2">Something's Cooking</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © 2025 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};
