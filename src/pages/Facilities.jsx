import React from 'react';
import { FaWifi, FaSnowflake, FaCoffee, FaBath, FaDumbbell, FaParking } from 'react-icons/fa';

// Use this component to display a list of hotel facilities with a clean and modern design.
// The facilities are displayed in a responsive grid with icons, titles, and descriptions.

// Placeholder data for the facilities. You would typically fetch this from an API.
const facilitiesData = [
  {
    icon: <FaWifi />,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access available throughout the hotel.',
  },
  {
    icon: <FaSnowflake />,
    title: 'Air Conditioning',
    description: 'Each room is equipped with individual climate control for your comfort.',
  },
  {
    icon: <FaCoffee />,
    title: 'Complimentary Breakfast',
    description: 'Enjoy a free breakfast buffet every morning during your stay.',
  },
  {
    icon: <FaBath />,
    title: 'Private Bathroom',
    description: 'Each room has a clean and modern private bathroom with toiletries.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Gym Access',
    description: 'Complimentary access to our state-of-the-art fitness center for guests.',
  },
  {
    icon: <FaParking />,
    title: 'Free Parking',
    description: 'Secure on-site parking is available for all guests at no extra charge.',
  },
];

const Facilities = () => {
  return (
    <div className="py-16 px-4">
      <div className="w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
            Our Hotel Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of amenities designed to make your stay as comfortable and enjoyable as possible.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-indigo-600 bg-indigo-100 p-4 rounded-full mb-4 text-3xl">
                {facility.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {facility.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;