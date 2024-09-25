import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCar from './pages/AddCar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Contact from './pages/contact.jsx';
import About from './pages/About.jsx';
import EditPost from './pages/EditPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/addcar",
    element: <AddCar/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/editpost",
    element: <EditPost/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
