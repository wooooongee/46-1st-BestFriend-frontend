import React, { useEffect, useState } from 'react';
import CheckoutList from './CheckoutList';
import CheckoutModal from './CheckoutModal';
import CheckoutToast from './CheckoutToast';
import { APIS } from '../../config';
import './Checkout.scss';

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    phone: '',
    point: '',
  });
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState({
    message: '',
    orderNumber: '',
    changePoint: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const { name, address, phone, point } = userInfo;
  const { orderNumber, changePoint } = orderList;
  const postPrice = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  useEffect(() => {
    fetch(`${APIS.users}/order`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]));
  }, [setUserInfo]);

  const handleCheckOut = () => {
    if (point < postPrice) {
      setIsToastOpen(true);
      return;
    }
    fetch(`${APIS.orders}`, {
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
          setOrderList(data);
          setIsModalOpen(true);
          return;
        }
      });
  };

  useEffect(() => {
    fetch(`${APIS.carts}`, {
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
  }, []);

  return (
    <>
      <main className="checkout">
        <article className="article-checkout">
          <h1 className="checkout-article-h1">결제하기</h1>
          <section className="section-delivery-infomation">
            <h2 className="user-information-h2">배송정보</h2>
            <div className="user-information-values">
              <span className="user-name-value">주문자 : {name}</span>
              <span className="user-address-value">주소 : {address}</span>
              <span className="user-phone-value">
                연락처 :{' '}
                {phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              </span>
            </div>
          </section>
          <section className="section-payment-point">
            <h2 className="totalsum-point-h2">포인트로 결제하기</h2>
            <div className="totalsum-point-value">
              잔여 포인트 :{' '}
              <span className="totalsum-point-span">
                {parseInt(point).toLocaleString()}원
              </span>
            </div>
          </section>
          <section className="section-order-list">
            <h2 className="order-list-h2">주문내역</h2>
            <ul className="order-list-ul">
              <CheckoutList productList={productList} />
            </ul>
          </section>
        </article>
        <aside className="aside-checkout">
          <h2 className="checkout-h2">결제금액</h2>
          <div className="product-price">
            상품금액 <span>{postPrice.toLocaleString()} 원</span>
          </div>
          <div className="delivery-fees">
            배송비 <span className="delivery-fees-value">무료</span>
          </div>
          <div className="total-price">
            총 결제금액
            <span className="total-price-value">
              {postPrice.toLocaleString()} 원
            </span>
          </div>
          <button className="checkout-btn" onClick={handleCheckOut}>
            결제하기
          </button>
          {isToastOpen && (
            <CheckoutToast
              isToastOpen={isToastOpen}
              setIsToastOpen={setIsToastOpen}
            />
          )}
        </aside>
      </main>
      {isModalOpen && (
        <CheckoutModal
          orderNumber={orderNumber}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          changePoint={changePoint}
        />
      )}
    </>
  );
};

export default Checkout;
