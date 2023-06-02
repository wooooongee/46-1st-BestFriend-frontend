import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_CATEGORIES } from '../Category/Category';
import './Dropdown.scss';

const NAV_MENU = Object.values(MAIN_CATEGORIES);

const Dropdown = ({ setIsMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="dropdown" onMouseLeave={() => setIsMenuOpen(false)}>
      {NAV_MENU.map(({ title, path, subCategories }) => {
        return (
          <ul key={title} className="dropdown-sub">
            <li className="main-category-all" onClick={() => navigate(path)}>
              전체보기
            </li>
            {subCategories.map(({ id, title }) => {
              return (
                <li
                  className="subcategory"
                  key={id}
                  onClick={() => navigate(`/list?category=${id}`)}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Dropdown;
