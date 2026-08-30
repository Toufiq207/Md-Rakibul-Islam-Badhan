import React from 'react'
import Hero from '../component/Hero'
import About from '../layout/About'
import Service from '../layout/Service'
import Contact from '../layout/Contact'
import Project from '../layout/Project'
import Skills from '../layout/Skills'
import Exprierence from '../layout/Exprierence'
import Faq from '../layout/Faq'
const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Exprierence/>
        <Service/>
        <Faq/>
      <Project/>
        <Contact/>
    </div>
  )
}

export default Home