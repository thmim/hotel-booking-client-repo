import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
const SingleRoom = ({ room }) => {
    const { type, roomImage, description, _id, price,rating } = room
    return (

        // <div
        //     className="card card-compact bg-base-100 shadow-xl overflow-hidden
        //                transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
        //                flex flex-col h-full"
        // >
        //     <Link to={`/hotels/${_id}`} className="block h-full">
        //         <figure className="relative h-56 w-full">
        //             <img
        //                 src={roomImage || 'https://via.placeholder.com/600x400.png?text=Room+Image'}
        //                 alt={type}
        //                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        //             />
        //             {/* Price Tag on Image */}
        //             <div className="absolute top-4 right-4 bg-primary text-white font-bold text-lg px-4 py-2 rounded-lg shadow-md">
        //                 BDT {price.toLocaleString()}
        //             </div>
        //         </figure>

        //         <div className="card-body p-6 flex flex-col flex-grow">
        //             <h2 className="card-title text-2xl font-bold text-neutral mb-2">
        //                 {type}
        //             </h2>

        //             <p className="text-base-content text-opacity-80 leading-relaxed mb-4 line-clamp-3">
        //                 {description}
        //             </p>

        //             <div className="card-actions justify-end mt-auto">
        //                 <button className="btn btn-primary btn-block text-lg">
        //                     View Details
        //                 </button>
        //             </div>
        //         </div>
        //     </Link>
        // </div>


        <motion.div
      initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.05 }}
  transition={{
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1] 
  }}
  whileHover={{ scale: 1.02 }}
  
      className="card card-compact bg-base-100 shadow-xl overflow-hidden 
                 flex flex-col h-full group relative"
    >
      <Link to={`/hotels/${_id}`} className="block h-full">
        {/* Image Section */}
        <figure className="relative h-56 w-full overflow-hidden">
          <motion.img
            src={
              roomImage ||
              'https://via.placeholder.com/600x400.png?text=Room+Image'
            }
            alt={type}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Price Tag */}
          <div className="absolute top-4 right-4 bg-primary text-white font-bold text-lg px-4 py-2 rounded-lg shadow-md">
            BDT {price.toLocaleString()}
          </div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-6 flex flex-col flex-grow">
          <h2 className="card-title text-2xl font-bold text-neutral mb-2">
            {type}
          </h2>
            <div className="flex items-center text-yellow-500 mb-4">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                                    <span className="font-bold text-lg">{rating || 'N/A'}</span>
                                </div>
          <p className="text-base-content text-opacity-80 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Book Now / View Details Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="btn btn-primary btn-block text-lg"
          >
            View Details
          </motion.button>
        </div>
      </Link>

      {/* Slide-up Info on Hover */}
      <motion.div
        initial={{ y: "100%" }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg translate-y-full group-hover:translate-y-0 transition duration-500"
      >
        <p className="text-gray-700 text-sm">
          {description}
        </p>
      </motion.div>
    </motion.div>

    );
};

export default SingleRoom;