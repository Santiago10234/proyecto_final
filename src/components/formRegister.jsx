import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Componente de formulario para registro de usuario
function FormRegister() {
    // Hook de React Router para redirigir a otras rutas
    const navigate = useNavigate();

    // Estado local para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        username: "",   // Nombre de usuario
        name: "",       // Nombre completo
        email: "",      // Correo electrónico
        password: ""    // Contraseña
    });

    // Estado para manejar errores en el formulario
    const [error, setError] = useState("");
    // Estado para manejar mensajes de éxito
    const [success, setSuccess] = useState("");

    // Función para actualizar el estado del formulario cuando el usuario escribe en los inputs
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value  // Asigna el valor al campo correspondiente
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene la recarga de la página
        const { name, email, password } = formData;

        // Validaciones de campos obligatorios
        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        // Validación de la longitud mínima de la contraseña
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        try {
            // Solicitud POST para crear un usuario
            const response = await axios.post("http://localhost:8000/api/registro/", {
                username: name,                   // Se envía como username
                first_name: name.split(" ")[0],   // Toma la primera palabra del nombre completo
                last_name: name,                  // Usa el nombre completo como apellido
                email,                            // Correo electrónico
                password                          // Contraseña
            });

            // Verifica si el usuario se creó correctamente
            if (response.status === 201) {
                setSuccess("User created successfully.");
                setError("");

                // Redirige automáticamente a la página de login después de 2 segundos
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (err) {
            // Muestra un mensaje de error en caso de fallo en la creación
            setError(err.response?.data?.error || "Error creating user.");
        }
    };

    return (
        <>
            <form className="containerRegister" onSubmit={handleSubmit}>
                <div>
                    <div className="titulo">
                        <h1>Get Started Now</h1>
                    </div>
                    {error && <p className="alert alert-danger">{error}</p>}    {/* Muestra mensaje de error */}
                    {success && <p className="alert alert-success">{success}</p>} {/* Muestra mensaje de éxito */}
                    
                    {/* Campo de nombre */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            name="name"
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={handleInputChange} // Actualiza el estado
                        />
                    </div>

                    {/* Campo de correo electrónico */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange} // Actualiza el estado
                        />
                    </div>

                    {/* Campo de contraseña */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange} // Actualiza el estado
                        />
                    </div>

                    {/* Botón de registro */}
                    <button type="submit" className="btn btn-dark btninicio">Register</button>

                    {/* Enlace a la página de inicio de sesión */}
                    <div className="sign_Up">
                        <p>Have an account?</p>
                        <a style={{ cursor: 'pointer' }} onClick={() => navigate("/login")} className="link-offset-2 link-underline link-underline-opacity-0 link">Sign In</a>
                    </div>
                </div>
            </form>
        </>
    );
}

export default FormRegister;
