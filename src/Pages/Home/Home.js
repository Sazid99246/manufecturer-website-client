import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummery />
            <Reviews />
        </div>
    );
};

export default Home;