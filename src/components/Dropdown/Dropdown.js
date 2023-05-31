import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PLANTS_SUBCATEGORY,
  POTS_SUBCATEGORY,
  TOOLS_SUBCATEGORY,
} from '../Subcategory/Subcategory';

const Dropdown = props => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="dropdown-sub plants">
        {props.sub.map(sub => {
          return (
            <li
              className="subcategory"
              key={sub.id}
              onClick={() => navigate(sub.path)}
            >
              {sub.name}
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
              {potsSub.name}
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
              {toolsSub.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
