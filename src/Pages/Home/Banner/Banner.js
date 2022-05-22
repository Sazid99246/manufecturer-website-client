import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='px-12'>
                    <h1 class="text-5xl font-bold">Welcome to Rainbow Computers</h1>
                    <p class="py-6">Your first ever chosen computer brand!!!</p>
                    <Link to='/login' class="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;