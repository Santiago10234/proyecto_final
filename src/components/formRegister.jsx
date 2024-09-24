import { useNavigate } from "react-router-dom"

function FormRegister(){
    const navigate = useNavigate()
    return(
        <>
            <form>
                <div className="titulo">
                    <h1>Get Started Now</h1>
                </div>
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your Name"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                
                <button type="submit" class="btn btn-dark btninicio">Register</button>

                <div className="sign_Up">
                    <p>Have an account?</p>
                    <a  onClick={()=>navigate("/login")} className="link-offset-2 link-underline link-underline-opacity-0 link">Sign In</a>
                </div>
            </form>
        </>
    )
}
  
export default FormRegister

