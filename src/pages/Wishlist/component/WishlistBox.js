import React from 'react';
import './WishlistBox.scss';

const WishlistBox = ({ product, getWishlist }) => {
  const handleDeleteBtn = () => {
    fetch('http://10.58.52.185:8000/likes', {
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
        <img src={product.image_url} alt="product-img" className="img" />
      </button>
      <div className="content">
        <p className="name">{product.name}</p>
        <button
          className="btn"
          onClick={() => {
            handleDeleteBtn();
          }}
        >
          삭제
        </button>
      </div>
      <p className="price">{Number(product.price).toLocaleString('en')}원</p>
    </div>
  );
};

export default WishlistBox;
