import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormRegister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/registro/", {
                username: name,
                first_name: name.split(" ")[0],
                last_name: name,
                email,
                password
            });

            if (response.status === 201) {
                setSuccess("User created successfully.");
                setError("");
                // Redirige automáticamente a la página de login
                setTimeout(() => {
                    navigate("/login");
                }, 2000); // Espera 2 segundos antes de redirigir
            }
        } catch (err) {
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
                    {error && <p className="alert alert-danger">{error}</p>}
                    {success && <p className="alert alert-success">{success}</p>}
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            name="name"
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark btninicio">Register</button>

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