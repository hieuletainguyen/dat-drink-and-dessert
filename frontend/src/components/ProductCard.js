import React from 'react';
import '../styles/ProductCard.css';
import { useCart } from '../context/CartContext';

function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <button className="buy-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 