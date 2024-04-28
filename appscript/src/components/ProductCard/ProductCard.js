import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  const {title, price, category, image, rating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>Rating: {rating.rate} ({rating.count} reviews)</p>
    </div>
  );
};

export default ProductCard;