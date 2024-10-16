import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { traerCookie } from '../cookiesjs/cookies';
function ContenedorCard() {
  const [cars, setCars] = useState([]);
  
  const token = traerCookie('token')
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cars/');
        setCars(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="ContainerCard">
      {cars.map(car => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
}

export default ContenedorCard;

