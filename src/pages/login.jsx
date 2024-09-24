import '../styles/login.css'
import Form from '../components/form'

function Login() {  
    return (
      <>
        <div className="containerLogin">
            <div className='containerForm'>
                <Form/>
            </div>
            <div className='containerImg'>
                <img className='img' src="src\assets\imgLogin1.jpg" alt="" />
            </div>
        </div>
      </>
    )
  }
  
  export default Login