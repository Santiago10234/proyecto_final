import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactoHome from '../components/ContactoHome'
import Marcas from '../components/marcas'

function CarDetails({ car }) {
  return (
    <div>
        <NavBar/>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'90%'}} class="card mb-3">
                <img src={localStorage.getItem("img")} class="card-img-top" alt="..."/>
                <div class="card-body">
                <div  style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'80%'}}>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Year: </p>
                <p className="card-text">Mileage: </p>
                <p className="card-text">Transmission:</p>
                <p className="card-text">Phone number:</p>
            </div>
            <div>
                <form action="">
                    <h3>Solicite la prueba de manejo</h3>
                    <p>Full Name</p>
                    <input className='form-control' type="Name" />
                    <p>Fecha y hora deseada</p>
                    <input className='form-control' type="datetime-local" />
                </form>
            </div>
        </div>
        </div>
                </div>
            </div>
        </div>
        <Marcas/>
        <ContactoHome/>
        <Footer/>
      
    </div>
  )
}

export default CarDetails
