import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummery />
        </div>
    );
};

export default Home;