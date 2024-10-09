import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/card.css';

function EditPost() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('id');  // Obtener el id del usuario del localStorage

    if (userId) {
      // Hacer la solicitud a la API con el id del usuario en la URL
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
        // Actualizar el estado para eliminar el auto de la lista
        setCars(cars.filter(car => car.id !== carId));
        alert('Auto eliminado exitosamente.');
      })
      .catch(err => {
        console.error('Error al eliminar:', err);
        alert('Ocurrió un error al intentar eliminar el auto.');
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
              <div className="card" style={{ width: '18rem', marginBottom: '20px', marginTop: '30px',marginLeft:'-12px' }}>
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
    </div>
  );
}

export default EditPost;



