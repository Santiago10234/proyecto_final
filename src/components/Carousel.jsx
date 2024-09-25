import React from 'react'
import '../styles/carousel.css'

function Carousel() {
  return (
    <>
        <div id="carouselExample" className="carousel slide imghome1">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="src\assets\Audi_Home1-transformed.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="src\assets\Land_Rover_home1-u0eYxmU8T-transformed.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="src\assets\BMWHome.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carousel
