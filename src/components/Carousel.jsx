import React from 'react'
import '../styles/carousel.css'

function Carousel() {
  return (
    <>
        <div id="carouselExample" class="carousel slide imghome1">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="src\assets\Audi_Home1-transformed.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="src\assets\Land_Rover_home1-u0eYxmU8T-transformed.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="src\assets\BMWHome.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carousel
