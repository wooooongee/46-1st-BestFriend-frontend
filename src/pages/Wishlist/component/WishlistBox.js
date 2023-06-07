import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WishlistBox.scss';

const WishlistBox = ({ product, getWishlist, path }) => {
  const { image_url, name, price } = product;
  const navigate = useNavigate();

  const handleDeleteBtn = () => {
    fetch('http://10.58.52.248:8000/likes', {
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
      }
    });
  };
  return (
    <div className="wishlist-box">
      <button
        className="img-box"
        onClick={() => {
          navigate(`/product/${path}`);
        }}
      >
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
