import React from 'react';
import { useLoaderData } from 'react-router';
import Booked from './Booked';



const RoomDetails = () => {
    const roomsData = useLoaderData()
     const {type,roomImage,description,price,features} = roomsData
    return (
        <div className='w-10/12 mx-auto flex justify-center gap-8'>
            <div className='w-[70%]'>
            <h2 className='text-6xl'>{type}</h2>
            <img src={roomImage} alt="" />
            <p>{description}</p>
        </div>
        <div>
            <div className='border border-gray-300 mt-12'>
             <p className='p-7 text-center font-bold text-indigo-950'>{type}</p>
             <div className='divider p-5'></div>
             <div className='flex gap-1 items-center px-4 py-7'>
                <p className='font-bold'>Price per Night:</p>
                <span className='font-bold text-4xl text-blue-400'>{price} Taka</span>
             </div>
        </div>
        <div className='mt-5 mb-5'>
            {/* <button className='w-full py-7 font-bold text-4xl text-white bg-cyan-500 btn'>Book Now</button> */}
            <Booked roomsData={roomsData}></Booked>
        </div>
        <div className='border border-gray-300 p-5'>
            <h3 className='text-3xl font-semibold'>All Facilities</h3>
            <div className='divider'></div>
            <ul className='space-y-2'>
                {
                    features.map((feature,index)=><li className='bg-gray-100 rounded-xl px-4 py-2 shadow-sm hover:bg-gray-200 transition' key={index}>{feature}</li>)
                }
            </ul>

        </div>
        </div>
        
        </div>
    );
};

export default RoomDetails;