import React from 'react';
import Banner from '../Banner';
import Map from '../Map';
import AllReviews from '../AllReviews';
import TopRooms from '../allRooms/TopRooms';
import WhyUs from '../WhyUs';
import HowItWorks from '../HowItWorks';
import PromotionalModal from '../PromotionalModal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRooms></TopRooms>
            <Map></Map>
            <AllReviews></AllReviews>
            <WhyUs></WhyUs>
            <HowItWorks></HowItWorks>
            <PromotionalModal></PromotionalModal>
        </div>
    );
};

export default Home;