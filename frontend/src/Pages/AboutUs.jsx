import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold font-[Poppins] mb-6 text-blue-400">About Us</h1>
      <p className="text-lg font-[Open Sans] text-gray-300 max-w-3xl text-center leading-relaxed">
        Welcome to <span className="text-blue-300 font-semibold">ReciBook</span>, your go-to platform for sharing and discovering amazing recipes. 
        Our goal is to bring food lovers together and create a community where anyone can share 
        their favorite dishes with the world.
      </p>
      <p className="mt-6 text-gray-400 font-[Open Sans]">
        Whether you’re a professional chef or a home cook, <span className="text-blue-300">ReciBook</span> is the perfect place to 
        showcase your culinary skills. Join us today and start sharing your recipes!
      </p>
      <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-[Poppins] shadow-md transition duration-300">
        Explore Recipes
      </button>
    </div>
  );
};

export default AboutUs;
