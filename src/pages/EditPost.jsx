import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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

  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <NavBar />
      <h1>Your Publications</h1>
      <div>
        {cars.length > 0 ? (
          <ul>
            {cars.map(car => (
              <li key={car.id}>
                {car.brand} {car.model} ({car.year}) - ${car.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes publicaciones aún.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EditPost;

