// Card.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/card.css';
import { traerCookie } from '../cookiesjs/cookies';
import { handleDelete, handleUpdate } from './carActions';

function Card({ car, carSpecs, setCars }) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // Nuevo estado para el modal de confirmación
  const [formData, setFormData] = useState(car);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const admin = traerCookie("isSuperuser");
  const token = traerCookie('token');

  useEffect(() => {
    setFormData(car);
  }, [car]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseConfirmDelete = () => setShowConfirmDelete(false); // Cerrar modal de confirmación

  const deleteCar = () => {
    handleDelete(car.id, token, setCars, setAlertMessage, setShowAlertModal);
    handleCloseConfirmDelete(); // Cerrar modal de confirmación después de eliminar
  };

  const updateCar = () => {
    handleUpdate(car.id, formData, token, setCars, setAlertMessage, setShowAlertModal, handleCloseModal);
  };

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
            <Button onClick={() => setShowConfirmDelete(true)} className="btn btn-danger">Delete</Button>
            <Button style={{ marginLeft: '5px' }} onClick={() => setShowModal(true)} className="btn btn-success">Edit</Button>
          </div>
        )}
      </div>

      {/* Modal para confirmar eliminación */}
      <Modal show={showConfirmDelete} onHide={handleCloseConfirmDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este auto?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmDelete}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={deleteCar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

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
                value={formData.brand || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formModel">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formYear">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={formData.year || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMileage">
              <Form.Label>Kilometraje</Form.Label>
              <Form.Control
                type="number"
                name="mileage"
                value={formData.mileage || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTransmission">
              <Form.Label>Transmisión</Form.Label>
              <Form.Control
                as="select"
                name="transmission"
                value={formData.transmission || ''}
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
                value={formData.num_tel || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={updateCar}>
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
