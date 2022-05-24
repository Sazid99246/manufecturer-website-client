import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const BusinessSummery = () => {
    return (
        <div className='my-9'>
            <h2 className='text-center text-2xl font-bold'>Business Summary</h2>
            <br />
            <div className='flex items-center justify-center'>
                <div className="stats stats-vertical bg-gray-200 lg:stats-horizontal shadow-lg gap-4">
                    <div className="stat">
                        <div className="stat-value">31K</div>
                        <div className="stat-title">Computers sold</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value">20k</div>
                        <div className="stat-title">Reviews</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value flex items-center">4.5 <AiFillStar className='text-xl text-orange-400' /> </div>
                        <div className="stat-title">Ratings</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;