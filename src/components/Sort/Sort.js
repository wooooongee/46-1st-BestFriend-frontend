import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Sort.scss';

const Sort = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortPage = option => {
    searchParams.set('orderBy', option);
    setSearchParams(searchParams);
  };
  const sortDefault = () => {
    searchParams.delete('orderBy');
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
            src="/images/PRoductList/sort.png"
            alt="sort-icon"
          />
        </span>
      </div>
      {isToggleOn && (
        <ul className="sort-options">
          <li
            className="sort-option"
            onClick={() => {
              sortDefault();
            }}
          >
            최신순
          </li>
          <li
            className="sort-option"
            onClick={() => {
              sortPage('priceASC');
            }}
          >
            낮은가격순
          </li>
          <li
            className="sort-option"
            onClick={() => {
              sortPage('priceDESC');
            }}
          >
            높은가격순
          </li>
        </ul>
      )}
    </div>
  );
};
export default Sort;
