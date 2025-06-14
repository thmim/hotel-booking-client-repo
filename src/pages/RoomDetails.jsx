import React from 'react';
import { useLoaderData } from 'react-router';



const RoomDetails = () => {
    const roomsData = useLoaderData()
     const {hotelName,roomImage,description,pricePerNight,amenities} = roomsData
    return (
        <div className='w-10/12 mx-auto flex justify-center gap-8'>
            <div className='w-[70%]'>
            <h2 className='text-6xl'>{hotelName}</h2>
            <img src={roomImage} alt="" />
            <p>{description}</p>
        </div>
        <div>
            <div className='border border-gray-300 mt-12'>
             <p className='p-7 text-center font-bold text-indigo-950'>{hotelName}</p>
             <div className='divider p-5'></div>
             <p className='px-4 py-7'>Price per Night: <span className='font-bold text-4xl text-blue-400'>{pricePerNight} Taka</span></p>
        </div>
        <div className='mt-5 mb-5'>
            <button className='w-full py-7 font-bold text-4xl text-white bg-cyan-500 btn'>Book Now</button>
        </div>
        <div className='border border-gray-300 p-5'>
            <h3 className='text-3xl font-semibold'>All Facilities</h3>
            <div className='divider'></div>
            <ul className=''>
                {
                    amenities.map((aminity,index)=><li className='doted' key={index}>{aminity}</li>)
                }
            </ul>

        </div>
        </div>
        
        </div>
    );
};

export default RoomDetails;