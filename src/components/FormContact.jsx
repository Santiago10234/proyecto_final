import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css";

function FormContact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_m9nq4ya', 'template_r3l8kk9', templateParams, 'nyzyvYkC35zpBA7Jq')
      .then((response) => {
        setSuccess('Correo enviado exitosamente!');
        setError("");

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        setError('Hubo un error al enviar el correo. Intenta de nuevo.');
        setSuccess("");
      });
  };

  return (
    <div className='container-contact card'>
      <div className='head'>
        <h3>Contact Us Now</h3>
        <p>Say something to start a live chat</p>
        {error && <p className="alert alert-danger">{error}</p>}
        {success && <p className="alert alert-success">{success}</p>}
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-dark btn-contact w-100">Submit</button>
        </fieldset>
      </form>

      <div className='contact'>
        <a style={{color:'black'}} href="https://web.whatsapp.com/"><i className="bi bi-whatsapp fs-3"></i></a>
        <a style={{color:'black'}} href="https://www.google.com/intl/es/gmail/about/"><i className="bi bi-envelope-fill fs-3"></i></a>
        <a style={{color:'black'}} href="https://www.instagram.com/"><i className="bi bi-instagram fs-3"></i></a>
        <a style={{color:'black'}} href="https://www.facebook.com/?locale=es_LA"><i className="bi bi-facebook fs-3"></i></a>
      </div>
    </div>
  );
}

export default FormContact;
