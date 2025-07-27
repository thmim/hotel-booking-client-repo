import React from 'react';
import { Link } from 'react-router';

const SingleRoom = ({room}) => {
    const {type,roomImage,description,_id,price} = room 
    return (

<div
            className="card card-compact bg-base-100 shadow-xl overflow-hidden
                       transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]
                       flex flex-col h-full" 
        >
            <Link to={`/hotels/${_id}`} className="block h-full"> 
                <figure className="relative h-56 w-full"> 
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

                <div className="card-body p-6 flex flex-col flex-grow"> 
                    <h2 className="card-title text-2xl font-bold text-neutral mb-2">
                        {type}
                    </h2>

                    <p className="text-base-content text-opacity-80 leading-relaxed mb-4 line-clamp-3"> 
                        {description}
                    </p>

                    <div className="card-actions justify-end mt-auto"> 
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