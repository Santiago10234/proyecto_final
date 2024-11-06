import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/card.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { traerCookie } from '../cookiesjs/cookies';


// Define el componente EditPost, que permite editar y eliminar publicaciones de autos
function EditPost() {
  // Define el estado para almacenar los autos
  const [cars, setCars] = useState([]);
  // Define el estado para indicar si los datos están cargando
  const [loading, setLoading] = useState(true);
  // Define el estado para manejar mensajes de error
  const [error, setError] = useState(null);
  // Estado para mostrar u ocultar el modal de edición
  const [showModal, setShowModal] = useState(false);
  // Estado para el auto seleccionado a editar
  const [selectedCar, setSelectedCar] = useState(null);
  // Estado para almacenar los datos del formulario de edición
  const [formData, setFormData] = useState({});
  // Estado para el mensaje de alerta
  const [alertMessage, setAlertMessage] = useState('');
  // Estado para controlar la visibilidad del modal de alerta
  const [showAlertModal, setShowAlertModal] = useState(false);
  // Estado para controlar la visibilidad del modal de confirmación de eliminación
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // Estado para almacenar el ID del auto que se quiere eliminar
  const [carIdToDelete, setCarIdToDelete] = useState(null);
  // Obtiene el token de autenticación de las cookies
  const token = traerCookie('token');

  // Hook useEffect para obtener los autos del usuario al cargar el componente
  useEffect(() => {
    const userId = localStorage.getItem('id'); // Obtiene el ID del usuario del localStorage
    if (userId) { // Si el ID del usuario existe, realiza la solicitud
      axios.get(`http://localhost:8000/user/cars/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}` // Incluye el token de autenticación en la solicitud
        }
      })
      .then(response => {
        setCars(response.data); // Almacena los autos obtenidos en el estado
        setLoading(false); // Cambia el estado de carga a false
      })
      .catch(err => {
        console.error('Error:', err); // Muestra el error en la consola
        setError('Ocurrió un error al cargar las publicaciones.'); // Define el mensaje de error
        setLoading(false); // Cambia el estado de carga a false
      });
    } else {
      setError('No se encontró el ID del usuario.'); // Define el mensaje de error si no hay ID de usuario
      setLoading(false); // Cambia el estado de carga a false
    }
  }, [token]); // Ejecuta el efecto solo cuando cambia el token

  // Función para iniciar el proceso de eliminación de un auto
  const handleDeleteRequest = (carId) => {
    setCarIdToDelete(carId); // Guarda el ID del auto a eliminar
    setShowConfirmModal(true); // Muestra el modal de confirmación
  };

  // Función para eliminar un auto después de la confirmación
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/cars/${carIdToDelete}/`, {
      headers: {
        Authorization: `Bearer ${token}` // Incluye el token de autenticación
      }
    })
    .then(response => {
      setCars(cars.filter(car => car.id !== carIdToDelete)); // Elimina el auto del estado
      setAlertMessage('Auto eliminado exitosamente.'); // Define el mensaje de éxito
      setShowAlertModal(true); // Muestra el modal de alerta
      setShowConfirmModal(false); // Cierra el modal de confirmación
    })
    .catch(err => {
      console.error('Error al eliminar:', err); // Muestra el error en la consola
      setAlertMessage('Ocurrió un error al intentar eliminar el auto.'); // Define el mensaje de error
      setShowAlertModal(true); // Muestra el modal de alerta
      setShowConfirmModal(false); // Cierra el modal de confirmación
    });
  };

  // Función para abrir el modal de edición y cargar los datos del auto seleccionado
  const handleEdit = (car) => {
    setSelectedCar(car); // Guarda el auto seleccionado
    setFormData(car); // Carga los datos del auto en el formulario
    setShowModal(true); // Muestra el modal de edición
  };

  // Función para cerrar el modal de edición y limpiar el auto seleccionado
  const handleCloseModal = () => {
    setShowModal(false); // Oculta el modal
    setSelectedCar(null); // Limpia el auto seleccionado
  };

  // Función para manejar los cambios en los inputs del formulario de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtiene el nombre y valor del input
    setFormData({
      ...formData,
      [name]: value, // Actualiza el valor en el estado del formulario
    });
  };

  // Función para actualizar los datos de un auto
  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/cars/${selectedCar.id}/`, formData, {
      headers: {
        Authorization: `Bearer ${token}` // Incluye el token de autenticación
      }
    })
    .then(response => {
      const updatedCars = cars.map(car =>
        car.id === selectedCar.id ? response.data : car // Actualiza el auto en el estado
      );
      setCars(updatedCars); // Guarda los autos actualizados en el estado
      setAlertMessage('Auto actualizado exitosamente.'); // Define el mensaje de éxito
      setShowAlertModal(true); // Muestra el modal de alerta
      handleCloseModal(); // Cierra el modal de edición
    })
    .catch(err => {
      console.error('Error al actualizar:', err); // Muestra el error en la consola
      setAlertMessage('Ocurrió un error al intentar actualizar el auto.'); // Define el mensaje de error
      setShowAlertModal(true); // Muestra el modal de alerta
    });
  };

  // Renderizado condicional mientras se cargan los autos
  if (loading) {
    return <p>Cargando publicaciones...</p>; // Muestra mensaje de carga
  }

  // Renderizado condicional en caso de error
  if (error) {
    return <p>{error}</p>; // Muestra el mensaje de error
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
