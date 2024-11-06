// Card.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/card.css';
import { traerCookie } from '../cookiesjs/cookies';
import { handleDelete, handleUpdate } from './carActions';
/**
 * Componente para mostrar los detalles de un auto en formato de tarjeta.
 * Permite a un administrador editar o eliminar el auto, con modales de confirmación y edición.
 *
 * car - Información del auto (marca, modelo, año, etc.).
 * carSpecs - Función para ver más detalles del auto.
 * setCars - Función para actualizar el estado de la lista de autos.
 */
function Card({ car, carSpecs, setCars }) {
  const [showModal, setShowModal] = useState(false); // Estado para el modal de edición
  const [showConfirmDelete, setShowConfirmDelete] = useState(false); // Estado para el modal de confirmación de eliminación
  const [formData, setFormData] = useState(car); // Estado para almacenar los datos de edición del auto
  const [alertMessage, setAlertMessage] = useState(''); // Mensaje de alerta para notificaciones
  const [showAlertModal, setShowAlertModal] = useState(false); // Estado para el modal de alertas
  const admin = traerCookie("isSuperuser"); // Verificar si el usuario es administrador
  const token = traerCookie('token'); // Obtener token de autenticación del usuario
  // Actualizar los datos del formulario cuando el auto cambie
  useEffect(() => {
    setFormData(car);
  }, [car]);
  // Maneja los cambios en los campos del formulario de edición.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCloseModal = () => setShowModal(false); ; // Cierra el modal de edición
  const handleCloseConfirmDelete = () => setShowConfirmDelete(false);  // Cierra el modal de confirmación de eliminación
  // Llama a la función handleDelete para eliminar el auto y cierra el modal de confirmación.
  const deleteCar = () => {
    handleDelete(car.id, token, setCars, setAlertMessage, setShowAlertModal);
    handleCloseConfirmDelete(); // Cerrar modal de confirmación después de eliminar
  };
  // Llama a la función handleUpdate para actualizar el auto y cierra el modal de edición.
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
        <button onClick={carSpecs} style={{width:'105px'}} className="view-more-btn">see more</button>
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
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to remove this car?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmDelete}>
          Cancel
          </Button>
          <Button variant="danger" onClick={deleteCar}>
          Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para editar */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Auto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBrand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={formData.brand || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={formData.year || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMileage">
              <Form.Label>Mileage</Form.Label>
              <Form.Control
                type="number"
                name="mileage"
                value={formData.mileage || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price || ''}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTransmission">
              <Form.Label>Transmission</Form.Label>
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
              <Form.Label>Phone Number</Form.Label>
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
          Close
          </Button>
          <Button variant="primary" onClick={updateCar}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para alertas */}
      <Modal show={showAlertModal} onHide={() => setShowAlertModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlertModal(false)}>
          Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
