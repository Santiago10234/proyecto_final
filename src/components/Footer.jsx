import React from 'react';

function Footer() {
  return (
    <footer style={{backgroundColor: '#333', color: '#fff', padding: '20px 60px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        
        <div style={{flex: '1', minWidth: '200px', marginBottom: '20px'}}>
          <h3>About Us</h3>
          <p>
            LUXURY CARS is Costa Rica's leading platform for buying and selling luxury cars.
            We offer exclusive and reliable service to help our clients find the car of their dreams.
          </p>
        </div>

        <div style={{flex: '1', minWidth: '200px', marginBottom: '20px', marginLeft:'100px'}}>
          <h3>Services</h3>
          <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
            <li><a href="/about" style={{color: '#fff'}}>About Us</a></li>
            <li><a href="/contact" style={{color: '#fff'}}>Contact Us</a></li>
            <li><a href="/addcar" style={{color: '#fff'}}>Add Car</a></li>
            <li><a href="/editpost" style={{color: '#fff'}}>My Publications</a></li>
          </ul>
        </div>

        <div style={{flex: '1', minWidth: '200px', marginBottom: '20px'}}>
          <h3>Contact Us</h3>
          <p>
            Santa Ana, San José, Costa Rica<br />
            Phone: +506 8234-5678<br />
            Email: contact@luxurycars.com
          </p>
        </div>

        <div style={{flex: '1', minWidth: '200px', marginBottom: '20px'}}>
          <h3>Follow Us</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>Twitter</a>
          </div>
        </div>
      </div>
      
      <div style={{textAlign: 'center', marginTop: '20px', borderTop: '1px solid #fff', paddingTop: '10px'}}>
        <p>&copy; 2024 LUXURY CARS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
