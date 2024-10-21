import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactoHome from '../components/ContactoHome'
import Marcas from '../components/marcas'

function CarDetails({ car }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <NavBar/>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'90%'}} className="card mb-3">
                <img style={{height:'500px', objectFit:'cover'}} src={localStorage.getItem("img")} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div  style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'80%'}}>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Year: {localStorage.getItem("year")} </p>
                <p className="card-text">Model: {localStorage.getItem("model")} </p>
                <p className="card-text">Mileage: {localStorage.getItem("mileage")} </p>
                <p className="card-text">Transmission: {localStorage.getItem("transmission")} </p>
                <p className="card-text">Phone number: {localStorage.getItem("num_tel")} </p>
                <p className="card-text">Price: ${localStorage.getItem("price")} </p>
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
