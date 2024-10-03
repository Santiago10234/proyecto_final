import { useNavigate } from 'react-router-dom'
import '../styles/about.css'
import React from 'react'
import NavBar from '../components/NavBar'
import AboutUs from '../components/AboutUs'

function About() {
  return (
    <div>
      <NavBar/>
      <AboutUs/>
    </div>
  )
}

export default About
