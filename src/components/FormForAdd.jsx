import React from 'react'

function FormForAdd() {
  return (
    <div>
        <div  className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <form className='border fromBorder'>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Brand</label>
                    <select className="form-control">
                        <option defaultValue>Brand</option>
                        <option>Alfa Romeo</option>
                        <option>Aston Martin</option>
                        <option>Audi</option>
                        <option>Bentley</option>
                        <option>BMW</option>
                        <option>Cadillac</option>
                        <option>Dodge</option>
                        <option>Ferrari</option>
                        <option>Audi</option>
                        <option>Ford</option>
                        <option>Jaguar</option>
                        <option>Lamborghini</option>
                        <option>Land Rover</option>
                        <option>Lexus</option>
                        <option>Audi</option>
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
                    <label htmlFor="exampleInputText" className="form-label">Model</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Enter the Model"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Year</label>
                    <input type="number" className="form-control" id="exampleInputNumber" placeholder="Enter the Year"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Mileage</label>
                    <input type="number" className="form-control" id="exampleInputNumber" placeholder="Enter the Mileage"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Transmission</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Enter the Transmission"/>
                </div>
                <button type="submit" className="btn btn-dark btnPost">Post</button>
            </form>
        </div>
    </div>
  )
}

export default FormForAdd
