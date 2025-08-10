
import { useLoaderData } from 'react-router';
import Booked from './Booked';
import { useEffect, useState } from 'react';
import axios from 'axios';
const RoomDetails = () => {
  const roomsData = useLoaderData()
  const { type, roomImage, description, price, features, _id } = roomsData
  console.log("Room _id from loaderData:", _id);
  console.log("Type of _id:", typeof _id);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://assignment-11-hotel-booking-server.vercel.app/reviews?bookingId=${_id}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        console.log(data)
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch reviews:', error);
        setReviews([]);
        setLoading(false);
      });
  }, [_id]);
  return (

    <div className="w-11/12 md:w-10/12 mx-auto pt-32 flex flex-col lg:flex-row gap-10">
      {/* Left Section: Room Info */}
      <div className="lg:w-2/3 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-900">{type}</h2>
        <img
          src={roomImage}
          alt="Room"
          className="w-full h-[250px] sm:h-[350px] object-cover rounded-xl shadow-md"
        />
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{description}</p>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Guest Reviews</h3>
          {loading ? (
            <p className="text-gray-600">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-gray-500 italic">No reviews available for this room.</p>
          ) : (
            <ul className="space-y-3">
              {reviews.map((review, index) => (
                <li
                  key={index}
                  className="bg-indigo-50 text-gray-800 p-4 rounded-xl border-l-4 border-indigo-500 shadow-sm"
                >
                  {review.review}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right Section: Booking + Facilities */}
      <div className="lg:w-1/3 space-y-6">
        {/* Price Card */}
        <div className="border border-gray-300 rounded-xl shadow-md">
          <p className="p-5 text-center font-semibold text-xl text-indigo-950 bg-gray-100 rounded-t-xl">
            {type}
          </p>
          <div className="border-t"></div>
          <div className="flex flex-col items-center py-6 px-4">
            <p className="font-medium text-gray-800">Price per Night</p>
            <span className="text-3xl sm:text-4xl font-bold text-blue-600">{price}৳</span>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-2">
          <Booked roomsData={roomsData} />
        </div>

        {/* Facilities List */}
        <div className="border border-gray-300 rounded-xl shadow-md p-5 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">All Facilities</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="bg-gray-100 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-200 transition-all"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;