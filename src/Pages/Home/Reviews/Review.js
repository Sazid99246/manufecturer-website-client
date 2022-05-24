import React from 'react';

const Review = ({ review }) => {
    const { name, img, description } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='flex justify-between mx-4 mt-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
            </div>
            <div className="card-body">
                {description}
            </div>
        </div>
    );
};

export default Review;