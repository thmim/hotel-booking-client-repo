import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import room1 from '../assets/Room-1.jpg'
import room2 from '../assets/Room-2.jpg'
import room3 from '../assets/Room-3.jpg'
import room4 from '../assets/Room-4.jpg'
import banner from '../assets/room-6878004_1280.jpg'
import { Link } from 'react-router';
const Banner = () => {
     return (
    <>
    
      <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation,Pagination,Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${banner})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      {/* Content */}
      <div className="text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Your Perfect Stay Awaits — Find It on Hotella Today
        </h2>
        <p className="text-lg md:text-xl mb-6">
          From luxury resorts to cozy budget rooms — explore thousands of hotels worldwide. Your next adventure starts here.
        </p>
        <Link to="/rooms"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Hotels
        </button></Link>
      </div>
    </div>
  </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${room1})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      {/* Content */}
      <div className="text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Comfort, Book with Confidence — Only at Hotella
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Find the best hotels, handpicked for your perfect stay. Book now with exclusive discounts and flexible options.
        </p>
        <Link to="/rooms"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Hotels
        </button></Link>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         <div
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${room2})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      {/* Content */}
      <div className="text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
         Exclusive Hotel Deals for Every Journey — Start Booking Now
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Plan your dream vacation or a quick weekend getaway. Unbeatable deals and seamless booking at Hotella.
        </p>
        <Link to="/rooms"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Hotels
        </button></Link>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         <div
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${room3})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      {/* Content */}
      <div className="text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
         Luxury, Budget, Adventure — We’ve Got The Stay You Need
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Choose from a wide range of accommodations and enjoy personalized recommendations. Hotella has it all.
        </p>
        <Link to="/rooms"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Hotels
        </button></Link>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         <div
    className="relative bg-cover bg-center h-screen"
    style={{
      backgroundImage: `url(${room4})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      {/* Content */}
      <div className="text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
         Book. Relax. Repeat. Hotels Made Easy with Hotella
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Skip the hassle. Find verified hotels, trusted reviews, and the best prices — all in one place.
        </p>
        <Link to="/rooms"><button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Hotels
        </button></Link>
      </div>
    </div>
  </div>

        </SwiperSlide>
        
      </Swiper>
      
    </>
  );
};

export default Banner;