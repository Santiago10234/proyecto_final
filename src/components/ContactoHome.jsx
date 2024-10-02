import React from 'react';

function ContactoHome() {
  return (
    <div className="d-flex justify-content-center">
      <div className=" mb-3 border-top border-bottom" style={{ width: '100%', padding:'20px', marginLeft:'60px', marginRight:'60px', marginTop:'50px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              style={{ minWidth: '240px', borderRadius:'15px'}} 
              src="src/assets/ImagenContactos.webp" 
              className="img-fluid " 
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{padding:'40px'}}>
              <h2 className="card-title">Have More Questions? Don't <br /> Hesitate To Reach Us</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoHome;

