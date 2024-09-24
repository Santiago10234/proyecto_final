import '../styles/register.css'
import FormRegister from "../components/formRegister"
function Register() {  
    return (
      <>
        <div className="containerRegister">
           <div className="containerForm">
                <FormRegister/>
           </div>
           <div className='containerImg'>
            <img className='img' src="src\assets\imgRegister1 (1).jpg" alt="" />
           </div>
        </div>
      </>
    )
  }
  
  export default Register