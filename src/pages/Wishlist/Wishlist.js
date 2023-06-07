import React, { useEffect, useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import WishlistBox from './component/WishlistBox';
import './Wishlist.scss';
import { APIS } from '../../config';

const Wishlist = () => {
  const [productList, setProductList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('/data/wishList.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const getWishlist = () => {
    fetch(`${APIS.likes}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else throw new Error('통신실패');
      })
      .then(data => {
        setWishlist(data.Like);
      });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <main className="wishlist">
      <p className="title">위시리스트</p>
      <div className="wishlist-container">
        {wishlist.length === 0 && (
          <div className="warning-box">
            <div>
              <AiFillWarning className="icon" />
              <p className="warning-content">위시리스트가 비어 있습니다.</p>
            </div>
          </div>
        )}
        {/* ToDo : 추후 mock data 통신 
        {productList.map(product => {
          return <WishlistBox key={product.id} product={product} />;
        })} */}
        {wishlist.map(product => {
          return (
            <WishlistBox
              key={product.id}
              product={product}
              getWishlist={getWishlist}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Wishlist;
