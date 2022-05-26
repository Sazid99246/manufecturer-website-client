import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    let quantity;
    useEffect(() => {
        fetch(`https://safe-tor-48967.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    const [user] = useAuthState(auth)

    const onSubmit = (data) => {
        console.log(data);
        const order = {
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoneNumber: data.phoneNumber,
            userAddress: data.address,
            productId: product._id,
            productName: product.name,
            productImg: product.img,
            productQuantity: data.quantity,
            productPrice: product.price,
        }
        fetch('https://safe-tor-48967.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                toast('Product purchased successfully')
            })

        if (data.quantity > product.maxQuantity || data.quantity < product.minQuantity) {
            toast(`Sorry, You can't order more than ${product.maxQuantity}  less than ${product.minQuantity}`)
        }
    }
    return (
        <div className='mb-4'>
            <h1 className='text-3xl text-center mt-3'>You are going to buy {product.name}</h1>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.bigImg} className="rounded-lg" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <p className="py-6"><b>Description:</b> {product.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-bold'>Please provide your information here</h2>
                <div className='flex items-center justify-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                disabled
                                type="text"
                                className="input input-bordered"
                                value={user?.displayName}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                disabled
                                type="email"
                                className=" w-60 input input-bordered max-w-xs"
                                value={user?.email}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                className=" w-60 input input-bordered max-w-xs"
                                value={quantity}
                            />
                            {errors.quantity?.type === 'required' && <p className='text-red-500'>Quantity is required</p>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                {...register("address", { required: true })}
                                type="text"
                                className=" w-60 input input-bordered max-w-xs"
                            />
                            {errors.address?.type === 'required' && <p className='text-red-500'>Address is required</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                {...register("phoneNumber", { required: true })}
                                type="number"
                                className=" w-60 input input-bordered max-w-xs"
                            />
                            {errors.phoneNumber?.type === 'required' && <p className='text-red-500'>Phone number is required</p>}
                        </div>
                        <div className="form-control mt-2 w-full max-w-xs">
                            <input type="submit" className='btn btn-primary' value="Submit" />
                        </div>
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Purchase;