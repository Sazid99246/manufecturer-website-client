import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safe-tor-48967.herokuapp.com/order?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email])
    const handleProductDelete = id =>{
        const proceed =window.confirm("Are you sure you want to delete?")
        if(proceed){
            fetch(`https://safe-tor-48967.herokuapp.com/order/${id}`, {
                method: "DELETE",  
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    const remaining = myOrders.filter(myOrder=> myOrder._id !== id)
                    setMyOrders(remaining)
                }
            })
        }
    }
    return (
        <div>
            <h2 className='text-3xl'>My Orders: {myOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td><img style={{ height: "100px", width: "100px" }} src={order.productImg} alt="" /></td>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.productPrice}</td>
                                <td><button className='btn btn-success'>Pay</button></td>
                                <td><button onClick={()=>handleProductDelete(order._id)} className='btn btn-error'>Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;