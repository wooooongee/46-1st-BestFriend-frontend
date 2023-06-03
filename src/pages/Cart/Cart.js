import React, { useEffect, useState } from 'react';
import CartBox from './component/CartBox';
import './Cart.scss';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.117:3000/carts', {
  //     method: 'GET',
  //     headers: { Authorization: localStorage.getItem('token') },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCartList(data.carts);
  //     });
  // }, []);
  useEffect(() => {
    fetch('http://10.58.52.117:3000/carts', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .then(data => {
        setCartList(data.carts);
      })
      .catch(error => console.log(error));
  }, []);

  let calculation = cartList.map(product => product.price * product.quantity);
  let totalPrice = calculation.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  return (
    <div className="cart">
      <h1 className="cart-title">장바구니</h1>
      <div className="cart-container">
        <main className="cart-main">
          {/* {productList.map(product => {
            return (
              <CartBox
                key={product.id}
                product={product}
                setProductList={setProductList}
                id={product.id}
              />
            );
          })} */}
          {cartList.map(product => {
            return (
              <CartBox
                key={product.product_id}
                product={product}
                setCartList={setCartList}
                id={product.product_id}
              />
            );
          })}
        </main>
        <aside className="cart-aside">
          <h1 className="aside-title">주문금액</h1>
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
          <button
            className="btn"
            onClick={() => {
              cartList.length === 0
                ? setIsAlertOpen(true)
                : navigate('/checkout');
            }}
          >
            주문하기
          </button>
          {isAlertOpen && (
            <div className="alert-box">
              <p>장바구니가 비어있습니다.</p>
              <button
                className="alert-btn"
                onClick={() => {
                  setIsAlertOpen(false);
                }}
              >
                X
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Cart;
