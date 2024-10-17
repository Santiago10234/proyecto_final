import { useState } from 'react'
import Login from './pages/login' 
import Register from './pages/register'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import ContenedorCard from './components/ContenedorCard'
import Pagination from './components/Pagination'
import Marcas from './components/marcas'
import Footer from './components/Footer'
import ContactoHome from './components/ContactoHome'

function App() {

  return (
    <div>
      <NavBar/>
      <Carousel/>
      <div style={{marginLeft: '60px', marginRight: '60px'}}>
        <h1 className="border-bottom" style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>Cars For Sale</h1>
      </div>
      <ContenedorCard/>
      <Pagination/>
      <Marcas/>
      <ContactoHome/>
      <Footer/>
    </div>
  )
}

export default App
