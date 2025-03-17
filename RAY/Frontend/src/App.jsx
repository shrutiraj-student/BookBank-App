import React from 'react';

/*import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FreeBook from './components/FreeBook';
import Footer from './components/Footer';*/
import HomePage from './homepage/HomePage';
import Courses from './components/Courses';
import { Route, Routes } from 'react-router-dom'
import CousePage from './courses/CousePage';
import SignUp from './components/SignUp';



const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark : test-white'>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/courses' element={<CousePage/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
       </Routes>
      </div>

   
    </>
  )
}

export default App
