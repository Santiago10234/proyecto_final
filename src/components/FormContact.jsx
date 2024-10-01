import React from 'react'
import "../styles/contact.css"
function FormContact() {
  return (
    <div className='container-contact card'>
        <div className='head'>
            <h3>Contact Us Now</h3>
            <p>Say something to start a live chat</p>  
        </div>
        <form>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" required />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" required />
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Type your message here" required></textarea>
          </div>
          
          <button type="submit" className="btn btn-dark btn-contact w-100">Submit</button>
        </fieldset>
      </form>
        <div className='contact'>
            <i class="bi bi-whatsapp fs-3"></i>
            <i class="bi bi-envelope-fill fs-3"></i>   
            <i class="bi bi-instagram fs-3"></i>
            <i class="bi bi-facebook fs-3"></i>
        </div>
    </div>
  )
}

export default FormContact
