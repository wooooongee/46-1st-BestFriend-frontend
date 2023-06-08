import React from 'react';
import './CheckoutList.scss';

const CheckoutList = ({ productList }) => {
  return (
    <>
      {productList.map(list => (
        <li className="order-list-li" key={list.id}>
          <img
            className="order-list-img"
            src={list.image_url}
            alt="상품리스트이미지"
          />
          <div className="order-list-spans">
            <span className="order-list-name">{list.name}</span>
            <span className="order-list-count">수량 : {list.quantity}개</span>
            <span className="order-list-totalprices">
              총 가격 :{(parseInt(list.price) * list.quantity).toLocaleString()}
              원
            </span>
          </div>
        </li>
      ))}
    </>
  );
};

export default CheckoutList;
