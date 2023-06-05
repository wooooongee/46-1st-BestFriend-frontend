import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Filter.scss';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const toggleBerry = e => {
    e.target.checked
      ? searchParams.set('isBerryIncluded', 1)
      : searchParams.delete('isBerryIncluded');
    setSearchParams(searchParams);
  };
  const toggleFlower = e => {
    e.target.checked
      ? searchParams.set('isFlowerIncluded', 1)
      : searchParams.delete('isFlowerIncluded');
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
