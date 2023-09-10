'use client';
import React from 'react'
import { Button } from './index'
import Image from 'next/image';

const Hero = () => {
  const handleClick = () => {

  }
  return (
    <div className="hero">
      {/* Titles div */}
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        Your Car, Your Way: Discover, Reserve, and Roll Out!
        </h1>
        <p className='hero__subtitle'>
        Elevate Your Car Rental Experience with Our Seamless Booking Process.
        </p>
        <Button
        title="Explore Cars"
        componentStyle="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleClick}
        />
      </div>

      {/* Image div */}
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="Car_image" fill className='object-contain' />
        </div>
          <div className='hero__image-overlay' />

      </div>
    </div>
  )
}

export default Hero
