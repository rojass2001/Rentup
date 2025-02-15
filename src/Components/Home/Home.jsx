import React from 'react'
import Hero from './Hero'
import Propertytype from './Propertytypes'
import Banner from './Banner'
import Recentlylisted from './Recentlylisted'
import Properties from './Property/Properties'
import Ourawards from './Ourawards/Ouraward'
import Agents from './Agent/Agent'


function Home() {
  return (
    <div className='w-full'>
    
      <Hero/>
      <Propertytype/>
      <Banner/>
      <Recentlylisted/>
      <Properties/>
      <Ourawards/>
      <Agents/>
    
    </div>
  )
}

export default Home
