import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import '../styles/card.css';
import Footer from '../components/Footer';
import ContactoHome from '../components/ContactoHome';
import Marcas from '../components/marcas';

function SearchResults() {
    const { brand } = useParams(); // Obtenemos la marca desde la URL
    const [cars, setCars] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        // Hacemos la petición al backend para obtener los autos que coincidan con la marca
        axios.get(`http://localhost:8000/api/cars/search/${brand}/`)
            .then(response => {
                setCars(response.data); // Guardamos los autos en el estado
            })
            .catch(error => {
                console.error("Hubo un error al obtener los autos:", error);
            });
    }, [brand]);

    return (
        <div>
            <NavBar/>
            <h2 style={{marginTop:'40px', marginLeft:'60px'}}>Results for: {brand.toUpperCase()}</h2>
            <div className="car-results ContainerCard">
                {cars.length > 0 ? (
                    cars.map(car => (
                        <div key={car.id} className="card" style={{ width: '18rem', marginBottom:'20px', marginTop:'20px' }}>
                            <img src={car.car_image} className="card-img-top imgcard" alt={`${car.brand} ${car.model}`} />
                            <div className="card-body">
                                <h5 className="card-title">{car.brand} {car.model}</h5>
                                <p className="card-text">Year: <strong>{car.year}</strong></p>
                                <p className="card-text">Mileage: <strong>{car.mileage} km</strong></p>
                                <p className="card-text">Transmission: <strong>{car.transmission}</strong></p>
                                <p className="card-text">Phone number: <strong>{car.num_tel}</strong></p>
                                <p className="card-text">Price: <strong>$ {car.price}</strong></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron resultados para esta marca.</p>
                )}
            </div>
            <Marcas/>
            <ContactoHome/>
            <Footer/>
        </div>
    );
}

export default SearchResults;
