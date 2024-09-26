import React from 'react'
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const usuarioIniciado = sessionStorage.getItem("usuario")
  return (
    <> 
     <form>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className='imgLogo' src="src\assets\Captura_de_pantalla_2024-06-29_181844-transformed.png" alt="" /></a>
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
                            style={{ '--bs-scroll-height': '100px' }} // Cambiado a objeto
                        >
                            <li className="nav-item">
                                <a onClick={()=>{navigate("/")}} className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{navigate("/about")}} className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>{navigate("/contact")}} className="nav-link active" href="#">Contact</a>
                            </li>
                            {usuarioIniciado &&
                            <li className="nav-item">
                                <a onClick={()=>{navigate("/addcar")}} className="nav-link active" href="#">Add Car</a>
                            </li>
                            }
                            { usuarioIniciado &&
                            <li className="nav-item">
                                <a onClick={()=>{navigate("/editpost")}} className="nav-link active" href="#">Edit Post</a>
                            </li>
                            }
                        </ul>
                        <form className="d-flex search" role="search">
                            <input 
                                className="form-control me-2 " 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                            />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                            <div className='container-sing'>
                            <a onClick={()=>{navigate("/login")}} className="nav-link active sing " href="#">Sing in</a>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </nav>
     </form>

    </>
  )
}

export default NavBar
