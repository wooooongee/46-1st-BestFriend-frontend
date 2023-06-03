import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Filter.scss';

const Filter = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = e => {
    setChecked(e.target.checked);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const setFilter = () => {
    searchParams.set(`is${PLANT_FILTERS.key}Included`, !checked);
    setSearchParams(searchParams);
  };

  return (
    <div className="filter">
      <h2 className="section-title">필터</h2>
      <ul className="filters">
        {PLANT_FILTERS.map(filter => {
          return (
            <li className="filter-title" key={filter.id}>
              <input
                className="filter-checkbox"
                type="checkbox"
                onChange={(handleCheckbox, setFilter)}
              />
              {filter.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;

const PLANT_FILTERS = [
  { id: '1', key: 'Flower', title: '꽃이 피는 식물' },
  { id: '2', key: 'Berry', title: '열매가 열리는 식물' },
];
