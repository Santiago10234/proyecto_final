import { useNavigate } from 'react-router-dom'
import '../styles/about.css'
import React from 'react'
import NavBar from '../components/NavBar'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <NavBar/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About
