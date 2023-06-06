import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutList from './CheckoutList';
import './Checkout.scss';

const Checkout = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [productList, setProductList] = useState([]);

  const { name, address, phone, point } = userInfo;

  const postPrice = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  useEffect(() => {
    fetch('http://10.58.52.185:3000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]));
  }, []);

  const handleCheckOut = () => {
    fetch('http://10.58.52.185:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        totalPrice: postPrice,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'ORDER_COMPLETED') {
          //토스트, navigate
          navigate('/');
          return;
        }
      });
  };

  useEffect(() => {
    fetch('http://10.58.52.185:3000/carts', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'NEED_ACCESS_TOKEN') {
          console.log('로그인이 필요합니다');
          return;
        }
        setProductList(data.carts);
      });
  }, []); //카트 받아오기

  return (
    <main className="checkout">
      <article className="article-checkout">
        <h1 className="checkout-article-h1">결제 하기</h1>
        <section className="section-delivery-infomation">
          <h2 className="user-information-h2">배송 정보</h2>
          <div className="user-information-values">
            <span className="user-name-value">{name}</span>
            <span className="user-address-value">{address}</span>
            <span className="user-phone-value">{phone}</span>
          </div>
        </section>
        <section className="section-payment-point">
          <h2 className="totalSum-point-h2">포인트로 결제하기</h2>
          <div className="totalSum-point-value">
            잔여 포인트 :<span className="totalSum-point-span">{point} 원</span>
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
        <div className="product-price">
          상품 금액 <span>{postPrice.toLocaleString()} 원</span>
        </div>
        <div className="delivery-fees">
          배송비 <span className="delivery-fees-value">무료</span>
        </div>
        <div className="total-price">
          총 결제 금액
          <span className="total-price-value">
            {postPrice.toLocaleString()} 원
          </span>
        </div>
        <button className="checkout-btn" onClick={handleCheckOut}>
          결제 하기
        </button>
      </aside>
    </main>
  );
};

export default Checkout;
