import axios from 'axios';
//Funcion para eliminar un auto.
export const handleDelete = (carId, token, setCars, setAlertMessage, setShowAlertModal) => {
  return axios.delete(`http://localhost:8000/api/cars/${carId}/`, {
    headers: {
      Authorization: `Bearer ${token}` // Incluye el token en los headers para autenticar la solicitud
    }
  })
    .then(response => {
      // Filtra el auto eliminado de la lista de autos en el estado
      setCars(prevCars => prevCars.filter(car => car.id !== carId));
      setAlertMessage('Auto eliminado exitosamente.');
      setShowAlertModal(true);
    })
    .catch(err => {
      console.error('Error al eliminar:', err.response ? err.response.data : err);
      setAlertMessage('Ocurrió un error al intentar eliminar el auto.');
      setShowAlertModal(true);
    });
};
// Funcion para editar un auto.
export const handleUpdate = (carId, formData, token, setCars, setAlertMessage, setShowAlertModal, handleCloseModal) => {
  return axios.put(`http://localhost:8000/api/cars/${carId}/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      // Actualiza el auto en la lista con los datos actualizados
      setCars(prevCars => 
        prevCars.map(car => (car.id === carId ? response.data : car))
      );
      setAlertMessage('Auto actualizado exitosamente.');
      setShowAlertModal(true);
      handleCloseModal();
    })
    .catch(err => {
      console.error('Error al actualizar:', err.response ? err.response.data : err);
      setAlertMessage('Ocurrió un error al intentar actualizar el auto.');
      setShowAlertModal(true);
    });
};
