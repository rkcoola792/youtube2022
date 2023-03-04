import Slider from '../../Components/Slider/Slider'
import React from 'react'
import "./Home.scss"
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home
