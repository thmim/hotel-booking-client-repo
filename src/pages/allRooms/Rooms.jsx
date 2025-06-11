import React from 'react';
import { useLoaderData } from 'react-router';
import SingleRoom from '../SingleRoom';

const Rooms = () => {
    const roomsData = useLoaderData();
    console.log(roomsData);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>All The Beautyful Rooms Are Here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7 w-11/12 mx-auto my-10'>
                {
                    roomsData.map(room=><SingleRoom key={room._id} room={room}></SingleRoom>)
                }
            </div>
        </div>
    );
};

export default Rooms;