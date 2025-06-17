import React, { use } from 'react';
import Table from './Table';

const MyBookingsList = ({myBookingPromise}) => {
    const bookings = use(myBookingPromise)
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        bookings.map(booking=><Table key={booking._id} booking={booking}></Table>)
      }
     
    </tbody>
    
  </table>
</div>
    );
};

export default MyBookingsList;