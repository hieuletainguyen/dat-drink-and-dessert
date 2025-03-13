import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <button className="buy-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard; 