import React from 'react';
import { useState } from 'react';
import Update from '../Update';
// import { Link, useLoaderData } from 'react-router';

const Table = ({booking,index}) => {
    // const data = useLoaderData()
    //             console.log(data)  
    const [showModal,setShowmodal] = useState(false)
    const {name,photo,phone,checkInDate,checkOutDate,_id} = booking
    
    return (
        <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td className="px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-8 w-8">
                <img
                  src={photo}
                  alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td className="px-4 py-3">
          {checkInDate}
        </td>
        <td className="px-4 py-3">{checkOutDate}</td>
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
        <td className="px-4 py-3 text-center space-x-1 space-y-1">
              <button  onClick={() => setShowmodal(true)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">Update Date</button>
              {showModal && (<Update setShowmodal={setShowmodal} _id={_id}></Update>)}
              
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">Cancel Booking</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">Review</button>
            </td>
      </tr>
    );
};

export default Table;