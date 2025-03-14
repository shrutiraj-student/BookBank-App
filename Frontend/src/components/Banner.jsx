import React from 'react'
import banner from "/book2.png"

const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
    <div className='w- full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold '>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
    <p className='text-xl'>
    If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input
    </p>
    <label className="input input-bordered flex items-center gap-2">
    Email
    <input type="text" className="grow" placeholder="daisy@site.com" />
    </label>
    </div>
    <button className="btn btn-secondary mt-6 mb-10">Secondary</button>
    </div>
    <div className='w- full md:w-1/2 order-1'>
    <img src={banner} className='w-100 h-100 mt-20 ml-20' alt=''/>
    </div>
    </div>
    
      
    </>
  )
}

export default Banner
