import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import '../styles/card.css';
import Footer from '../components/Footer';
import ContactoHome from '../components/ContactoHome';
import Marcas from '../components/marcas';

// Define el componente SearchResults, que se encarga de mostrar los resultados de búsqueda de autos por marca
function SearchResults() {
    // Extrae el parámetro de marca desde la URL
    const { brand } = useParams(); 
    // Define el estado para almacenar los autos que coinciden con la búsqueda
    const [cars, setCars] = useState([]);

    // useEffect para desplazar la página al inicio cuando el componente se monta
    useEffect(() => {
        window.scrollTo(0, 0); // Coloca la posición del scroll en la parte superior de la página
    }, []);
    
    // useEffect que se ejecuta cuando el valor de "brand" cambia
    useEffect(() => {
        // Realiza una solicitud GET al backend para obtener los autos que coincidan con la marca proporcionada en la URL
        axios.get(`http://localhost:8000/api/cars/search/${brand}/`)
            .then(response => {
                setCars(response.data); // Almacena los autos obtenidos en el estado
            })
            .catch(error => {
                // Muestra en la consola un mensaje de error si falla la solicitud
                console.error("Hubo un error al obtener los autos:", error);
            });
    }, [brand]); // Este efecto depende de "brand", y se ejecutará cada vez que este cambie

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
