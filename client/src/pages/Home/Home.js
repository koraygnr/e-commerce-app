import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <>
        <HeroSlider />
        <FeaturedProducts type="Featured" />
        <Categories />
        <FeaturedProducts type="Trending" />
        <Contact />
    </>
  )
}

export default Home