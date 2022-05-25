import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }
  const menuItems = (<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/purchase'>Purchase</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
    {
      user ?
        <>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          <li className='mr-4 text-center mt-3'>{user?.displayName}</li>
          <li><button onClick={handleSignOut} className='btn btn-outline btn-secondary'>Sign Out</button></li>
        </>
        :
        <li><NavLink to='/login'>Login</NavLink></li>
    }

  </>)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a href='/' className="btn btn-ghost normal-case text-xl">Rainbow Computers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Header;