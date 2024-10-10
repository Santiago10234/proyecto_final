import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
  const userId = localStorage.getItem('id'); // Verifica si el 'id' está en localStorage

  return userId ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
