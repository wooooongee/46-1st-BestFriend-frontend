import React, { useEffect, useState } from 'react';
import WishlistBox from './component/WishlistBox';
import './Wishlist.scss';

const Wishlist = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/wishList.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <main className="wishlist">
      <p className="title">위시리스트</p>
      <div className="wishlist-container">
        {productList.map(product => {
          return <WishlistBox key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};

export default Wishlist;
