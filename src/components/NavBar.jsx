import React, { useState } from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const usuarioIniciado = localStorage.getItem("usuario");

    // Estado local para la búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Función que maneja el submit del formulario de búsqueda
    const handleSearch = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Convertir el término de búsqueda a minúsculas para hacer la comparación más robusta
        const term = searchTerm.toLowerCase();

        // Redirigir en función del término de búsqueda
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
        } else {
            alert('Página no encontrada. Intenta con Home, About, Contact, Add Car o Publications.');
        }

        // Limpiar el campo de búsqueda después de realizar la búsqueda
        setSearchTerm('');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <a style={{marginLeft:'10px'}} className="navbar-brand" onClick={() => { navigate("/") }} href="#"><img className='imgLogo' src="src/assets/Logo-luxuryCar.png" alt="logo" /></a>
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
                            {usuarioIniciado &&
                            <li className="nav-item">
                                <a onClick={() => { navigate("/addcar") }} className="nav-link active" href="#">Add Car</a>
                            </li>
                            }
                            {usuarioIniciado &&
                            <li className="nav-item">
                                <a onClick={() => { navigate("/editpost") }} className="nav-link active" href="#">Publications</a>
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
                                <a onClick={() => { navigate("/login") }} className="nav-link sing" href="#">{
                                    usuarioIniciado ? "Log out" : "Sign in"
                            }</a>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
