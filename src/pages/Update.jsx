import React from 'react';
import { ImCross } from "react-icons/im";
const Update = ({ setShowmodal }) => {
    const handleUpdate =(e)=>{
        e.preventDefault();
        const checkIn = e.target.checkIn.value;
        const checkOut = e.target.checkOut.value;
       const updateDate = {
           checkIn,checkOut
       }
       console.log(updateDate)
    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">

                {/* Close Button */}
                <button
                    onClick={() => setShowmodal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    <ImCross />
                </button>

                {/* Modal Heading */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Your Stay Dates</h2>

                {/* Date Update Form */}
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                        <input
                            type="date"
                            name='checkIn'
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                        <input
                            type="date"
                            name='checkOut'
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>



        </div>
    );
};

export default Update;