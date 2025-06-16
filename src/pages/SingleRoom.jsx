import React from 'react';
import { Link } from 'react-router';

const SingleRoom = ({room}) => {
    const {type,roomImage,description,_id} = room 
    return (
       
        <div className="card bg-base-100 w-96 shadow-sm">
           <Link to={`/hotels/${_id}`}>
  <figure>
    <img
    className='w-96 h-72'
      src={roomImage}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{type}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
  </Link>
</div>
        
    );
};

export default SingleRoom;