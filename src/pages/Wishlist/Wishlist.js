import React, { useEffect, useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { useParams, useSearchParams } from 'react-router-dom';
import WishlistBox from './component/WishlistBox';
import './Wishlist.scss';
import { APIS } from '../../config';

const Wishlist = () => {
  const [productList, setProductList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wish, setWish] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const productsId = params.id;
  const subCategoryId = searchParams.get('subCategoryId');

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

  useEffect(() => {
    fetch(
      `http://10.58.52.248:8000/products?subCategoryId=${subCategoryId}&limit=3&offset=${productsId}`,
      { headers: { Authorization: localStorage.getItem('token') } }
    )
      .then(res => res.json())
      .then(data => {
        setWish(data.list);
      });
  }, [subCategoryId, productsId]);

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
              path={`${product.id}?subCategoryId=${product.sub_category_id}&offset=${product.id}&limit=3`}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Wishlist;
