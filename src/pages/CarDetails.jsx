import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactoHome from '../components/ContactoHome';
import Marcas from '../components/marcas';
import '../styles/carsDetails.css';
import { traerCookie } from '../cookiesjs/cookies';

function CarDetails({ car }) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [desiredDate, setDesiredDate] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = traerCookie("id");
        const carId = localStorage.getItem("id");
        const idUserInt = parseInt(userId);
        const idCarInt = parseInt(carId);
        const testDriveData = {
            userDrive: idUserInt,
            car: idCarInt,
            date: desiredDate,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/cars/testDrive', testDriveData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                setMessage('Test drive request submitted successfully!');
                setMessageType('success'); // Tipo de mensaje para la alerta
                setTimeout(() => setMessage(''), 2000); // Oculta el mensaje después de 2 segundos
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            setMessage('Failed to submit the request. Please try again.');
            setMessageType('danger'); // Tipo de mensaje para error
            setTimeout(() => setMessage(''), 2000); // Oculta el mensaje después de 2 segundos
        }
    };

    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '90%' }} className="card mb-3">
                    <img style={{ height: '500px', objectFit: 'cover' }} src={localStorage.getItem("img")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                                <div className="card-body">
                                    <h3 className="card-title">Details</h3>
                                    <p className="card-text">Year: <strong>{localStorage.getItem("year")}</strong></p>
                                    <p className="card-text">Brand: <strong>{localStorage.getItem("brand")} {localStorage.getItem("model")}</strong></p>
                                    <p className="card-text">Mileage: <strong>{localStorage.getItem("mileage")}</strong></p>
                                    <p className="card-text">Transmission: <strong>{localStorage.getItem("transmission")}</strong></p>
                                    <p className="card-text">Phone number: <strong>{localStorage.getItem("num_tel")}</strong></p>
                                    <p className="card-text">Price: <strong>${localStorage.getItem("price")}</strong></p>
                                </div>
                                <div>
                                    <form className='containerForm1' onSubmit={handleSubmit}>
                                        <h3>Request test drive</h3>
                                        <p>Your Email</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="email"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <p>Full Name</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="text"
                                            placeholder='Name'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                        <p>Desired date and time</p>
                                        <input
                                            className='form-control'
                                            style={{ marginTop: '-10px' }}
                                            type="datetime-local"
                                            value={desiredDate}
                                            onChange={(e) => setDesiredDate(e.target.value)}
                                        />
                                        <button className='btn btn-dark btnPost' style={{ width: '100%', marginTop: '10px' }} type="submit">Request</button>
                                    </form>
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
    )
}

export default CarDetails;
