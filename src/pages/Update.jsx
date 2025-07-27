
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';

const Update = ({ setShowmodal, _id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://assignment-11-hotel-booking-server.vercel.app/visitors/${_id}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(error => {
        console.log(error)
      });
  }, [_id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const checkIn = e.target.checkIn.value;
    const checkOut = e.target.checkOut.value;

    const updateDate = {
      checkInDate: new Date(checkIn + 'T00:00:00Z'),
  checkOutDate: new Date(checkOut + 'T00:00:00Z')
    }

    fetch(`https://assignment-11-hotel-booking-server.vercel.app/visitors/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateDate)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your update date has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          setShowmodal(false);
          
        }
      })

    
  };

 

  if (!data) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
        <div className="bg-white rounded-xl p-10">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">
        <button
          onClick={() => setShowmodal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          <ImCross />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Your Stay Dates</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              defaultValue={data?.checkInDate?.slice(0, 10)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              defaultValue={data?.checkOutDate?.slice(0, 10)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
