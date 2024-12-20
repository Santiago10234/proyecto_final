import React, { useState } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import { traerCookie } from '../cookiesjs/cookies';

function NavBar() {
    const navigate = useNavigate();
    const usuarioIniciado = localStorage.getItem("id");
    const usuarioCookie = traerCookie("id"); // Obtiene el ID del usuario de las cookies

    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
    const [message, setMessage] = useState(''); // Estado para el mensaje
    const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje

    // Función para cerrar sesión
    const closeSession = () => {
        localStorage.clear(); // Limpia el localStorage
        navigate("/login"); // Redirige a la página de login después de cerrar sesión
    };

    // Función para manejar clic en autenticación (iniciar/cerrar sesión)
    const handleAuthClick = () => {
        if (usuarioIniciado) {
            closeSession(); // Si el usuario ha iniciado sesión, cierra la sesión
        } else {
            navigate("/login"); // Si no ha iniciado sesión, redirige a la página de login
        }
    };

    // Función que maneja el submit del formulario de búsqueda
    const handleSearch = (e) => {
        e.preventDefault();

        const term = searchTerm.toLowerCase(); // Convierte el término de búsqueda a minúsculas
        const carBrands = [
            'alfa romeo', 'aston martin', 'audi', 'bentley', 'bmw', 'cadillac',
            'dodge', 'ferrari', 'ford', 'jaguar', 'lamborghini', 'land rover',
            'lexus', 'maserati', 'mazda', 'mercedes benz', 'porsche', 'rolls royce',
            'tesla', 'toyota', 'volvo'
        ];

        // Maneja la navegación según el término de búsqueda
        if (term === 'home') {
            navigate('/');
        } else if (term === 'about') {
            navigate('/about');
        } else if (term === 'contact') {
            navigate('/contact');
        } else if (term === 'add car' && usuarioIniciado) {
            navigate('/addcar');
        } else if (term === 'publications' && usuarioIniciado) {
            navigate('/editpost');
        } else if (carBrands.includes(term)) {
            // Si coincide con una marca de autos, redirigir a la página de resultados
            navigate(`/search/${term}`);
        } else {
            // Muestra un mensaje si no se encuentra la página
            setMessage('Página no encontrada. Intenta con Home, About, Contact, Add Car, Publications, o una marca de auto válida.');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 6000); // Duración del mensaje 
        }

        setSearchTerm(''); // Limpia el término de búsqueda
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <a style={{ marginLeft: '10px' }} className="navbar-brand" onClick={() => { navigate("/") }} href="#">
                        <img className='imgLogo' src="../src/assets/Logo-luxuryCar.png" alt="a" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={{ '--bs-scroll-height': '100px' }}
                        >
                            <li className="nav-item">
                                <a onClick={() => { navigate("/") }} className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { navigate("/about") }} className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { navigate("/contact") }} className="nav-link active" href="#">Contact</a>
                            </li>
                            {usuarioCookie &&
                                <li className="nav-item">
                                    <a onClick={() => { navigate("/addcar") }} className="nav-link active" href="#">Add Car</a>
                                </li>
                            }
                            {usuarioCookie &&
                                <li className="nav-item">
                                    <a onClick={() => { navigate("/editpost") }} className="nav-link active" href="#">My Publications</a>
                                </li>
                            }
                        </ul>
                        <form className="d-flex search container-search" role="search" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado con el valor ingresado
                            />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                            <div className='container-sing text-nowrap'>
                                <a onClick={handleAuthClick} className="nav-link sing" href="#">
                                    {usuarioIniciado ? "Log out" : "Sign in"}
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            {showMessage && (
                <div style={{marginTop:'20px'}} className="alert alert-warning alert-dismissible fade show" role="alert">
                    {message}
                    <button type="button" className="btn-close" onClick={() => setShowMessage(false)} aria-label="Close"></button>
                </div>
            )}
        </>
    );
}

export default NavBar;
