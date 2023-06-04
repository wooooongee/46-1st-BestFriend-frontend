import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Sort.scss';

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="sort">
      <div className="sort-btn">
        <span>정렬 기준</span>
        <span>
          <img
            className="sort-icon"
            src="/images/PRoductList/sort.png"
            alt="sort-icon"
          />
        </span>
      </div>
      <ul className="sort-options">
        <li className="sort-option">최신순</li>
        <li className="sort-option">낮은가격순</li>
        <li className="sort-option">높은가격순</li>
      </ul>
    </div>
  );
};
export default Sort;
