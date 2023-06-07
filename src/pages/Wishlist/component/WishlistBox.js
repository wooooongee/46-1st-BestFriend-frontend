import React from 'react';
import { BASE_URL } from '../../../config';
import './WishlistBox.scss';

const WishlistBox = ({ product, getWishlist }) => {
  const { image_url, name, price } = product;

  const handleDeleteBtn = () => {
    fetch(`${BASE_URL.likes}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId: product.id,
      }),
    }).then(res => {
      if (res.ok) {
        getWishlist();
      } else throw new Error('통신실패!');
    });
  };

  return (
    <div className="wishlist-box">
      <button className="img-box">
        <img src={image_url} alt="product-img" className="img" />
      </button>
      <div className="content">
        <p className="name">{name}</p>
        <button className="btn" onClick={handleDeleteBtn}>
          삭제
        </button>
      </div>
      <p className="price">{Number(price).toLocaleString('en')}원</p>
    </div>
  );
};

export default WishlistBox;
