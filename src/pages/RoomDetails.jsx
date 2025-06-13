import React from 'react';
import { useLoaderData } from 'react-router';


const RoomDetails = () => {
 const roomsDetails = useLoaderData();
 console.log(roomsDetails);   
    return (
        <div>
            
        </div>
    );
};

export default RoomDetails;