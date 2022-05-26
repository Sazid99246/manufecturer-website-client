import React from 'react';
import { useQuery } from 'react-query';
import LoadingButton from '../../Shared/LoadingButton/LoadingButton';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery('products', () =>
        fetch('https://safe-tor-48967.herokuapp.com/product')
            .then(res => res.json())
    )
    if (isLoading) {
        return <LoadingButton />
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Our Products</h2>
            <div className='flex items-center justify-center'>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;