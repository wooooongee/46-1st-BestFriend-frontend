import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="title">장바구니</h1>
      <div className="cart-container">
        <main className="cart-main">
          <CartBox />
          <CartBox />
        </main>
        <aside className="cart-aside">
          <h1 className="title">주문금액</h1>
          <div className="price">
            <div className="price-sort">
              <p>상품금액</p>
              <p>40,000원</p>
            </div>
            <div className="price-sort">
              <p>배송비</p>
              <p>무료</p>
            </div>
          </div>
          <div className="total-price">
            <div className="price-sort">
              <p>총 결제금액</p>
              <p>40,000원</p>
            </div>
          </div>
          <button className="btn">주문하기</button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;

const CartBox = () => {
  return (
    <section className="cart-box">
      <div className="cart-img">
        <img
          src="/images/ProductDetail/plant-21.jpg"
          alt="product-img"
          className="img"
        />
      </div>
      <div className="cart-content">
        <div className="content">
          <h1 className="title">몬스테라</h1>
          <p>수량 : 2개</p>
          <button className="btn">삭제</button>
        </div>
        <div className="total">
          <p>총 가격:20,000원</p>
        </div>
      </div>
    </section>
  );
};
