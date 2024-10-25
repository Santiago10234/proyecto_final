import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/card.css';
import { traerCookie } from '../cookiesjs/cookies';

function Card({ car, carSpecs, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(car);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const admin = traerCookie("isSuperuser")
  const token = traerCookie('token')
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/cars/${car.id}/`, formData,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setAlertMessage('Auto actualizado exitosamente.');
        setShowAlertModal(true);
        setShowModal(false); // Cerrar el modal de edición
      })
      .catch(err => {
        console.error('Error al actualizar:', err);
        setAlertMessage('Ocurrió un error al intentar actualizar el auto.');
        setShowAlertModal(true);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/cars/${car.id}/`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        onDelete(car.id);
        setAlertMessage('Auto eliminado exitosamente.');
        setShowAlertModal(true);
      })
      .catch(err => {
        console.error('Error al eliminar:', err);
        setAlertMessage('Ocurrió un error al intentar eliminar el auto.');
        setShowAlertModal(true);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card" style={{ width: '18rem', marginBottom: '20px', marginTop: '20px', position: 'relative' }}>
      <img src={car.car_image} className="card-img-top imgcard" alt={`${car.brand} ${car.model}`} />
      <div className="card-body">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text">Year: <strong>{car.year}</strong></p>
        <p className="card-text">Mileage: <strong>{car.mileage} km</strong></p>
        <p className="card-text">Transmission: <strong>{car.transmission}</strong></p>
        <p className="card-text">Phone number: <strong>{car.num_tel}</strong></p>
        <p className="card-text">Price: <strong>${car.price}</strong></p>
        <button onClick={carSpecs} className="view-more-btn">Ver más</button>
        {admin && (
          <div style={{ marginTop: '10px' }}>
            <Button onClick={handleDelete} className="btn btn-danger">Delete</Button>
            <Button style={{marginLeft:'5px'}} onClick={() => setShowModal(true)} className="btn btn-success">Edit</Button>
          </div>
        )}
      </div>

      {/* Modal para editar */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Auto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBrand">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formModel">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formMileage">
              <Form.Label>Kilometraje</Form.Label>
              <Form.Control
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTransmission">
              <Form.Label>Transmisión</Form.Label>
              <Form.Control
                as="select"
                name="transmission"
                value={formData.transmission}
                onChange={handleInputChange}
              >
                <option value="manual">Manual</option>
                <option value="automatic">Automática</option>
                <option value="semi-automatic">Semi-Automática</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formNumTel">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="num_tel"
                value={formData.num_tel}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para alertas */}
      <Modal show={showAlertModal} onHide={() => setShowAlertModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlertModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
