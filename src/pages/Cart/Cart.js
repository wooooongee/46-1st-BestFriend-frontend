import React, { useEffect, useState } from 'react';
import CartBox from './component/CartBox';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  let calculation = productList.map(
    product => product.price * product.quantity
  );
  let totalPrice = calculation.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  return (
    <div className="cart">
      <h1 className="title">장바구니</h1>
      <div className="cart-container">
        <main className="cart-main">
          {productList.map(product => {
            return (
              <CartBox
                key={product.id}
                product={product}
                setProductList={setProductList}
                id={product.id}
              />
            );
          })}
        </main>
        <aside className="cart-aside">
          <h1 className="title">주문금액</h1>
          <div className="price">
            <div className="price-sort">
              <p>상품금액</p>
              <p>{Number(totalPrice).toLocaleString('en')}원</p>
            </div>
            <div className="price-sort">
              <p>배송비</p>
              <p>무료</p>
            </div>
          </div>
          <div className="total-price">
            <div className="price-sort">
              <p>총 결제금액</p>
              <p>{Number(totalPrice).toLocaleString('en')}원</p>
            </div>
          </div>
          <button className="btn">주문하기</button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
