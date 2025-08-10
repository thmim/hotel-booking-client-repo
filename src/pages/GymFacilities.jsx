import React from 'react';

// This component displays a single gym facility card with a large image.
import gymhouse from '../assets/gym.jpg'
const GymFacilities = () => {
  return (
    <div className="py-16 px-4">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
            Our Gym Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay active and energized with our state-of-the-art fitness center.
          </p>
        </div>

        {/* Single Card for Gym Facilities */}
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden mx-auto transform transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img 
              src={gymhouse}
              alt="Hotel Gym"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              State-of-the-Art Training Grounds
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our modern fitness center is equipped with a wide variety of cardio machines, strength training equipment, and free weights to help you maintain your workout routine while on vacation. Enjoy complimentary access and personalized training sessions available upon request.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
              <li>High-end cardio machines</li>
              <li>Free weights and strength equipment</li>
              <li>Personal trainers available</li>
              <li>Yoga and stretching area</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymFacilities;