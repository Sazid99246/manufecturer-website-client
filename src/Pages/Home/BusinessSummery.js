import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const BusinessSummery = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Business Summary</h2>
            <br />
            <div className='flex items-center justify-center'>
                <div class="stats stats-vertical bg-gray-200 lg:stats-horizontal shadow-lg gap-4">
                    <div class="stat">
                        <div class="stat-value">31K</div>
                        <div class="stat-title">Computers sold</div>
                    </div>

                    <div class="stat">
                        <div class="stat-value">20k</div>
                        <div class="stat-title">Reviews</div>
                    </div>

                    <div class="stat">
                        <div class="stat-value flex items-center">4.5 <AiFillStar className='text-xl' /> </div>
                        <div class="stat-title">Ratings</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;