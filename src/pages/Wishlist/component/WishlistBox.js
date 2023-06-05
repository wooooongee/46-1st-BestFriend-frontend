import React from 'react';
import './WishlistBox.scss';

const WishlistBox = ({ product }) => {
  return (
    <div className="wishlist-box">
      <button className="img-box">
        <img src={product.image_url} alt="product-img" className="img" />
      </button>
      <div className="content">
        <p className="name">{product.name}</p>
        <button className="btn" onClick={() => {}}>
          삭제
        </button>
      </div>
      <p className="price">{Number(product.price).toLocaleString('en')}원</p>
    </div>
  );
};

export default WishlistBox;
