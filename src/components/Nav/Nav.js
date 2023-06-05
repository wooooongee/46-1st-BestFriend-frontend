import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PLANTS_SUBCATEGORY,
  POTS_SUBCATEGORY,
  TOOLS_SUBCATEGORY,
} from '../Subcategory/Subcategory';
import Dropdown from '../Dropdown/Dropdown';

import './Nav.scss';
const Nav = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="nav">
      <nav className="navbar">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + '/images/Nav/gron-logo.png'}
          alt="gron-logo"
          onClick={() => navigate('/')}
        />
        <ul className="menus">
          {NAV_MENU.map(menu => {
            return (
              <li
                className="menu"
                key={menu.id}
                onMouseOver={() => {
                  setIsMenuOpen(true);
                }}
              >
                {menu.name}
              </li>
            );
          })}
          {isMenuOpen && <Dropdown setIsMenuOpen={setIsMenuOpen} />}
        </ul>
        <div className="search">
          <img
            className="search-icon"
            src={process.env.PUBLIC_URL + '/images/Nav/search.png'}
            alt="search-icon"
          />
          <input className="search-input" />
        </div>
        <div className="icons">
          <img
            className="icon"
            src={process.env.PUBLIC_URL + '/images/Nav/like.png'}
            alt="like-icon"
            onClick={() => {
              navigate('/wishlist');
            }}
          />
          <img
            className="icon"
            src={process.env.PUBLIC_URL + '/images/Nav/cart.png'}
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

const NAV_MENU = [
  { id: '1', path: '/products', name: '식물', subcategory: PLANTS_SUBCATEGORY },
  { id: '2', path: '/products', name: '화분', subcategory: POTS_SUBCATEGORY },
  {
    id: '3',
    path: '/products',
    name: '관리상품',
    subcategory: TOOLS_SUBCATEGORY,
  },
];
