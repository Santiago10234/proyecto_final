import React from 'react'

function FormContact() {
  return (
    <div>
        <div className='head'>
            <h3>Contact Us Now</h3>
            <p>Say something to start a live chat</p>  
        </div>
        <form>
            <fieldset disabled>
                <div className="mb-3">
                <label for="disabledTextInput" className="form-label">Disabled input</label>
                <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
                </div>
                <div className="mb-3">
                <label for="disabledSelect" className="form-label">Disabled select menu</label>
                <select id="disabledSelect" className="form-select">
                    <option>Disabled select</option>
                </select>
                </div>
                <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                    <label className="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                    </label>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
        <div className='contact'>
            <i class="bi bi-whatsapp fs-3"></i>
            <i class="bi bi-envelope-fill fs-3"></i>   
            <i class="bi bi-instagram fs-3"></i>
            <i class="bi bi-facebook fs-3"></i>
        </div>
    </div>
  )
}

export default FormContact
