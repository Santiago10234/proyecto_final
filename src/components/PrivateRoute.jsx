import { Navigate } from 'react-router-dom';
// Componente que maneja rutas privadas
const PrivateRoute = ({ element: Component }) => {
  // Verifica si hay un 'id' guardado en localStorage para determinar si el usuario está autenticado
  const userId = localStorage.getItem('id'); 
  // Si el 'id' existe, renderiza el componente especificado; de lo contrario, redirige al usuario a la página de inicio de sesión
  return userId ? <Component /> : <Navigate to="/login" />; 
};

export default PrivateRoute;
