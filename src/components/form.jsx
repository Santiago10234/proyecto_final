import { useNavigate } from 'react-router-dom'

function Form(){
    const navigate = useNavigate()
    return(
        <>
        <form>
           <div className="titulo">
                <h1>Welcome Back!</h1>
                <p>Enter your Credentials to access you account</p>
           </div>
                
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-dark btninicio">Login</button>

            <div className="sign_Up">
                <p>Don't have an account?</p>
                <a onClick={()=>{navigate("/register")}}  className="link-offset-2 link-underline link-underline-opacity-0 link">Sign Up</a>
            </div>
        </form>
        </>
    )
}
  
export default Form