import React from 'react'
import './home.css' 
import Slider from './Slider'
import CategoriesContainer from './CategoriesContainer'

const Home = () => {
  return (
    <>
      <div className='slider-div'>
        <Slider/>
      </div>

      <div className='cartegory-div'>
        <CategoriesContainer/>
      </div>
    </>
  )
}

export default Home;