import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css";

function FormContact() {
  const [error, setError] = useState(""); // Estado para mensajes de error
  const [success, setSuccess] = useState(""); // Estado para mensajes de éxito
  // Estado para guardar los datos ingresados en el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // Función para manejar cambios en los inputs del formulario y actualizar el estado formData
  const handleChange = (e) => {
    // Extrae el nombre y el valor del campo que activó el evento
    const { name, value } = e.target;
    // Actualiza el estado formData con el nuevo valor del campo correspondiente
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Función que se activa al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Resetea mensajes de error y éxito antes de procesar el envío
    setError("");
    setSuccess("");
    // Validación: Si algún campo está vacío, muestra un mensaje de error
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    // Configuración de los parámetros necesarios para enviar el correo a través de EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    // Llamada a EmailJS para enviar el correo
    emailjs.send('service_m9nq4ya', 'template_r3l8kk9', templateParams, 'nyzyvYkC35zpBA7Jq')
      .then((response) => {
        // Si el envío es exitoso, muestra un mensaje de éxito y resetea los campos del formulario
        setSuccess('Correo enviado exitosamente!');
        setError(""); // Limpia el mensaje de error
        // Resetea los campos del formulario
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        // Si ocurre un error, muestra un mensaje de error
        setError('Hubo un error al enviar el correo. Intenta de nuevo.');
        setSuccess("");// Limpia el mensaje de éxito
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
