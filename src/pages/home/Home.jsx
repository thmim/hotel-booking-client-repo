import React from 'react';
import Banner from '../Banner';
import Map from '../Map';
import AllReviews from '../AllReviews';
import TopRooms from '../allRooms/TopRooms';
import WhyUs from '../WhyUs';
import HowItWorks from '../HowItWorks';
import PromotionalModal from '../PromotionalModal';
import { Helmet } from 'react-helmet-async';
import Facilities from '../Facilities';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Hotel Booking |Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='bg-gray-50'>
                <TopRooms></TopRooms>
            <Map></Map>
            <AllReviews></AllReviews>
            <WhyUs></WhyUs>
            <HowItWorks></HowItWorks>
            <Facilities></Facilities>
            <PromotionalModal></PromotionalModal>
            </div>
        </div>
    );
};

export default Home;