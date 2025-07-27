
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleRoom from '../SingleRoom';
import axios from 'axios';

const Rooms = () => {
  const loadedRooms = useLoaderData(); 
  const [roomsData, setRoomsData] = useState(loadedRooms);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
console.log("min:", minPrice, "max:", maxPrice);
  const handleFilter = (e) => {
    e.preventDefault();
    const min = parseInt(minPrice) || 0;
  const max = parseInt(maxPrice) || 1000000;
   if (!minPrice && !maxPrice) {
      setRoomsData(loadedRooms);
      return;
    }

    axios.get(`https://assignment-11-hotel-booking-server.vercel.app/hotels?min=${min}&max=${max}`)
  .then(response => {
    setRoomsData(response.data);
  })
  .catch(error => {
    console.error('Error filtering rooms:', error);
  });
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8">All The Beautiful Rooms Are Here</h2>

      {/* Filter Form */}
      <form onSubmit={handleFilter} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="number"
          placeholder="Min Price"
          className="border p-2 rounded-md w-40"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded-md w-40"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Filter
        </button>
      </form>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {roomsData.length > 0 ? (
          roomsData.map((room) => <SingleRoom key={room._id} room={room} />)
        ) : (
          <p className="text-center text-red-500 col-span-full">No rooms found in this price range.</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
