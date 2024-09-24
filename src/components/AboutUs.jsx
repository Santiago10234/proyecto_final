import React from 'react'

function AboutUs() {
  return (
    <div className='container-aboutUs'>
      <div>
        <div className="d-flex justify-content-center">
        <div className=" mb-3 border-top border-bottom" style={{ width: '100%', padding:'20px', marginLeft:'60px', marginRight:'60px', marginTop:'50px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                    style={{ minWidth: '240px', borderRadius:'15px'}} 
                    src="src\assets\4vZPQCsiQeyfXvr3Y5Wv--1--09w7j.jpg" 
                    className="img-fluid " 
                    alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body" style={{padding:'40px'}}>
                    <h1 style={{marginBottom:'40px'}} className="card-title">About LUXURY CARS</h1>
                    <p style={{marginBottom:'30px'}}>At LUXURY CARS, we are dedicated to facilitating the buying and selling of vehicles in a secure, fast, and transparent manner. We understand how challenging it can be to find the perfect car or sell yours at the best price, which is why we've created a platform that connects buyers and sellers directly, eliminating middlemen and simplifying the process.</p>
                    <p style={{marginBottom:'30px'}}>Our goal is to offer a seamless experience for both sides of the market. We provide advanced search tools and direct contact options so you can find exactly what you're looking for.</p>
                    <p style={{marginBottom:'30px'}}>Whether you're searching for your next vehicle or looking to sell yours, we're here to assist you every step of the way. Our mission is to make buying and selling cars an easy and satisfying experience.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
