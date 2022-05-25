import React from 'react';
import notFound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;