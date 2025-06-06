import React from 'react';
import logo from '../../assets/villa-7130905_1280.png'
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto my-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='font-bold'><NavLink to="/rooms">SeeRooms</NavLink></li>
        <li className='font-bold'><NavLink to="/bookings">My Bookings</NavLink></li>
      </ul>
    </div>
    <div className='flex items-center'>
        <img className='w-12 h-12' src={logo} alt="" />
        <h2 className="btn btn-ghost text-4xl">Hotella</h2>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li className='font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='font-bold'><NavLink to="/rooms">SeeRooms</NavLink></li>
        <li className='font-bold'><NavLink to="/bookings">My Bookings</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to="/login"><button className='btn bg-blue-500 text-white transition duration-300 hover:bg-blue-700'>LogIn</button></Link>
    <Link to="/register"><button className='btn bg-blue-500 text-white transition duration-300 hover:bg-blue-700'>Register</button></Link>
  </div>
</div>
    );
};

export default Navbar;