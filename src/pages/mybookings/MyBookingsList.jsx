import React, { use } from 'react';
import Table from './Table';

const MyBookingsList = ({myBookingPromise}) => {
    const bookings = use(myBookingPromise)
    return (
        <div className="max-w-7xl mx-auto m-10 p-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-emerald-500">My Bookings List</h1>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
  <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
    {/* head */}
    <thead className="bg-emerald-400 text-white">
      <tr>
        <th className="px-4 py-3 text-left">#</th>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-4 py-3 text-left">Check In</th>
        <th className="px-4 py-3 text-left">Check Out</th>
        {/* <th className="px-4 py-3 text-left">Price</th> */}
        <th className="px-4 py-3 text-center">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      
      {
        bookings.map((booking,index)=><Table key={booking._id} booking={booking} index={index}></Table>)
      }
     
    </tbody>
    
  </table>
  </div>
</div>
    );
};

export default MyBookingsList;