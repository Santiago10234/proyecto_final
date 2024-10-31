import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { crearCookie } from '../cookiesjs/cookies';
function Form() {
    const navigate = useNavigate();
    // Definición de estados para email, password, error y success.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState("");
    // Función asincrónica para manejar el envío del formulario.
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        try {
            // Solicitud POST a la API para autenticar al usuario.
            const response = await axios.post('http://localhost:8000/api/login/', {
                email: email,
                password: password,
            });

            // Si la autenticación es exitosa (código de estado 200), redirige al usuario.
            if (response.status === 200) {
                setSuccess("User logged in successfully.");
                // Almacena el ID del usuario en localStorage y en una cookie.
                localStorage.setItem("id",response.data.id)
                crearCookie("id",response.data.id,7)
                // Crea cookies para el token de acceso y el token de actualización.
                crearCookie("token",response.data.tokenAcc)
                crearCookie("refreshToken", response.data.refreshToken, 7); // Almacena el token de refresh
                crearCookie("isSuperuser", response.data.super, 7);
                setError(""); // Limpia cualquier mensaje de error.
                // Redirige al usuario a la página de inicio después de 2 segundos.
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
        } catch (err) {
            // Si ocurre un error, muestra un mensaje de error.
            setError("Incorrect username or password.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="titulo">
                    <h1>Welcome Back!</h1>
                    <p>Enter your Credentials to access your account</p>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <p className="alert alert-success">{success}</p>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-dark btninicio">Login</button>

                <div className="sign_Up">
                    <p>Don't have an account?</p>
                    <a style={{cursor:'pointer'}} onClick={() => { navigate("/register") }} className="link-offset-2 link-underline link-underline-opacity-0 link">Sign Up</a>
                </div>
            </form>
        </>
    );
}

export default Form;
