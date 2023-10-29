import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
        <section className='-z-50 banner relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-7xl font-bold z-10 py-3'> FoodBite </p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl py-5'> Bite the food, get the taste! </p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'> </div>
        </section>
    </div>
  )
}

export default HomePage