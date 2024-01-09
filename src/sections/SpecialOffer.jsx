import Button from '../components/Button';
import React from 'react'
import {offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap
    items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanguin lg:max-w-lg capitalize text-4xl font-bold">
        
          <span className="text-[#00fd9a]">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium COmfort and style, our meticulously crafted footwear
          is designed to elevate your experience ,providing you with unmatched
          quality, innovation, and and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now"/>
          <Button label="Learn more" backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray' />
      </div>
        </div>
    </section>
  );
}

export default SpecialOffer