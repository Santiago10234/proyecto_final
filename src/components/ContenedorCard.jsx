import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function ContenedorCard() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  
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
        <Card 
          key={car.id} 
          car={car} 
          setCars={setCars} 
          carSpecs={() => {
            console.log('sada');
            localStorage.setItem("id", car.id);
            localStorage.setItem("img", car.car_image);
            localStorage.setItem("brand", car.brand);
            localStorage.setItem("model", car.model);
            localStorage.setItem("year", car.year);
            localStorage.setItem("mileage", car.mileage);
            localStorage.setItem("num_tel", car.num_tel);
            localStorage.setItem("price", car.price);
            localStorage.setItem("transmission", car.transmission);
            navigate("/carDetails");
          }} 
        />
      ))}
    </div>
  );
}

export default ContenedorCard;

