import React from 'react'
import Hero from '../component/Hero'
import About from '../layout/About'
import Service from '../layout/Service'
import Contact from '../layout/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Service/>
        <Contact/>
    </div>
  )
}

export default Home