import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    
    return (
        <div>
            <h2 className='text-3xl text-center'>My Profile</h2>
            <p className='text-xl'><span className='font-bold'>Name: </span>{user?.displayName}</p>
            <p className='text-xl'><span className='font-bold'>Email: </span>{user.email}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default MyProfile;