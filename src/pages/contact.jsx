import React from 'react'
import NavBar from '../components/NavBar'
import FormContact from '../components/FormContact'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
        <NavBar/>
        <div style={{padding:'60px', display:'flex', justifyContent:'center'}}>
          <div>
            <FormContact/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
