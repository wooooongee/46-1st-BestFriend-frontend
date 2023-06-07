import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Sort.scss';

const Sort = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortPage = option => {
    option === 'newest'
      ? searchParams.delete('orderBy')
      : searchParams.set('orderBy', option);
    setSearchParams(searchParams);
  };

  return (
    <div className="sort">
      <div
        className="sort-btn"
        onClick={() => {
          setIsToggleOn(!isToggleOn);
        }}
      >
        <span>정렬 기준</span>
        <span>
          <img
            className="sort-icon"
            src="/images/ProductList/sort.png"
            alt="sort-icon"
          />
        </span>
      </div>
      {isToggleOn && (
        <ul className="sort-options">
          {SORT_OPTIONS.map(({ id, title, sort }) => {
            return (
              <li
                key={id}
                className="sort-option"
                onClick={() => {
                  sortPage(sort);
                }}
              >
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Sort;

const SORT_OPTIONS = [
  { id: 1, title: '최신순', sort: 'newest' },
  { id: 2, title: '낮은가격순', sort: 'priceASC' },
  { id: 3, title: '높은가격순', sort: 'priceDESC' },
];
