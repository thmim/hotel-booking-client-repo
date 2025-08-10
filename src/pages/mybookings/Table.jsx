import React from 'react';
import { useState } from 'react';
import Update from '../Update';
import Swal from 'sweetalert2';
import Review from '../reviews/Review';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Table = ({booking,index,bookings,setBookings,bookingId}) => {
    
    const [showModal,setShowmodal] = useState(false)
    const [showReviewModal, setShowReviewModal] = useState(false);
    const {name,photo,phone,checkInDate,checkOutDate,_id,price} = booking
    console.log(photo)
    const handleBooking = () =>{
         const today = new Date();
    const checkIn = new Date(checkInDate);
    const oneDayBeforeCheckIn = new Date(checkIn);
    oneDayBeforeCheckIn.setDate(checkIn.getDate() - 1);

     if (today > oneDayBeforeCheckIn) {
      Swal.fire({
        icon: 'warning',
        title: 'Too Late!',
        text: 'You can only cancel bookings at least 1 day before check-in.',
      });
      return;
    }
      
       Swal.fire({
  title: "Are you sure?",
  text: "You won't dalete this booking!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://assignment-11-hotel-booking-server.vercel.app/visitors/${_id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        console.log('data after delete',data)
       })
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    // remove booking from ui
    const remainingRoom = bookings.filter(booked=>booked._id !== _id)
    setBookings(remainingRoom)
  }
});
    }
    
    return (
        <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-8 w-8">
                <img
                  src={photo || 'N/A'}
                  alt="Image" />
              </div>
              
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3">
          {checkInDate}
        </td>
        <td className="px-4 py-3">{checkOutDate}</td>
        <td className="px-4 py-3 flex gap-1 items-center">{price || 'N/A'}<FaBangladeshiTakaSign /></td>
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
        <td className="px-4 py-3 text-center space-x-1 space-y-1">
              <button  onClick={() => setShowmodal(true)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">Update Date</button>
              {showModal && (<Update
               setShowmodal={setShowmodal} _id={_id}></Update>)}
              
              <button onClick={handleBooking} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Cancel Booking</button>
              <button onClick={() => setShowReviewModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Review</button>
              {showReviewModal && (
  <Review setShowReviewModal={setShowReviewModal} _id={bookingId} />
)}
            </td>
      </tr>
    );
};

export default Table;