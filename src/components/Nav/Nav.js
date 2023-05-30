import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <img className="logo" src="./images/Nav/gron-logo.png" />
      <ul className="menus">
        <li onClick={() => navigate('/productlist')}>식물</li>
        <li onClick={() => navigate('/productlist')}>화분</li>
        <li onClick={() => navigate('/productlist')}>관리상품</li>
      </ul>
      <div className="icons">
        <img className="icon" src="./images/Nav/like.png" alt="like-icon" />
        <img className="icon" src="./images/Nav/cart.png" alt="cart-icon" />
        <button className="login-btn" type="button">
          로그인
        </button>
      </div>
    </div>
  );
};

export default Nav;
