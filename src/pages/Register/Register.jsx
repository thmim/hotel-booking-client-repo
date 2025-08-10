import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import registerlottie from '../../assets/lotties/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
const Register = () => {
  const { createUser, googleLogInUser, setUser } = use(AuthContext)
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const handleImageUpload = async (e) => {
        const photo = e.target.files[0];
        const formData = new FormData();
        formData.append('image', photo);

        const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api_key}`;

        try {
            const res = await axios.post(imageUrl, formData);
            setImage(res.data.data.url);
            console.log(res.data.data.url);
        } catch (err) {
            console.error('Image upload failed:', err);
            Swal.fire({
                icon: 'error',
                title: 'Image Upload Failed',
                text: 'Try again later.',
            });
        }
    };

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = image;
    const password = e.target.password.value;
    console.log(name, email)
    createUser(email, password)
      .then(result => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to My Website",
          showConfirmButton: false,
          timer: 2000
        });
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          console.log("User created & profile updated:", user);
          navigate("/")

        });
      })
      .catch((error) => {
        console.log(error)
      });
  }
  const provider = new GoogleAuthProvider
  const handlaGooglelogin = () => {
    googleLogInUser(provider)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='flex justify-center items-center mt-10 mb-10'>
      <Helmet>
        <title>Hotel Booking|Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center mt-5">
          <Lottie style={{ width: '200px' }} animationData={registerlottie} loop={true} />
        </div>
        <h1 className="text-5xl font-bold p-3">Signup now!</h1>
        <div className='p-3'>
          <button onClick={handlaGooglelogin} className='btn w-full flex gap-5'><FcGoogle size={25} /> <p>Login With Google</p></button>
        </div>
        <form onSubmit={handleRegister} className="card-body">

          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Enter Your Name" required />

            {/* Image field */}
            <label className="label">Photo Url</label>
            <input
              type="file"
              accept="image/*"
              name='photo'
              placeholder="Your Image"
              className="input"
              onChange={handleImageUpload}
              required />

              {/* email field */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />

            {/* password field */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" />
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