import React from 'react'
import Landing from './landing/Landing'
import Skills from './skills/Skills'
import Project from './projects/Projects'
import Experience from './experience/Experience'
import Testimonial from './testimonial/Testimonial'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Body() {
  return (
    <div>
      <div id='home'><Landing /></div>
        <div id='skills'><Skills /></div>
        <div id='projects'><Project /></div>
        <div id='experience'><Experience /></div>
        <div id='testimonial'><Testimonial /></div>
        <div id='contact'><Contact /></div>
        <div id=''><Footer /></div>
        
    </div>
  )
}

export default Body