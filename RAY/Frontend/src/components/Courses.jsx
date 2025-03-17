import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [showBooks, setAllBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/books/get-all-books');
      setAllBooks(response.data.data);
    } catch (err) {
      console.warn("Error fetching books:", err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(showBooks);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :</span></h1>
          <p className='mt-12'>
            A Data Flow Diagram (DFD) is a traditional visual representation of the information flows within a system. A neat and clear DFD can depict the right amount of the system requirement graphically. It can be manual, automated, or a combination of both.
          </p>

          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {showBooks.map((book) => (
            <Cards item={book} key={book._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;