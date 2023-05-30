import React from 'react';
import './Checkout.scss';
const Checkout = () => {
  return (
    <main className="main-checkout">
      <article className="article-checkout">
        <h1 className="checkout-article-h1">결제 하기</h1>
        <section className="section-delivery-infomation">
          <h2 className="user-information-h2">배송 정보</h2>
          <div className="user-information-values">
            <span className="user-name-value">홍길동</span>
            <span className="user-address-value">
              서울특별시 강남구 대치동 위워크 선릉 2호점 10층
            </span>
            <span className="user-phonenumber-value">010-0000-0000</span>
          </div>
        </section>
        <section className="section-payment-point">
          <h2 className="remaining-point-h2">포인트로 결제하기</h2>
          <div className="remaining-point-value">
            잔여 포인트 :
            <span className="remaining-point-span">500,000,000원</span>
          </div>
        </section>
        <section className="section-order-list">
          <h2 className="order-list-h2">주문 내역</h2>
          <ul className="order-list-ul">
            <li className="order-list-li">
              <img
                className="order-list-img"
                src="/images/Login/gron-logo.png"
                alt="상품리스트이미지"
              />
              <div className="order-list-spans">
                <span className="order-list-name">몬스테라</span>
                <span className="order-list-count">수량 : 2개</span>
                <span className="order-list-totalprices">
                  총 가격 : 20,000원
                </span>
              </div>
            </li>
            <li className="order-list-li">
              <img
                className="order-list-img"
                src="/images/Login/gron-logo.png"
                alt="상품리스트이미지"
              />
              <div className="order-list-spans">
                <span className="order-list-name">몬스테라</span>
                <span className="order-list-count">수량 : 2개</span>
                <span className="order-list-totalprices">
                  총 가격 : 20,000원
                </span>
              </div>
            </li>
          </ul>
        </section>
      </article>
      <aside className="aside-checkout">
        <h2 className="checkout-h2">결제 금액</h2>
        <div className="product-prices">
          상품 금액 <span className="product-prices-value">40,000원</span>
        </div>
        <div className="delivery-fees">
          배송비 <span className="delivery-fees-value">무료</span>
        </div>
        <div className="total-prices">
          총 결제 금액<span className="total-prices-value">40,000원</span>
        </div>
        <button className="checkout-btn">결제 하기</button>
      </aside>
    </main>
  );
};

export default Checkout;
