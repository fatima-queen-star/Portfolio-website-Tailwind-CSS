import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.jpeg)] bg-cover'
    style={{backgroundSize: "30%", backgroundPosition: "left 190px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-100px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center item-center'>
          <div>
            <p data-aos="zoom-in-down">I' m</p>
            <p data-aos="zoom-in-down">Aliba</p>
            <p data-aos="zoom-in-down">Fatima</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
