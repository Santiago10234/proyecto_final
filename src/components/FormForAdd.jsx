import React from 'react'

function FormForAdd() {
  return (
    <div>
        <div  className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
            <form className='border fromBorder'>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Marca</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Ingrese texto aquí"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Modelo</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Ingrese texto aquí"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Año</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Ingrese texto aquí"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Kilometraje</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Ingrese texto aquí"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Transmisíon</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Ingrese texto aquí"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default FormForAdd
