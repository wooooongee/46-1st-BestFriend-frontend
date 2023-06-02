import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_CATEGORIES } from '../Category/Category';
import Dropdown from '../Dropdown/Dropdown';
import './Nav.scss';

const NAV_MENU = Object.values(MAIN_CATEGORIES);

const Nav = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="nav">
      <nav className="navbar">
        <img
          className="logo"
          src="/images/Nav/gron-logo.png"
          alt="gron-logo"
          onClick={() => navigate('/')}
        />
        <ul className="menus">
          {NAV_MENU.map(({ title }) => {
            return (
              <li
                className="menu"
                key={title}
                onMouseOver={() => {
                  setIsMenuOpen(true);
                }}
              >
                {title}
              </li>
            );
          })}
          {isMenuOpen && <Dropdown setIsMenuOpen={setIsMenuOpen} />}
        </ul>
        <div className="search">
          <img
            className="search-icon"
            src="/images/Nav/search.png"
            alt="search-icon"
          />
          <input className="search-input" />
        </div>
        <div className="icons">
          <img className="icon" src="/images/Nav/like.png" alt="like-icon" />
          <img
            className="icon"
            src="/images/Nav/cart.png"
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
      </nav>
    </div>
  );
};

export default Nav;
