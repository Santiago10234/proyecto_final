import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactoHome() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center">
      <div className=" mb-3 border-top border-bottom" style={{ width: '100%', padding:'20px', marginLeft:'60px', marginRight:'60px', marginTop:'50px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              style={{ minWidth: '240px', borderRadius:'15px'}} 
              src="../src/assets/preview.webp" 
              className="img-fluid " 
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{padding:'40px'}}>
              <h2 className="card-title">Have More Questions? Don't <br /> Hesitate To Reach Us</h2>
              <div style={{marginTop:'70px'}}>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Email</td>
                      <td><a className="nav-link" href="https://www.google.com/intl/es/gmail/about/">contact@luxurycars.com</a></td>
                      <td><i className="bi bi-envelope-fill fs-5"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>WhatsApp</td>
                      <td><a className="nav-link" href="https://web.whatsapp.com/">+506 8234 5678</a></td>
                      <td><i className="bi bi-whatsapp fs-5"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td >Form contact</td>
                      <td><a onClick={() => { navigate("/contact") }} className="nav-link" href="#">Contact</a></td>
                      <td><i className="bi bi-chat-dots-fill fs-5"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoHome;

