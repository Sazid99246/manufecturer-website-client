import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'
import LoadingButton from '../Shared/LoadingButton/LoadingButton';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let signUpError
    if (user || gUser) {
        signOut(auth);
        navigate('/login');
    }
    if (loading || gLoading || updating) {
        return <LoadingButton />
    }
    if (error || gError || updateError) {
        signUpError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }
    return (
        <div className='max-h-screen flex justify-center items-center'>
            <div className="card w-96 border-2 text-center bg-base-100">
                <div className="card-body">
                    <h2 className='text-2xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name",
                                    { required: true }
                                )}
                                type="name"
                                placeholder="Enter your name"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.name?.type === 'required' && "Name is required"}
                                </span>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                                    }
                                )}
                            />
                            <label className="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.email?.type === 'required' && "Email is required"}
                                    {errors.email?.type === 'pattern' && "Enter a valid email"}
                                </span>
                            </label>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6
                                    }
                                )}
                            />
                            <label className="label">
                                <span className='label-text-alt text-red-500'>
                                    {errors.password?.type === 'required' && "Password is required"}
                                    {errors.password?.type === 'minLength' && "Password must be at least 6 characters or longer"}
                                </span>
                            </label>
                        </div>
                        {signUpError}
                        <div className="form-control">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="form-control">
                            <p>Already a member?
                                <Link to='/login' className="btn btn-link">Login now</Link>
                            </p>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn rounded-full btn-outline btn-primary'><FcGoogle className='mr-2' /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;