import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { LIST_LIMIT } from '../../constants';
import './Pagination.scss';

const Pagination = ({ lastNum }) => {
  const pages = [];
  for (let i = 1; i <= lastNum; i++) {
    pages.push(i);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.set('limit', LIST_LIMIT);
  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * LIST_LIMIT);
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination">
      <hr className="page-divider" />
      <div className="page">
        {pages.map(num => {
          return (
            <button
              className="page-btn"
              key={num}
              onClick={() => movePage(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
