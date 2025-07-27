import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import loginlottie from '../assets/lotties/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
const Login = () => {
  const {signInUser,googleLogInUser} = use(AuthContext)
  const [error,setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = e =>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    signInUser(email,password)
    .then((result)=>{
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your are successfully loged in",
  showConfirmButton: false,
  timer: 2000
});
    
       const user = result.user;
       console.log(user)
       navigate(`${location.state? location.state :"/"}`)
    })
        .catch((error) => {
    const errorCode = error.code;
    
    setError(errorCode);
   
  });
  }
  const provider = new GoogleAuthProvider
        const handlaGooglelogin = () =>{
           googleLogInUser(provider)
           .then(result=>{
            console.log(result)
            navigate(`${location.state? location.state :"/"}`)
          })
          .catch(error=>{
            console.log(error)
          })
        }
    return (
        <div className='flex justify-center items-center mt-10 mb-10'> 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center mt-5">
    <Lottie style={{width:'200px'}} animationData={loginlottie} loop={true} />
  </div>
    <h1 className="text-5xl font-bold p-3">Login now!</h1>
    <div className='p-3'>
    
      <button onClick={handlaGooglelogin} className='btn w-full flex gap-5'><FcGoogle size={25} /> <p>Login With Google</p></button>
      </div>
      <form onSubmit={handleLogIn} className="card-body">
      
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email"/>
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" minLength="6"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"/>
          <p>Forgot password?</p>
          {error && <p className='text-red-400'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-bold text-center pt-4'>Don't Have an account? <Link to="/register" className='text-red-500'>Register</Link></p>
        </fieldset>
      </form>
      </div>
      </div> 
    );
};

export default Login;