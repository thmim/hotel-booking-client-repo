import React, { use, useState } from 'react';
import { ImCross } from "react-icons/im";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { AuthContext } from '../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
const Booked = ({roomsData}) => {
  const navigate = useNavigate();
 
  const {user} = use(AuthContext)
  const [showModal,setShowModal] = useState(false)
  const handleGuest =(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const phone = form.phone.value;
      const guestNumber = form.guestNumber.value;
      const checkInDate = form.checkInDate.value;
      const checkOutDate = form.checkOutDate.value;
      
      const guestInfo = {
           guest:user.email,
           name,
           photo,
           guestNumber,
           phone,
           checkInDate,
           checkOutDate,
           type,
           roomId:_id

      }
      axios.post('http://localhost:5000/visitors',guestInfo)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your have successfully booked this room",
  showConfirmButton: false,
  timer: 1500
});
        }
        navigate('/bookings')
        console.log(res.data)
      })
      .catch(error => {
  if (error.response && error.response.status === 409) {
    Swal.fire({
      icon: "error",
      title: "Room Already Booked",
      text: "Sorry, this room has already booked for your selected date.",
    });
  } else {
    console.error(error);
  }
})
  }
    // console.log(roomsData);
    
    const{price,roomImage,type,availableRooms,roomSize,maxGuests,bed,_id} = roomsData
    console.log(_id)
    return (
        <div>
          <button
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 w-full"
  onClick={() => setShowModal(true)}
>
  Book Now
</button>
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
    <div className="bg-white rounded-2xl w-full max-w-4xl p-6 shadow-xl relative overflow-y-auto max-h-[90vh]">
      
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        <ImCross />
      </button>

      {/* Room Info (Dynamic) */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <img
          src={roomImage}
          alt=""
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{type}</h2>
          <p className="text-lg text-blue-600 font-semibold mb-3 flex gap-1 items-center"><FaBangladeshiTakaSign /> {price} per night</p>

          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Bed:</strong> {bed}</li>
            <li><strong>Room Size:</strong> {roomSize}</li>
            <li><strong>Max Guests:</strong> {maxGuests}</li>
            <li><strong>Available Rooms:</strong> {availableRooms}</li>
          </ul>
        </div>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleGuest} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name='name'
            placeholder="Your full name"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo Url</label>
          <input
            type = "url"
            name='photo'
            placeholder="Your Image Link"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name='phone'
            placeholder="01XXXXXXXXX"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
          <input
            type="number"
            name='guestNumber'
            min="1"
            max="3"
            placeholder="e.g., 2"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
          <input
            type="date"
            name='checkInDate'
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
          <input
            type="date"
            name='checkOutDate'
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <button
        
          type='submit'
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  </div>
)}

        </div>
    );
};

export default Booked;