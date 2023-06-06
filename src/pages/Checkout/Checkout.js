import React, { useEffect, useState } from 'react';
import CheckoutList from './CheckoutList';
import './Checkout.scss';

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({});
  const [productList, setProductList] = useState([]);
  const remainingPoint = parseInt(userInfo.remainingPoint);
  const totalprices = productList.reduce(
    (acc, cur) => acc + cur.prices * cur.count,
    0
  );

  useEffect(() => {
    fetch('/data/userInfo.json')
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  useEffect(() => {
    fetch('/data/productList.json')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <>
      <h1 className="checkout-title">결제 하기</h1>
      <main className="checkout">
        <article className="article-checkout">
          <section className="section-delivery-infomation">
            <h2 className="user-information-h2">배송 정보</h2>
            <div className="user-information-values">
              <span className="user-name-value">{userInfo.name}</span>
              <span className="user-address-value">{userInfo.address}</span>
              <span className="user-phonenumber-value">
                {userInfo.phoneNumber}
              </span>
            </div>
          </section>
          <section className="section-payment-point">
            <h2 className="remaining-point-h2">포인트로 결제하기</h2>
            <div className="remaining-point-value">
              잔여 포인트 :
              <span className="remaining-point-span">
                {remainingPoint.toLocaleString()} 원
              </span>
            </div>
          </section>
          <section className="section-order-list">
            <h2 className="order-list-h2">주문 내역</h2>
            <ul className="order-list-ul">
              <CheckoutList productList={productList} />
            </ul>
          </section>
        </article>
        <aside className="aside-checkout">
          <h2 className="checkout-h2">결제 금액</h2>
          <div className="product-prices">
            상품 금액 <span>{totalprices.toLocaleString()} 원</span>
          </div>
          <div className="delivery-fees">
            배송비 <span className="delivery-fees-value">무료</span>
          </div>
          <div className="total-prices">
            총 결제 금액
            <span className="total-prices-value">
              {totalprices.toLocaleString()} 원
            </span>
          </div>
          <button className="checkout-btn">결제 하기</button>
        </aside>
      </main>
    </>
  );
};

export default Checkout;
