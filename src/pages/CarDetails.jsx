// Importación de módulos y componentes necesarios
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactoHome from '../components/ContactoHome';
import Marcas from '../components/marcas';
import '../styles/carsDetails.css';
import { traerCookie } from '../cookiesjs/cookies';

// Componente principal para mostrar los detalles de un automóvil y gestionar las solicitudes de prueba de manejo
function CarDetails({ car }) {
    // Declaración de estados para gestionar los datos del formulario de prueba de manejo y los mensajes de respuesta
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [desiredDate, setDesiredDate] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Hook de efecto para desplazar la vista al inicio al cargar el componente
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Función para manejar el envío del formulario de prueba de manejo
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Obtener ID del usuario desde cookies y ID del auto desde localStorage
        const userId = traerCookie("id");
        const carId = localStorage.getItem("id");

        // Convertir los ID en enteros y preparar los datos para la solicitud de prueba de manejo
        const idUserInt = parseInt(userId);
        const idCarInt = parseInt(carId);
        const testDriveData = {
            userDrive: idUserInt,
            car: idCarInt,
            date: desiredDate,
        };

        try {
            // Realizar la solicitud POST al backend para guardar la solicitud de prueba de manejo
            const response = await axios.post('http://localhost:8000/api/cars/testDrive', testDriveData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Verificar si la solicitud fue exitosa y mostrar mensaje de confirmación
            if (response.status === 201) {
                setMessage('Test drive request submitted successfully!');
                setMessageType('success');
                setTimeout(() => setMessage(''), 2000); // Ocultar mensaje después de 2 segundos
            }
        } catch (error) {
            // En caso de error, mostrar un mensaje de error
            console.error('Error submitting request:', error);
            setMessage('Failed to submit the request. Please try again.');
            setMessageType('danger');
            setTimeout(() => setMessage(''), 2000); // Ocultar mensaje después de 2 segundos
        }
    };

    return (
        <div>
            <NavBar />
            {/* Sección de detalles del automóvil */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '90%' }} className="card mb-3">
                    {/* Imagen del auto */}
                    <img style={{ height: '500px', objectFit: 'cover' }} src={localStorage.getItem("img")} className="card-img-top" alt="Car image" />
                    <div className="card-body">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                                <div className="card-body">
                                    {/* Información detallada del auto */}
                                    <h3 className="card-title">Details</h3>
                                    <p className="card-text">Year: <strong>{localStorage.getItem("year")}</strong></p>
                                    <p className="card-text">Brand: <strong>{localStorage.getItem("brand")} {localStorage.getItem("model")}</strong></p>
                                    <p className="card-text">Mileage: <strong>{localStorage.getItem("mileage")}</strong></p>
                                    <p className="card-text">Transmission: <strong>{localStorage.getItem("transmission")}</strong></p>
                                    <p className="card-text">Phone number: <strong>{localStorage.getItem("num_tel")}</strong></p>
                                    <p className="card-text">Price: <strong>${localStorage.getItem("price")}</strong></p>
                                </div>

                                {/* Formulario para solicitar prueba de manejo */}
                                <div>
                                    <form className='containerForm1' onSubmit={handleSubmit}>
                                        <h3>Request test drive</h3>
                                        {/* Campo de email */}
                                        <p>Your Email</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="email"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {/* Campo de nombre completo */}
                                        <p>Full Name</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="text"
                                            placeholder='Name'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                        {/* Campo de fecha y hora deseada */}
                                        <p>Desired date and time</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="datetime-local"
                                            value={desiredDate}
                                            onChange={(e) => setDesiredDate(e.target.value)}
                                        />
                                        {/* Botón para enviar solicitud de prueba de manejo */}
                                        <button className='btn btn-dark btnPost' style={{ width: '100%', marginTop: '10px' }} type="submit">Request</button>
                                    </form>

                                    {/* Mensaje de éxito o error en la solicitud */}
                                    {message && (
                                        <div className={`alert alert-${messageType} mt-3`} role="alert">
                                            {message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marcas />
            <ContactoHome />
            <Footer />
        </div>
    );
}

export default CarDetails;
