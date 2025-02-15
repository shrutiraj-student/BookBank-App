import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'


const CousePage = () => {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Courses/>
      </div>
      <Footer/>
    </>
  )
}

export default CousePage
