import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ name, price, image_url, path }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={image_url}
        alt={name}
        onClick={() => navigate(`/product/${path}`)}
      />
      <div
        className="product-name"
        onClick={() => navigate(`/product/${path}`)}
      >
        {name}
      </div>
      <div className="product-price">{price}원</div>
    </div>
  );
};

export default ProductCard;
