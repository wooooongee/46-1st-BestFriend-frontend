import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <img
        className="logo"
        src="./images/Nav/gron-logo.png"
        alt="gron-logo"
        onClick={() => navigate('/')}
      />
      <ul className="menus">
        <li onClick={() => navigate('/plants')}>식물</li>
        <li onClick={() => navigate('/pots')}>화분</li>
        <li onClick={() => navigate('/tools')}>관리상품</li>
      </ul>
      <div className="search">
        <img
          className="search-icon"
          src="./images/Nav/search.png"
          alt="search-icon"
        />
        <input />
      </div>
      <div className="icons">
        <img className="icon" src="./images/Nav/like.png" alt="like-icon" />
        <img
          className="icon"
          src="./images/Nav/cart.png"
          alt="cart-icon"
          onClick={() => navigate('/cart')}
        />
        <button
          className="login-btn"
          type="button"
          onClick={() => navigate('/login')}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Nav;
