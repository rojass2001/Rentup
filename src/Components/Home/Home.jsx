import React from 'react'
import Hero from './Hero'
import Propertytype from './Propertytypes'
import Banner from './Banner'
import Recentlylisted from './Recentlylisted'
import Properties from './Property/Properties'
import Ourawards from './Ourawards/Ouraward'
import Agents from './Agent/Agent'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className='w-full'>
    <Navbar/>
      <Hero/>
      <Propertytype/>
      <Banner/>
      <Recentlylisted/>
      <Properties/>
      <Ourawards/>
      <Agents/>
      <Footer/>
    </div>
  )
}

export default Home
