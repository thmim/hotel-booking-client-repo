import React, { Suspense, use } from 'react';
import MyBookingsList from './MyBookingsList';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const myBookingPromise = async(email) =>{
    return await fetch(`http://localhost:5000/visitors?email=${email}`)
    .then(res=>res.json())
}
const MyBookings = () => {
    
    const {user}=use(AuthContext)
    return (
        <div className='pt-14'>
            <Suspense fallback={'Application in loading.....'}>
                {
                    user && <MyBookingsList myBookingPromise={myBookingPromise(user?.email)}></MyBookingsList>
                }
            </Suspense>
        </div>
    );
};

export default MyBookings;

