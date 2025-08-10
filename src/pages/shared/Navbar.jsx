import React, { use, useEffect, useState } from 'react';
import logo from '../../assets/villa-7130905_1280.png'
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  const location = useLocation();

  const { user, signOutUser } = use(AuthContext)
  const handleSingOut = () => {
    signOutUser()
      .then(() => {
        console.log('signout')
      })
      .catch(error => {
        console.log(error)
      })
  }
// Determine if the current route is the homepage
  const isHomePage = location.pathname === '/';
  // when scroll change bg colour
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setIsScrolled(true)
      } else{
          setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll);
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition duration-300 ease-in-out ${isScrolled
        ? 'bg-white shadow-md text-gray-800'
        : isHomePage
        ? 'bg-transparent text-white'
        : 'bg-white shadow-md text-gray-800'}`}>
      <div className="navbar w-11/12 container mx-auto py-3 md:py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='font-bold'><NavLink to="/">Home</NavLink></li>
              <li className='font-bold'><NavLink to="/rooms">See Rooms</NavLink></li>
              <li className='font-bold'><NavLink to="/bookings">My Bookings</NavLink></li>
              <li className='font-bold'><NavLink to="/about">About Us</NavLink></li>
              <li className='font-bold'><NavLink to="/contact">Contact Us</NavLink></li>
              <li className='font-bold'><NavLink to="/paymentHistory">Payment History</NavLink></li>
            </ul>
          </div>
          <div className='flex items-center gap-1'>
            <img className='w-10 h-10 rounded-xl' src={logo} alt="" />
            <h2 className="text-3xl font-bold">Hotella</h2>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-bold'><NavLink to="/">Home</NavLink></li>
            <li className='font-bold'><NavLink to="/rooms">See Rooms</NavLink></li>
            <li className='font-bold'><NavLink to="/bookings">My Bookings</NavLink></li>
            <li className='font-bold'><NavLink to="/about">About Us</NavLink></li>
            <li className='font-bold'><NavLink to="/contact">Contact Us</NavLink></li>
            <li className='font-bold'><NavLink to="/paymentHistory">Payment History</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ? (<div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 sm:w-10 md:w-11 lg:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow-lg menu menu-sm dropdown-content bg-blue-100 text-gray-800 rounded-xl border border-gray-200 w-52 sm:w-56 md:w-60 lg:w-64"
              >
                <li className="mb-2">
                  <div className="flex flex-col">
                    <span className="font-semibold text-4xl truncate">
                      {user?.displayName || 'No Name'}
                    </span>
                  </div>
                </li>
                <div className="divider my-1" />
                <li>
                  <button
                    onClick={handleSingOut}
                    className="text-red-500 font-medium hover:bg-red-100 px-2 py-1 w-full text-left btn bg-amber-200 rounded-full"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>) :
              <>
                <Link to="/login"><button className='btn bg-blue-500 text-white transition duration-300 hover:bg-blue-700'>LogIn</button></Link>
                <Link to="/register"><button className='btn bg-blue-500 text-white transition duration-300 hidden md:block hover:bg-blue-700'>Register</button></Link>
              </>
          }
        </div>
      </div>
    </header>
  );
};

export default Navbar;