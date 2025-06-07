import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import registerlottie from '../../assets/lotties/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Register = () => {
  const {createUser} = use(AuthContext)
  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name,email)
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch((error) => {
    console.log(error)
  });
  }
    return (
        <div className='flex justify-center items-center mt-10 mb-10'> 
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="flex justify-center mt-5">
    <Lottie style={{width:'200px'}} animationData={registerlottie} loop={true} />
  </div>
            <h1 className="text-5xl font-bold p-3">Signup now!</h1>
            <div className='p-3'>
                <button className='btn w-full flex gap-5'><FcGoogle size={25} /> <p>Login With Google</p></button>
                  </div>
              <form onSubmit={handleRegister} className="card-body">
              
                <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Your Name" required />
                <label className="label">Photo Url</label>
                  <input type="text" name='photo' className="input" placeholder="Photo Url" required/>
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" required/>
                  <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" required minLength="6"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"/>
                  <div><a className="link link-hover">Forgot password?</a></div>
                  
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                  <p className='font-bold text-center pt-4'>Already Have an account? <Link to="/login" className='text-blue-400'>Login</Link></p>
                </fieldset>
              </form>
              </div>
              </div> 
    );
};

export default Register;