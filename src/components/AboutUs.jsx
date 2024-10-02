import React from 'react'

function AboutUs() {
  return (
    <div className='container-aboutUs'>
      <div>
        <div className="d-flex justify-content-center">
          <div className=" mb-3 border-bottom" style={{ width: '100%', padding:'20px', marginLeft:'60px', marginRight:'60px', marginTop:'50px'}}>
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
                          <h1 style={{marginBottom:'40px'}} className="card-title">Business Details</h1>
                          <p style={{marginBottom:'20px'}}> <strong>Business Name:</strong> LUXURY CARS</p>
                          <p style={{marginBottom:'20px'}}> <strong>Location:</strong> San José, Santa Ana, Costa Rica</p>
                          <p style={{marginBottom:'20px'}}> <strong>Email:</strong> contacto@luxurycars.com</p>
                          <p style={{marginBottom:'20px'}}> <strong>Phone:</strong> +506 1234 5678</p>
                          <p style={{marginBottom:'20px'}}> <strong>Business Type:</strong> Online car marketplace</p>
                          <p style={{marginBottom:'20px'}}> <strong>Description:</strong>  LUXURY CARS is a digital platform dedicated to facilitating the buying and selling of cars. Our users can create an account, post their cars for sale, or browse a wide selection of high-end vehicles, from luxury sedans to supercars. We focus on offering a simple, fast, and secure experience.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <div className="container mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className="btn btn-black border border-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMission" aria-expanded="false" aria-controls="collapseMission">
                          Mission
                        </button>
                        <div className="collapse" id="collapseMission">
                          <div className="card card-body mt-2">
                            To simplify the process of buying and selling luxury cars by providing a secure, intuitive, and accessible platform that connects buyers and sellers across Costa Rica.
                          </div>
                        </div>
                      </div>
                      <div className="container mt-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className="btn btn-black border border-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVision" aria-expanded="false" aria-controls="collapseVision">
                          Vision
                        </button>
                        <div className="collapse" id="collapseVision">
                          <div className="card card-body mt-2">
                            To become the leading reference portal for buying and selling cars in Costa Rica, known for exceptional service, cutting-edge technology, and a focus on customer satisfaction.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-3" style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
                      <div className="col-md-4">
                        <h4>Business Hours:</h4>
                        <ul>
                          <li style={{ marginBottom: '20px' }}> <strong>Monday to Friday:</strong> 8:00 AM - 6:00 PM</li>
                          <li style={{ marginBottom: '20px' }}> <strong>Saturday:</strong> 9:00 AM - 2:00 PM</li>
                          <li> <strong>Sundays and Holidays:</strong> Closed</li>
                        </ul>
                        <h4>Location:</h4>
                        <p>We are located in Santa Ana, San José, Costa Rica, an easily accessible area for those who wish to get in-person assistance or make inquiries.</p>
                      </div>
                      <div className="col-md-8">
                        <iframe style={{ width: '500px', height: '350px', borderRadius: '10px', marginLeft: '20px', boxShadow: '0px 0px 5px 0px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d450.0486228409496!2d-84.18891758914882!3d9.936502390822797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1727883990750!5m2!1ses-419!2scr" loading="lazy"></iframe>
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


