import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, minQuantity, maxQuantity, price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>{description}</p>
                <p><b>Products left:</b> {maxQuantity}</p>
                <p>You have to order at least {minQuantity} products</p>
                <p>Price: {price}</p>
                <button className="btn btn-secondary">Buy Now</button>
            </div>
        </div>
    );
};

export default Product;