import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Category />
 
        {/* <h1>Welcome to The News App</h1> */}
      <Footer />
    </div>
  )
}

export default HomePage
