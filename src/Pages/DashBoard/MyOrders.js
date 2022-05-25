import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])
    return (
        <div>
            <h2 className='text-3xl'>My Orders: {myOrders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td><img style={{height: "100px", width: "100px"}} src={order.productImg} alt="" /></td>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td><button className='btn btn-primary'>Payment</button></td>
                                <td><button className='btn btn-primary'>Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;