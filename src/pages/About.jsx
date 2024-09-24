import { useNavigate } from 'react-router-dom'
import '../styles/about.css'
import React from 'react'
import NavBar from '../components/NavBar'
import AboutUs from '../components/AboutUs'

function About() {
    const navigate = useNavigate
  return (
    <div>
      <NavBar/>
      <AboutUs/>
    </div>
  )
}

export default About
