import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Filter.scss';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const toggleBerry = e => {
    searchParams.set('isBerryIncluded', e.target.checked);
    setSearchParams(searchParams);
  };
  const toggleFlower = e => {
    searchParams.set('isFlowerIncluded', e.target.checked);
    setSearchParams(searchParams);
  };

  return (
    <div className="filter">
      <h2 className="section-title">필터</h2>
      <ul className="filters">
        <li className="filter-title">
          <input
            className="filter-checkbox"
            type="checkbox"
            onChange={toggleBerry}
          />
          꽃이 피는 식물
        </li>
        <li className="filter-title">
          <input
            className="filter-checkbox"
            type="checkbox"
            onChange={toggleFlower}
          />
          열매가 열리는 식물
        </li>
      </ul>
    </div>
  );
};

export default Filter;
