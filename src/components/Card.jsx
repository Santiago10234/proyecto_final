import React from 'react';
import { useNavigate } from 'react-router-dom';  // Reemplaza useHistory con useNavigate
import '../styles/card.css';

function Card({ car,carSpecs }) {
  const navigate = useNavigate();  // Cambia useHistory por useNavigate
  
  function viewDetails() {
    navigate("/carDetails")
  }

  return (
    <div className="card" style={{ width: '18rem', marginBottom:'20px', marginTop:'20px', position: 'relative' }}>
      <img src={car.car_image} className="card-img-top imgcard" alt={`${car.brand} ${car.model}`} />
      <div className="card-body">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text">Year: <strong>{car.year}</strong></p>
        <p className="card-text">Mileage: <strong>{car.mileage} km</strong></p>
        <p className="card-text">Transmission: <strong>{car.transmission}</strong></p>
        <p className="card-text">Phone number: <strong>{car.num_tel}</strong></p>
        <p className="card-text">Price: <strong>${car.price}</strong></p>
        <button onClick={carSpecs} className="view-more-btn">Ver más</button>
      </div>
    </div>
  );
}

export default Card;


