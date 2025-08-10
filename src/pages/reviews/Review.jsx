import axios from 'axios';
import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const Review = ({ setShowReviewModal, _id }) => {
  console.log(_id)
  const navigate = useNavigate();
    const {user} = use(AuthContext)
    const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const handleReviewSubmit = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const reviewData = {
      bookingId: _id,
      rating: Number(rating),
      review,
      name,
      date: new Date().toISOString(),
    }
    axios.post('https://assignment-11-hotel-booking-server.vercel.app/reviewers',reviewData)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your review successfully submitted",
  showConfirmButton: false,
  timer: 1500
});
        }
        setShowReviewModal(false)
        navigate('/bookings')
        console.log(res.data)
      })
      .catch(error=>{
        console.log(error)
      })
  }
    return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-5 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Submit Your Review</h2>
        <form onSubmit={handleReviewSubmit} className="space-y-3">
            <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              readOnly 
              value={user.displayName || 'N/A'}
              name='name'
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Rating (1 to 5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Comment</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded mt-1"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Review;