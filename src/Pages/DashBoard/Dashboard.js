import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div  className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox"  className="drawer-toggle" />
            <div  className="drawer-content">
                <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div  className="drawer-side">
                <label htmlFor="my-drawer-2"  className="drawer-overlay"></label>
                <ul  className="menu w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard/'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;