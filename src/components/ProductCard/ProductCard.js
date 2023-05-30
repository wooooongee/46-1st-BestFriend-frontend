import React from 'react';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://github.com/pmpaca/test/blob/main/plant-15.jpg?raw=true"
      />
      <div className="product-name">쉬베리아나</div>
      <div className="product-price">10,000원</div>
    </div>
  );
};

export default ProductCard;
