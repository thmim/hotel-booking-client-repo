import React from 'react';
import { Link } from 'react-router';

const SingleRoom = ({room}) => {
    const {type,roomImage,description,_id,price} = room 
    return (
       
//         <div className="card bg-base-100 w-96 shadow-sm">
//            <Link to={`/hotels/${_id}`}>
//   <figure>
//     <img
//     className='w-96 h-72'
//       src={roomImage}
//       alt="" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{type}</h2>
//     <p>{description}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">View Details</button>
//     </div>
//   </div>
//   </Link>
// </div>

<div
            className="card card-compact bg-base-100 shadow-xl overflow-hidden
                       transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]
                       flex flex-col h-full" // Ensure cards are equal height in a grid
        >
            <Link to={`/hotels/${_id}`} className="block h-full"> {/* Make the entire card clickable */}
                <figure className="relative h-56 w-full"> {/* Consistent image height */}
                    <img
                        src={roomImage || 'https://via.placeholder.com/600x400.png?text=Room+Image'}
                        alt={type}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {/* Price Tag on Image */}
                    <div className="absolute top-4 right-4 bg-primary text-white font-bold text-lg px-4 py-2 rounded-lg shadow-md">
                        BDT {price.toLocaleString()}
                    </div>
                </figure>

                <div className="card-body p-6 flex flex-col flex-grow"> {/* flex-grow to make content fill space */}
                    <h2 className="card-title text-2xl font-bold text-neutral mb-2">
                        {type}
                    </h2>

                    <p className="text-base-content text-opacity-80 leading-relaxed mb-4 line-clamp-3"> {/* Truncate description */}
                        {description}
                    </p>

                    <div className="card-actions justify-end mt-auto"> {/* mt-auto pushes button to bottom */}
                        <button className="btn btn-primary btn-block text-lg">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

export default SingleRoom;