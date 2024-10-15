import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCar from './pages/AddCar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/About.jsx';
import EditPost from './pages/EditPost.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; // Importa el PrivateRoute
import SearchResults from './pages/SearchResults.jsx'; // Importa el nuevo componente de resultados de búsqueda

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/addcar",
    element: <PrivateRoute element={AddCar} />  // Ruta protegida
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/editpost",
    element: <PrivateRoute element={EditPost} />  // Ruta protegida
  },
  {
    path: "/search/:brand",  // Nueva ruta para la búsqueda por marca
    element: <SearchResults />  // Carga el componente de resultados
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
