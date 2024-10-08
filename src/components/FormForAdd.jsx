import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function FormForAdd() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    transmission: '',
    car_image: null,
    price: "",
    num_tel:"",
    owner:localStorage.getItem("id")
  });

  const navigate = useNavigate();  

  const handleChange = (e) => {
    if (e.target.name === 'car_image') {
      setFormData({
        ...formData,
        car_image: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        // Asigna el resultado al estado usando setFormData
        setFormData(prevState => ({
          ...prevState,
          car_image: event.target.result
        }));
      };
      reader.readAsDataURL(file);  // Esto convierte el archivo a base64
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post('http://localhost:8000/api/cars/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setSuccess('Auto publicado exitosamente');

      
      setTimeout(() => {
        navigate('/'); 
      }, 2000);  
      
    } catch (error) {
      setError('Error al publicar el auto', error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh', marginTop:'60px', marginBottom:'50px'}}>
        <form className="border fromBorder" onSubmit={handleSubmit}>
        {error && <p className="alert alert-danger">{error}</p>}
        {success && <p className="alert alert-success">{success}</p>}
          <div className="mb-3">
            <input className="form-control" type="file" name="car_image" id='upload-file' onChange={handleImage} />
            <label className="form-label">Brand</label>
            <select className="form-control" name="brand" onChange={handleChange}>
            <option defaultValue>Brand</option>
                        <option>Alfa Romeo</option>
                        <option>Aston Martin</option>
                        <option>Audi</option>
                        <option>Bentley</option>
                        <option>BMW</option>
                        <option>Cadillac</option>
                        <option>Dodge</option>
                        <option>Ferrari</option>
                        <option>Ford</option>
                        <option>Jaguar</option>
                        <option>Lamborghini</option>
                        <option>Land Rover</option>
                        <option>Lexus</option>
                        <option>Maserati</option>
                        <option>Mazda</option>
                        <option>Mercedes Benz</option>
                        <option>Porsche</option>
                        <option>Rolls Royce</option>
                        <option>Tesla</option>
                        <option>Toyota</option>
                        <option>Volvo</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Model</label>
            <input type="text" className="form-control" name="model" placeholder="Enter the Model" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Year</label>
            <input type="number" className="form-control" name="year" placeholder="Enter the Year" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Mileage</label>
            <input type="number" className="form-control" name="mileage" placeholder="Enter the Mileage" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Transmission</label>
            <select className="form-control" name="transmission" onChange={handleChange}>
              <option value="manual">Manual</option>
              <option value="automatic">Automática</option>
              <option value="semi-automatic">Semi-Automática</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" name="price" placeholder="Enter the total amount of the car" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" name="num_tel" placeholder="Enter the phone number" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-dark btnPost">Post</button>
        </form>
      </div>
    </div>
  );
}

export default FormForAdd;


