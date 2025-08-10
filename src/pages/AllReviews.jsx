import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/rooms-reviews')
    .then(response => {
      setReviews(response.data);
    })
    .catch(error => {
      console.log(error)
    });
}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        What Our Guests Are Saying
      </h2>

      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review._id} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-10 rounded-3xl shadow-lg">
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6 relative pl-8 before:content-['❝'] before:text-3xl before:text-blue-400 before:absolute before:left-0 before:top-0">
              {review.review}
            </p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center uppercase shadow-sm">
                  {review.name?.charAt(0)}
                </div>
                <div className="text-gray-800 font-semibold text-lg">{review.name}</div>
              </div>
              <div className="text-yellow-400 text-xl">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllReviews;