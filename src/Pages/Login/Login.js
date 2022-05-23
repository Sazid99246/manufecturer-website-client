import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import LoadingButton from '../Shared/LoadingButton/LoadingButton';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <LoadingButton />
    }
    let loginError;
    if (error || gError) {
        loginError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <div class="card w-96 border-2 bg-base-100">
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
                        </div>
                        {loginError}
                        <div class="form-control">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="form-control">
                            <p>Don't have an account?
                                <Link to='/signup' class="btn btn-link">Register now</Link>
                            </p>
                        </div>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn rounded-full btn-outline btn-primary'><FcGoogle />    Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;