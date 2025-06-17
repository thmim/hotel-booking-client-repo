import React, { Suspense, use } from 'react';
import MyBookingsList from './MyBookingsList';
import { AuthContext } from '../../context/AuthContext/AuthContext';
const myBookingPromise = email =>{
    return fetch(`http://localhost:5000/visitors?email=${email}`)
    .then(res=>res.json())
}
const MyBookings = () => {
    const {user}=use(AuthContext)
    return (
        <div>
            <Suspense fallback={'Application in loading.....'}>
                <MyBookingsList myBookingPromise={myBookingPromise(user.email)}></MyBookingsList>
            </Suspense>
        </div>
    );
};

export default MyBookings;

