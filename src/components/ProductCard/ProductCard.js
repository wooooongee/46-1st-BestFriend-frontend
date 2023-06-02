import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ name, price, image_url }) => {
  return (
    <div className="product-card" key={name}>
      <img className="product-image" src={image_url} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">{price}원</div>
    </div>
  );
};

export default ProductCard;
