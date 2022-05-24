import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    const [user] = useAuthState(auth)
    return (
        <div className='mb-4'>
            <h1 className='text-3xl text-center mt-3'>You are going to buy {product.name}</h1>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.bigImg} class="rounded-lg" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{product.name}</h1>
                        <p class="py-6"><b>Description:</b> {product.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-bold'>Please provide your information here</h2>
                <div className='flex items-center justify-center'>
                    <form>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input disabled type="text" class="w-60 input input-bordered max-w-xs" value={user?.displayName} />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input disabled type="email" class=" w-60 input input-bordered max-w-xs" value={user?.email} />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text" class=" w-60 input input-bordered max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number</span>
                            </label>
                            <input type="number" class=" w-60 input input-bordered max-w-xs" />
                        </div>
                        <div class="form-control mt-2 w-full max-w-xs">
                            <input type="submt" className='btn btn-primary' value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;