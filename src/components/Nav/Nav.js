import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PLANTS_SUBCATEGORY } from '../PlantsSubcategory/PlantsSubcategory';
import { POTS_SUBCATEGORY } from '../PotsSubcategory/PotsSubcategory';
import { TOOLS_SUBCATEGORY } from '../ToolsSubcategory/ToolsSubcategory';
import './Nav.scss';
const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav">
        <img
          className="logo"
          src="./images/Nav/gron-logo.png"
          alt="gron-logo"
          onClick={() => navigate('/')}
        />
        <ul className="menus">
          {NAV_MENU.map(menu => {
            return (
              <li
                className="menu"
                key={menu.id}
                onClick={() => navigate(`${menu.url}`)}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
        <div className="search">
          <img
            className="search-icon"
            src="./images/Nav/search.png"
            alt="search-icon"
          />
          <input className="search-input" />
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

      <div className="dropdown-menu">
        <ul className="dropdown-sub plants">
          {PLANTS_SUBCATEGORY.map(plantsSub => {
            return (
              <li
                className="subcategory"
                key={plantsSub.id}
                onClick={() => navigate('/plants')}
              >
                {plantsSub.subcategoryName}
              </li>
            );
          })}
        </ul>
        <ul className="dropdown-sub pots">
          {POTS_SUBCATEGORY.map(potsSub => {
            return (
              <li
                className="subcategory"
                key={potsSub.id}
                onClick={() => navigate('/pots')}
              >
                {potsSub.subcategoryName}
              </li>
            );
          })}
        </ul>
        <ul className="dropdown-sub tools">
          {TOOLS_SUBCATEGORY.map(toolsSub => {
            return (
              <li
                className="subcategory"
                key={toolsSub.id}
                onClick={() => navigate('/tools')}
              >
                {toolsSub.subcategoryName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;

const NAV_MENU = [
  { id: '1', url: '/plants', name: '식물' },
  { id: '2', url: '/pots', name: '화분' },
  { id: '3', url: '/tools', name: '관리상품' },
];
