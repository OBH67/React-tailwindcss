import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-black h-screen flex flex-col justify-center items-center'>
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white mb-14'>
        Omar Bhale
      </h1>
      <Link
        className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'
        to='/menu'
      >
        CONTACT
      </Link>
    </div>
  );
};

export default Hero;
