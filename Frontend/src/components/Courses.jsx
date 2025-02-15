import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json';
import Cards from './Cards';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';



const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     
     <div className='mt-28 items-center juistify-center text-center'>
     <h1 className='text-2xl  md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :</span></h1>
     <p className='mt-12'>
     A Data Flow Diagram (DFD) is a traditional visual representation of the information flows within a system. A neat and clear DFD can depict the right amount of the system requirement graphically. It can be manual, automated, or a combination of both.
     </p>

     <Link to="/">
     <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
     </Link>
     
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    
     {
        list.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
     }
    
     </div>
     </div>
    </>
  )
}

export default Courses
