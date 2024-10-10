import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/card.css';
import { Modal, Button, Form } from 'react-bootstrap';  // Importar componentes de Bootstrap para el modal

function EditPost() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);  // Guardar los datos del auto seleccionado para editar
  const [formData, setFormData] = useState({});  // Estado para manejar los datos del formulario
  const [alertMessage, setAlertMessage] = useState('');  // Estado para el mensaje de alerta
  const [showAlertModal, setShowAlertModal] = useState(false);  // Estado para mostrar/ocultar el modal de alerta

  useEffect(() => {
    const userId = localStorage.getItem('id');  // Obtener el id del usuario del localStorage

    if (userId) {
      axios.get(`http://localhost:8000/user/cars/${userId}`)
        .then(response => {
          setCars(response.data); // Actualizar el estado con los datos recibidos
          setLoading(false);      // Desactivar el estado de carga
        })
        .catch(err => {
          console.error('Error:', err);
          setError('Ocurrió un error al cargar las publicaciones.');
          setLoading(false);      // Desactivar el estado de carga en caso de error
        });
    } else {
      setError('No se encontró el ID del usuario.');
      setLoading(false);  // Desactivar el estado de carga si no hay user_id
    }
  }, []);

  const handleDelete = (carId) => {
    axios.delete(`http://localhost:8000/api/cars/${carId}/`)
      .then(response => {
        setCars(cars.filter(car => car.id !== carId));  // Eliminar el auto del estado después de una eliminación exitosa
        setAlertMessage('Auto eliminado exitosamente.');
        setShowAlertModal(true);  // Mostrar el modal con la alerta
      })
      .catch(err => {
        console.error('Error al eliminar:', err);
        setAlertMessage('Ocurrió un error al intentar eliminar el auto.');
        setShowAlertModal(true);  // Mostrar el modal con el mensaje de error
      });
  };

  const handleEdit = (car) => {
    setSelectedCar(car);  // Guardar el auto seleccionado
    setFormData(car);     // Inicializar el formulario con los datos del auto
    setShowModal(true);   // Mostrar el modal
  };

  const handleCloseModal = () => {
    setShowModal(false);  // Cerrar el modal
    setSelectedCar(null); // Limpiar el auto seleccionado
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/cars/${selectedCar.id}/`, formData)
      .then(response => {
        // Actualizar la lista de autos con los datos actualizados
        const updatedCars = cars.map(car =>
          car.id === selectedCar.id ? response.data : car
        );
        setCars(updatedCars);
        setAlertMessage('Auto actualizado exitosamente.');
        setShowAlertModal(true);  // Mostrar el modal con la alerta
        handleCloseModal();  // Cerrar el modal de edición
      })
      .catch(err => {
        console.error('Error al actualizar:', err);
        setAlertMessage('Ocurrió un error al intentar actualizar el auto.');
        setShowAlertModal(true);  // Mostrar el modal con el mensaje de error
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
                        onClick={() => handleDelete(car.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        style={{ padding: '5px', marginLeft: '5px' }}
                        className='btn btn-success'
                        onClick={() => handleEdit(car)}  // Abrir el modal para editar
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
