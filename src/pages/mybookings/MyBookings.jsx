import React, { Suspense, use } from 'react';
import MyBookingsList from './MyBookingsList';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const myBookingPromise = async(email) =>{
    return await fetch(`https://assignment-11-hotel-booking-server.vercel.app/visitors?email=${email}`)
    .then(res=>res.json())
}
const MyBookings = () => {
    
    const {user}=use(AuthContext)
    return (
        <div>
            <Suspense fallback={'Application in loading.....'}>
                {
                    user && <MyBookingsList myBookingPromise={myBookingPromise(user?.email)}></MyBookingsList>
                }
            </Suspense>
        </div>
    );
};

export default MyBookings;

