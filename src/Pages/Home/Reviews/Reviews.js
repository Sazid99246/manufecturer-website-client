import React from 'react';
import { useQuery } from 'react-query';
import LoadingButton from '../../Shared/LoadingButton/LoadingButton';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/review')
            .then(res => res.json())
    )
    if (isLoading) {
        return <LoadingButton />
    }
    return (
        <div className='my-9'>
            <h2 className='text-center text-2xl'>What our customers say</h2>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;