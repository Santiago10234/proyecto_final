import React from 'react';
import '../styles/card.css';

function Card({ car }) {
  return (
    <div className="card" style={{ width: '18rem', marginBottom:'20px', marginTop:'20px' }}>
      <img src={`http://localhost:8000${car.car_image}`} className="card-img-top" alt={`${car.brand} ${car.model}`} />
      <div className="card-body">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text">Year: <strong>{car.year}</strong></p>
        <p className="card-text">Mileage: <strong>{car.mileage} km</strong></p>
        <p className="card-text">Transmission: <strong>{car.transmission}</strong></p>
      </div>
    </div>
  );
}

export default Card;


