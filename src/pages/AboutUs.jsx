import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
            className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Grand Vista Hotel</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Nestled in the heart of Cox’s Bazar, Grand Vista Hotel offers
            unmatched comfort and breathtaking views of the world’s longest
            sea beach. Our rooms are designed for both relaxation and
            productivity, with world-class amenities and exceptional service.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Whether you are here for business or leisure, we ensure that your
            stay is memorable with our luxurious rooms, fine dining, and
            personalized hospitality. At Grand Vista, every guest is treated
            like royalty.
          </p>

          {/* Extra Info */}
          <div className="bg-white p-5 rounded-xl shadow-md mt-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Owner"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Mr. Rahman</h3>
                <p className="text-sm text-gray-500">Founder & Owner</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
              <p><span className="font-semibold text-gray-800">Established:</span> 2005</p>
              <p><span className="font-semibold text-gray-800">Rooms Available:</span> 120+</p>
              <p><span className="font-semibold text-gray-800">Location:</span> Cox's Bazar, Bangladesh</p>
              <p><span className="font-semibold text-gray-800">Awards:</span> Best Beach Hotel 2021</p>
            </div>
          </div>

          

        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
