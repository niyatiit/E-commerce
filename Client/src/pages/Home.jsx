import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  const {products} = useContext(ShopContext)
  console.log("Products : " ,products)
  

  return (
     <>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetterBox/>
    </>
  )
}

export default Home