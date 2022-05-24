import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, minQuantity, maxQuantity, price } = product;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>{description}</p>
                <p><b>Products left:</b> {maxQuantity}</p>
                <p>You have to order at least {minQuantity} products</p>
                <p>Price: {price}</p>
                <button onClick={()=>navigateToServiceDetail(_id)} className="btn btn-secondary">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;