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
                <h3 className="card-title">Details</h3>
                <p className="card-text">Year: <strong>{localStorage.getItem("year")}</strong> </p>
                <p className="card-text">Model: <strong>{localStorage.getItem("model")}</strong> </p>
                <p className="card-text">Mileage: <strong>{localStorage.getItem("mileage")}</strong> </p>
                <p className="card-text">Transmission: <strong>{localStorage.getItem("transmission")}</strong> </p>
                <p className="card-text">Phone number: <strong>{localStorage.getItem("num_tel")}</strong> </p>
                <p className="card-text">Price: <strong>${localStorage.getItem("price")}</strong> </p>
            </div>
            <div>
                <form action="">
                    <h3>Request test drive</h3>
                    <p>Your Email</p>
                    <input className='form-control' style={{marginTop:'-10px'}} type="Email" />
                    <p>Full Name</p>
                    <input className='form-control' style={{marginTop:'-10px'}} type="Name" />
                    <p>Desired date and time</p>
                    <input className='form-control' style={{marginTop:'-10px'}} type="datetime-local" />
                    <button className='btn btn-dark btnPost' style={{width:'100%', marginTop:'10px'}}>Request</button>
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
