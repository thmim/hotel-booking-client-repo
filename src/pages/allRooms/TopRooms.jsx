import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const TopRooms = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/toprated')
      .then(res =>
        setHotels(res.data)
        
        )
      
      .catch(err => console.error("Error loading hotels", err));
  }, []);

  return (
    // <div className="p-6 bg-gray-100 min-h-screen">
    //   <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Top Rated Rooms</h2>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {hotels.map(hotel => (
    //       <div key={hotel._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    //         <img src={hotel.roomImage} alt={hotel.type} className="w-full h-48 object-cover" />
    //         <div className="p-4">
    //           <h3 className="text-xl font-semibold text-gray-800">{hotel.type}</h3>
    //           <p className="text-gray-600 mt-1">৳{hotel.pricePerNight} / night</p>
    //           <div className="mt-2 text-yellow-500 font-medium">
    //             ⭐ Rating: {hotel.rating}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
     <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 relative">
                    <span className="relative z-10">Our Top-Rated Rooms</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-yellow-500 rounded-full z-0"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hotels.map((room) => (
                        <div
                            key={room._id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-60">
                                <img
                                    src={room.roomImage || 'https://via.placeholder.com/600x400.png?text=Room+Image'}
                                    alt={room.type}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-2xl font-semibold leading-tight">{room.type}</h3>
                                    <p className="text-lg opacity-90">Starts from BDT {room.price}</p>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-gray-700 mb-4 line-clamp-3">{room.description}</p>
                                <div className="flex items-center text-yellow-500 mb-4">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <span className="font-bold text-lg">{room.rating || 'N/A'}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                                    
                                    <p className="flex items-center"><i className="fas fa-users mr-2"></i> Max Guests: {room.maxGuests}</p>
                                    
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() =>
                                          navigate(`/hotels/${room._id}`)
                                          //  alert(`Booking ${room.type} (ID: ${room._id})`)
                                          } // Replace with actual booking logic (e.g., navigate to booking page)
                                        className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  );
};

export default TopRooms;