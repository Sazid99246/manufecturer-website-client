import React from 'react';

const Review = ({ review }) => {
    const { name, img, description } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div className='flex justify-between mx-4 mt-3'>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
                <h2 class="card-title">{name}</h2>
            </div>
            <div class="card-body">
                {description}
            </div>
        </div>
    );
};

export default Review;