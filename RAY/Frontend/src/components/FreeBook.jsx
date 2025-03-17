import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
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

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/books/get-free-book');
      setBooks(response.data.data);
    } catch (err) {
      console.warn("Error fetching books:", err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books)

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className='font-semibold md:text-3xl text-xl pb-2'>Free Books</h1>
        <p className='mb-3 md:text-xl text-lg font-thin'>
          A Passive Infrared sensor is an electronic sensor that measures infrared light 
          radiating from objects in its field of view.
        </p>
      </div>

      <div className='my-8'>
        <Slider {...settings}>
          {books.map((book) => (

            <div key={book._id} className="p-1 py-1">
              <Cards item={book} offer={"Free"} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
