import React from 'react';

const SingleRoom = ({room}) => {
    const {hotelName,roomImage,description} = room 
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={roomImage}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{hotelName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default SingleRoom;