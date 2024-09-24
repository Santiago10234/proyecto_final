import React from 'react';
import '../styles/card.css'

function Card() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="src\assets\Range Rover Black Price.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Land Rover Velar</h5>
          <p className="card-text">2023</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body priceAndMore">
          <h5>$40,000</h5>
          <a href="#" className="card-link">View Details</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

