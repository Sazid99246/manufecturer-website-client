import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='px-12'>
                    <h1 className="text-5xl font-bold">Welcome to Rainbow Computers</h1>
                    <p className="py-6">Your first ever chosen computer brand!!!</p>
                    <Link to='/login' className="btn btn-secondary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;