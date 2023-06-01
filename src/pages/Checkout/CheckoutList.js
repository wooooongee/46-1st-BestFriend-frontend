import React from 'react';
import './CheckoutList.scss';

const CheckoutList = ({ mockDataList }) => {
  return (
    <>
      {mockDataList.map(list => (
        <li className="order-list-li" key={list.id}>
          <img
            className="order-list-img"
            src="/images/Login/gron-logo.png"
            alt="상품리스트이미지"
          />
          <div className="order-list-spans">
            <span className="order-list-name">{list.name}</span>
            <span className="order-list-count">수량 : {list.count}개</span>
            <span className="order-list-totalprices">
              총 가격 : {(list.prices * list.count).toLocaleString()} 원
            </span>
          </div>
        </li>
      ))}
    </>
  );
};

export default CheckoutList;
