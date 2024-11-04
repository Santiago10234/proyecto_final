import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ContactoHome from '../components/ContactoHome'
import Marcas from '../components/marcas'
import '../styles/carsDetails.css'
import { traerCookie } from '../cookiesjs/cookies';

function CarDetails({ car }) {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [desiredDate, setDesiredDate] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = traerCookie("id") 
        const carId = localStorage.getItem("id")
        const idUserInt = parseInt(userId)
        const idCarInt = parseInt(carId)
        const testDriveData = {
            userDrive: idUserInt,
            car: idCarInt,
            date: desiredDate,
        };
        console.log('Test Drive Data:', testDriveData);
        console.log('User ID:', userId);
        console.log('Car ID:', carId);
        console.log('Desired Date:', desiredDate);

        try {
            const response = await axios.post('http://localhost:8000/api/cars/testDrive', testDriveData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(`RESPUESTA ${response}`);
            

            if (response.status === 201) {
                // Maneja la respuesta de éxito (ej. mostrar un mensaje al usuario)
                alert('Test drive request submitted successfully!');
            }
            console.log(response);
        } catch (error) {
            console.error('Error submitting request:', error);
            console.error('Response data:', error.response.data)
            alert('Failed to submit the request. Please try again.');
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-section mt-4 p-3 border rounded bg-light">
                <h3>Comments</h3>
                <ul className="list-unstyled">

                </ul>
                <form>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment"
                            required
                            rows="4"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
                </div>
            </div>
            <Marcas />
            <ContactoHome />
            <Footer />
        </div>
    )
}

export default CarDetails

