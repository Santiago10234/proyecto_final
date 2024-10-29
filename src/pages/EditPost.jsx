import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/card.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { traerCookie } from '../cookiesjs/cookies';

function EditPost() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);  // Nuevo estado para el modal de confirmación
  const [carIdToDelete, setCarIdToDelete] = useState(null); // ID del auto a eliminar
  const token = traerCookie('token');

  useEffect(() => {
    const userId = localStorage.getItem('id');
    if (userId) {
      axios.get(`http://localhost:8000/user/cars/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setCars(response.data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error:', err);
          setError('Ocurrió un error al cargar las publicaciones.');
          setLoading(false);
        });
    } else {
      setError('No se encontró el ID del usuario.');
      setLoading(false);
    }
  }, [token]);

  const handleDeleteRequest = (carId) => {
    setCarIdToDelete(carId);  // Guardar el ID del auto a eliminar
    setShowConfirmModal(true); // Mostrar el modal de confirmación
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/cars/${carIdToDelete}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setCars(cars.filter(car => car.id !== carIdToDelete));
        setAlertMessage('Auto eliminado exitosamente.');
        setShowAlertModal(true);
        setShowConfirmModal(false); // Cerrar el modal de confirmación
      })
      .catch(err => {
        console.error('Error al eliminar:', err);
        setAlertMessage('Ocurrió un error al intentar eliminar el auto.');
        setShowAlertModal(true);
        setShowConfirmModal(false); // Cerrar el modal de confirmación
      });
  };

  const handleEdit = (car) => {
    setSelectedCar(car);
    setFormData(car);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/cars/${selectedCar.id}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const updatedCars = cars.map(car =>
          car.id === selectedCar.id ? response.data : car
        );
        setCars(updatedCars);
        setAlertMessage('Auto actualizado exitosamente.');
        setShowAlertModal(true);
        handleCloseModal();
      })
      .catch(err => {
        console.error('Error al actualizar:', err);
        setAlertMessage('Ocurrió un error al intentar actualizar el auto.');
        setShowAlertModal(true);
      });
  };

  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="row ContainerCard">
        {cars.length > 0 ? (
          cars.map(car => (
            <div className="col-md-4" key={car.id}>
              <div className="card" style={{ width: '18rem', marginBottom: '20px', marginTop: '30px', marginLeft: '-12px' }}>
                <img src={car.car_image} className="card-img-top imgcard" alt={`${car.brand} ${car.model}`} />
                <div className="card-body">
                  <h5 className="card-title">{car.brand} {car.model}</h5>
                  <p className="card-text">Year: <strong>{car.year}</strong></p>
                  <p className="card-text">Mileage: <strong>{car.mileage} km</strong></p>
                  <p className="card-text">Transmission: <strong>{car.transmission}</strong></p>
                  <p className="card-text">Phone number: <strong>{car.num_tel}</strong></p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">Price: <strong>$ {car.price}</strong></p>
                    <div>
                      <button
                        style={{ padding: '5px' }}
                        className='btn btn-danger'
                        onClick={() => handleDeleteRequest(car.id)} // Llama a la función para mostrar el modal de confirmación
                      >
                        Eliminar
                      </button>
                      <button
                        style={{ padding: '5px', marginLeft: '5px' }}
                        className='btn btn-success'
                        onClick={() => handleEdit(car)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No tienes publicaciones aún.</p>
        )}
      </div>

      <Footer />

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
          <Button variant="primary" onClick={handleUpdate}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para confirmación de eliminación */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este auto?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
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

export default EditPost;
