import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <div class="card w-96 shadow-2xl bg-base-100">
                <div class="card-body">
                    <h2 className='text-2xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                    }
                                )}
                                type="email"
                                placeholder="Enter your email"
                                class="input input-bordered"
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
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6
                                    }
                                )}
                                type="password"
                                placeholder="Enter your password"
                                class="input input-bordered"
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
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="form-control mt-6">
                            <p>Don't have an account?
                                <Link to='/signup' class="btn btn-link">Register now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;