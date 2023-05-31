import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PLANTS_SUBCATEGORY,
  POTS_SUBCATEGORY,
  TOOLS_SUBCATEGORY,
} from '../Subcategory/Subcategory';
import './Dropdown.scss';

const Dropdown = () => {
  const navigate = useNavigate();
  return (
    <div className="dropdown">
      <ul className="dropdown-sub plants">
        {PLANTS_SUBCATEGORY.map(sub => {
          return (
            <li
              className="subcategory"
              key={sub.id}
              onClick={() => navigate(`${sub.path}`)}
            >
              {sub.name}
            </li>
          );
        })}
      </ul>
      <ul className="dropdown-sub pots">
        {POTS_SUBCATEGORY.map(sub => {
          return (
            <li
              className="subcategory"
              key={sub.id}
              onClick={() => navigate(`${sub.path}`)}
            >
              {sub.name}
            </li>
          );
        })}
      </ul>
      <ul className="dropdown-sub tools">
        {TOOLS_SUBCATEGORY.map(sub => {
          return (
            <li
              className="subcategory"
              key={sub.id}
              onClick={() => navigate(`${sub.path}`)}
            >
              {sub.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
