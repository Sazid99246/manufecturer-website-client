import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
    };
    let signUpError
    if(user){
        signOut(auth);
        navigate('/login');
    }
    if(loading){
        return <button class="btn loading">Loading</button>
    }
    if(error){
        signUpError = <p className='text-red-500'>{error?.message}</p>
    }
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <div class="card w-96 shadow-2xl text-center bg-base-100">
                <div class="card-body">
                    <h2 className='text-2xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register("name",
                                    { required: true }
                                )}
                                type="name"
                                placeholder="Enter your name"
                                class="input input-bordered"
                            />
                            <label class="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.name?.type === 'required' && "Name is required"}
                                </span>
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="input input-bordered"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                    }
                                )}
                            />
                            <label class="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.email?.type === 'required' && "Email is required"}
                                    {errors.email?.type === 'pattern' && "Enter a valid email"}
                                </span>
                            </label>

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                class="input input-bordered"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6
                                    }
                                )}
                            />
                            <label class="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.password?.type === 'required' && "Password is required"}
                                    {errors.password?.type === 'minLength' && "Password must be at least 6 characters or longer"}
                                </span>
                            </label>
                            <label class="label">
                                <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {signUpError}
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Sign Up</button>
                        </div>
                        <div class="form-control mt-6">
                            <p>Already a member?
                                <Link to='/login' class="btn btn-link">Login now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;