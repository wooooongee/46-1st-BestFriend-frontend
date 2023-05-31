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

      <div className="dropdown-menu">
        <ul className="plants-sub">
          {PLANTS_SUBCATEGORY.map(plantsSub => {
            return (
              <li key={plantsSub.id} onClick={() => navigate('/plants')}>
                {plantsSub.subcategoryName}
              </li>
            );
          })}
        </ul>
        <ul className="pots-sub">
          {POTS_SUBCATEGORY.map(potsSub => {
            return (
              <li key={potsSub.id} onClick={() => navigate('/pots')}>
                {potsSub.subcategoryName}
              </li>
            );
          })}
        </ul>
        <ul className="tools-sub">
          {TOOLS_SUBCATEGORY.map(toolsSub => {
            return (
              <li key={toolsSub.id} onClick={() => navigate('/tools')}>
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
